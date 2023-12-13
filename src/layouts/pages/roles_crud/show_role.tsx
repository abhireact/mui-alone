import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { useState, useEffect } from "react";
import axios from "axios";
import Addrole from "./create_role";
import Editrole from "./edit_role";

const Showrole = () => {
  const [data, setData] = useState([]);
  //Start
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //End

  //Update Dialog Box Start
  const [editData, setEditData] = useState(null);
  const [openupdate, setOpenupdate] = useState(false);

  const handleOpenupdate = (index: number) => {
    setOpenupdate(true);
    const main_data = data[index];
    console.log(main_data, "maindata");

    setOpenupdate(true);
    setEditData(main_data);
  };

  const handleCloseupdate = () => {
    setOpenupdate(false);
  }; //End

  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/mg_roles/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAxODUyNzAxfQ.DV4RbO4sbm3XQ8loXJX7LLUUUxBLOWxS4J1mIaZBsPs`,
        },
      })
      .then((response) => {
        setData(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const dataTableData = {
    columns: [
      { Header: "Role Name", accessor: "role_display_name" },

      { Header: "Status", accessor: "status" },
      { Header: "Role Access", accessor: "seeded" },
      { Header: "Access For Location", accessor: "location_name" },

      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      role_display_name: <MDTypography variant="p">{row.role_display_name}</MDTypography>,
      location_name: <MDTypography variant="p">{row.location_name}</MDTypography>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              handleOpenupdate(index);
              console.log(index, "update index");
            }}
          >
            <CreateRoundedIcon />
          </IconButton>
        </MDTypography>
      ),

      status: <MDTypography variant="p">{row.status}</MDTypography>,
      seeded: <MDTypography variant="p">{row.seeded}</MDTypography>,
    })),
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="h5">ROLES</MDTypography>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MDButton variant="outlined" color="info" onClick={() => handleClickOpen()}>
          + Add Role
        </MDButton>
        <Dialog open={open} onClose={handleClose}>
          <Addrole setOpen={setOpen} />
        </Dialog>
        <Dialog open={openupdate} onClose={handleCloseupdate}>
          <Editrole setOpenupdate={setOpenupdate} editData={editData} />
        </Dialog>
      </Grid>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Showrole;
