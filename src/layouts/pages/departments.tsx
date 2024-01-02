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
import Updatedep from "./updatedep";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
const token = Cookies.get("token");
//department validation
const validationSchema = yup.object({
  departmentname: yup.string().required("Please enter department name"),
  departmentcode: yup.string().required("Code is required"),

  description: yup.string().required("Password is required"),
});

function DataTables(): JSX.Element {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);

  //for dialog box start

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; //end
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/department", {
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
      { Header: "DEPARTMENT NAME", accessor: "dept_name" },
      { Header: "DEPARTMENT CODE", accessor: "dept_code" },
      { Header: "DESCRIPTION", accessor: "description" },
      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      dept_name: <p>{row.dept_name}</p>,
      dept_code: <p>{row.dept_code}</p>,
      description: <p>{row.description}</p>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              handleOpenupdate(index);
            }}
          >
            <CreateRoundedIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteTask(row.dept_name)}>
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
    const main_data = tasks[index];
    console.log(main_data, "maindata");

    setOpenupdate(true);
    setEditTaskData(main_data);
  };
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  //Deleting part
  const handleDeleteTask = async (dept_name: any) => {
    console.log(dept_name, "function is working");
    try {
      await axios.delete("http://10.0.20.133:8000/department", {
        data: { dept_name: dept_name },
      });
      window.location.reload();
    } catch (error) {
      console.error("Not Deleted", error);
    }
  };

  //department formik
  const formik = useFormik({
    initialValues: {
      departmentname: "",
      departmentcode: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      axios
        .post(
          "http://10.0.20.133:8000/department",
          {
            dept_name: values.departmentname,
            dept_code: values.departmentcode,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjpudWxsLCJlbWFpbCI6Im9tQGdtYWlsLmNvbSIsImV4cCI6MTY5OTg2Njg4NX0.qZo6yboMJeGRuNZOmxsby3OTDNPEj7qcCHwtsKTvlYM`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(values);
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox mb={3}>
        <MDBox p={3}>
          <MDTypography variant="h3" fontWeight="medium">
            {t("Dep")}
          </MDTypography>
        </MDBox>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="info" onClick={handleClickOpen}>
            + New Departments
          </Button>
        </Grid>

        <Card>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <Card>
                <form onSubmit={formik.handleSubmit}>
                  <MDBox p={4}>
                    <Grid container spacing={2}>
                      <Grid sm={6}>
                        <MDInput
                          sx={{ width: "75%" }}
                          // id="email"
                          variant="standard"
                          name="departmentname"
                          label="Department Name"
                          value={formik.values.departmentname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.departmentname && Boolean(formik.errors.departmentname)
                          }
                          helperText={formik.touched.departmentname && formik.errors.departmentname}
                          mb={10}
                          mt={10}
                        />
                      </Grid>
                      <Grid sm={5}>
                        <MDInput
                          // id="email"
                          sx={{ width: "75%" }}
                          variant="standard"
                          name="departmentcode"
                          label="Department Code"
                          value={formik.values.departmentcode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.departmentcode && Boolean(formik.errors.departmentcode)
                          }
                          helperText={formik.touched.departmentcode && formik.errors.departmentcode}
                          mb={10}
                          mt={10}
                        />
                      </Grid>

                      <Grid sm={12}>
                        <MDInput
                          variant="standard"
                          name="description"
                          label="Description..."
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.description && Boolean(formik.errors.description)}
                          helperText={formik.touched.description && formik.errors.description}
                          mb={10}
                          mt={10}
                          sx={{ width: "80%" }}
                          multiline
                          rows={5}
                        />
                      </Grid>

                      <Grid mt={3}>
                        <Button color="info" variant="contained" type="submit">
                          Save
                        </Button>
                      </Grid>
                      <Grid ml={2} mt={3}>
                        <Button color="primary" variant="contained" onClick={handleClose}>
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </MDBox>
                </form>
              </Card>
            </DialogContent>
          </Dialog>

          <Dialog open={openupdate} onClose={handleCloseupdate}>
            <Updatedep openupdate={openupdate} setOpenupdate={setOpenupdate} task={editTaskData} />
          </Dialog>
          <DataTable table={dataTableData} importbtn />
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default DataTables;
