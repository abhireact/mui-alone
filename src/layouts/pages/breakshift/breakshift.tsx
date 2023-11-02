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
import Addbreak from "./addbreak";
import Updatebreak from "./updatebreak";

// break_name: "",
// icon: "",
// pay_type: "",
// mode: "",
// breake_start_time: "",
// break_end_time: "",
// applicable_shifts: "",

const Breakshift = () => {
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

  const handleDeleteData = async (break_name: any) => {
    console.log(break_name, "Deleted Data");
    try {
      await axios.delete("http://10.0.20.133:8000/employee_shift_break", {
        data: { break_name: break_name },
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
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/employee_shift_break", {
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
      { Header: "Name", accessor: "break_name" },
      { Header: "Allowed Duration", accessor: "allowed_duration" },
      { Header: "Time Range", accessor: "time" },

      { Header: "Pay Type", accessor: "pay_type" },
      { Header: "Mode ", accessor: "mode" },

      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      break_name: <MDTypography variant="p">{row.break_name}</MDTypography>,
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
          <IconButton onClick={() => handleDeleteData(row.break_name)}>
            <DeleteIcon />
          </IconButton>
        </MDTypography>
      ),
      allowed_duration: (
        <MDTypography variant="p">{row.breake_start_time - row.end_start_time}</MDTypography>
      ),
      time: (
        <MDTypography variant="p">
          {row.breake_start_time} to {row.end_start_time}
        </MDTypography>
      ),
      pay_type: <MDTypography variant="p">{row.pay_type}</MDTypography>,
      mode: <MDTypography variant="p">{row.mode}</MDTypography>,
    })),
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography>Shift Details</MDTypography>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MDButton variant="contained" color="info" onClick={handleClickOpen}>
          + Add Shift
        </MDButton>
        <Dialog open={open} onClose={handleClose} fullScreen>
          <Addbreak setOpen={setOpen} />
        </Dialog>
        <Dialog open={openupdate} onClose={handleCloseupdate}>
          <Updatebreak setOpenupdate={setOpenupdate} editData={editData} />
        </Dialog>
      </Grid>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Breakshift;
