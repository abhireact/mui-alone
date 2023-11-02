import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import MDTypography from "components/MDTypography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";

const Employeesm = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/employee_shift_mapper", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3NTQxNTcxLCJhZG1pbiI6dHJ1ZX0.IyjMWyqeu4p23yJsF03vrBNUO547U78_AkLjXuroYg8"}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const dataTableData = {
    columns: [
      { Header: "Employee", accessor: "users" },
      { Header: "Shifts", accessor: "shift_name" },
      { Header: "Modified_On", accessor: "created_at" },
      { Header: "Action", accessor: "action", width: "20%" },
    ],

    rows: data.map((row, index) => ({
      users: <MDTypography variant="p">{row.users}</MDTypography>,
      shift_name: (
        <Stack>
          <MDTypography variant="p">{row.shift_name}</MDTypography>
          <MDTypography variant="p">
            {row.shift_start_date} {row.shift_end_date}
          </MDTypography>
        </Stack>
      ),
      created_at: <MDTypography variant="p">{row.created_at}</MDTypography>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              console.log(index);
            }}
          >
            <CreateRoundedIcon />
          </IconButton>
          <IconButton>
            {/* <IconButton onClick={() => handleDeleteTask(row.des_name)}>*/}
            <DeleteIcon />
          </IconButton>
        </MDTypography>
      ), // Replace "handleAction" with the function you want to call for each row action.
    })),
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MDButton variant="contained" color="info">
          + Assign
        </MDButton>
      </Grid>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Employeesm;
