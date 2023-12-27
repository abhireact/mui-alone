import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import MDButton from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import DataTable from "examples/Tables/DataTable";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import MDTypography from "components/MDTypography";
import Avatar from "@mui/material/Avatar";
import image1 from "./images/man.png";
import image2 from "./images/woman.png";
import Cookies from "js-cookie";
const token = Cookies.get("token");
const Emp = () => {
  const handleDelete = async (first_name: any, last_name: any, email: any) => {
    try {
      await axios.delete("http://10.0.20.133:8000/employee/", {
        data: {
          first_name: first_name,
          last_name: last_name,
          email: email,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Not Deleted", error);
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/employee", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwNzE2MTAxfQ.qGUKy1fkZx15cX_LGBkM1tj35t5YbkGqymbNfJiIiGg`,
        },
      })
      .then((response) => {
        setData(response.data);
        // setTasks(response.data); //updating dialog box
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const dataTableData = {
    columns: [
      { Header: "EMPLOYEE NAME", accessor: "emp_name" },
      { Header: "EMAIL ADDRESS", accessor: "email_id" },
      { Header: "ROLE", accessor: "role" },
      { Header: "DESIGNATION", accessor: "designation" },
      { Header: "DEPARTMENT", accessor: "department" },
      { Header: "LOCATION", accessor: "location" },
      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      emp_name: (
        <>
          {row.gender === "female" ? <Avatar src={image2} /> : <Avatar src={image1} />}
          <MDTypography variant="p">
            {row.first_name} {row.last_name}
          </MDTypography>
        </>
      ),
      email_id: <MDTypography variant="p">{row.email}</MDTypography>,
      role: <MDTypography variant="p">{row.role}</MDTypography>,
      designation: <MDTypography variant="p">{row.designation}</MDTypography>,
      department: <MDTypography variant="p">{row.department}</MDTypography>,
      location: <MDTypography variant="p">{row.location}</MDTypography>,

      action: (
        <MDTypography variant="p">
          <IconButton>
            <CreateRoundedIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(row.first_name, row.last_name, row.email)}>
            <DeleteIcon />
          </IconButton>
        </MDTypography>
      ),
    })),
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Emp;
