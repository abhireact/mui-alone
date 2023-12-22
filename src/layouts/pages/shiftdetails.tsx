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
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import axios from "axios";

import Addshift from "./addshift";
import Updateshift from "./updateshift";

const shiftdetails = () => {
  const [data, setData] = useState([]);
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
  //Create Dialog Box Start
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //End
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/shifts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
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
      { Header: "SHIFT NAME", accessor: "shift_name" },
      { Header: "TIME", accessor: "time" },
      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      shift_name: <p>{row.shift_name}</p>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              handleOpenupdate(index);
              console.log(index);
            }}
          >
            <CreateRoundedIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteData(row.shift_name)}>
            <DeleteIcon />
          </IconButton>
        </MDTypography>
      ),
      time: (
        <MDTypography variant="p">
          {row.start_from} to {row.to_time}
        </MDTypography>
      ),
    })),
  };
  const handleDeleteData = async (shift_name: any) => {
    console.log(shift_name, "Deleted Data");
    try {
      await axios.delete("http://10.0.20.133:8000/shifts", {
        data: { shift_name: shift_name },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography>Shift Details</MDTypography>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MDButton variant="contained" color="info" onClick={handleClickOpen}>
          + Add Shift
        </MDButton>
        <Dialog open={open} onClose={handleClose}>
          <Addshift />
        </Dialog>
        <Dialog open={openupdate} onClose={handleCloseupdate}>
          <Updateshift setOpenupdate={setOpenupdate} editData={editData} />
        </Dialog>
      </Grid>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default shiftdetails;
