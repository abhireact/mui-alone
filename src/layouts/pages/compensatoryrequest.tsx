import Card from "@mui/material/Card";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Button from "components/MDButton";

import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

import axios from "axios";

import MDInput from "components/MDInput";
import { useFormik } from "formik";

import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MDDatePicker from "components/MDDatePicker";

const Compensatoryrequest = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState();

  const [open, setOpen] = useState(false); //for dialog box start

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; //end
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8001/requestscheduler")
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
      { Header: "Schedule Name", accessor: "schedulename" },
      { Header: "Time of Schedule", accessor: "timeofschedule" },
      { Header: "Date", accessor: "date" },
      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      schedulename: <p>{row.schedule_name}</p>,
      timeofschedule: <p>{row.time_of_schedule}</p>,
      date: <p>{row.date}</p>,
      action: (
        <MDTypography variant="p">
          <IconButton>
            <CreateRoundedIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleOpen()}>
            <PlayArrowRoundedIcon />
          </IconButton>
        </MDTypography>
      ),
    })),
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid container>
            <Grid sm={12}>
              <MDTypography>Execute Scheduler</MDTypography>
            </Grid>
            <Grid sm={12}>
              Date
              <MDInput
                type="date"
                variant="standard"
                value={date}
                onChange={(e: any) => setDate(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Compensatoryrequest;
