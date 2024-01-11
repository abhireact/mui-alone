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
import * as yup from "yup";

import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import SalaryEdit from "./edit_template";
import Cookies from "js-cookie";
const token = Cookies.get("token");

function Temptable(): JSX.Element {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/mg_salary_template", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setTasks(response.data); //updating dialog box
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const dataTableData = {
    columns: [
      { Header: "TEMPLATE NAME", accessor: "temp_name" },

      { Header: "DESCRIPTION", accessor: "description" },
      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      temp_name: <p>{row.template_name}</p>,
      description: <p>{row.template_description}</p>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              handleOpenupdate(index);
            }}
          >
            <CreateRoundedIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteTask(row.template_name)}>
            <DeleteIcon />
          </IconButton>
        </MDTypography>
      ),
    })),
  };
  // updating  dialog box
  const [tasks, setTasks] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);
  const [openupdate, setOpenupdate] = useState(false);
  const handleOpenupdate = (index: number) => {
    let main_data = tasks[index];
    console.log(main_data, "maindata");

    setOpenupdate(true);
    setEditTaskData(main_data);
  };
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  //Deleting part
  const handleDeleteTask = async (template_name: any) => {
    try {
      await axios.delete(
        `http://10.0.20.133:8000/mg_salary_template/?template_name=${template_name}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(template_name, "delete is working");
      window.location.reload();
    } catch (error) {
      console.error("Not Deleted", error);
    }
  };

  return (
    <>
      <DashboardLayout>
        <DataTable table={dataTableData} />
        <Dialog open={openupdate} onClose={handleCloseupdate} fullScreen>
          <SalaryEdit
            openupdate={openupdate}
            setOpenupdate={setOpenupdate}
            editdata={editTaskData}
          />
        </Dialog>
      </DashboardLayout>
    </>
  );
}

export default Temptable;
