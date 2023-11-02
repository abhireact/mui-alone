import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/MDButton";
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
import Updatedes from "./updatedes";
import MDTypography from "components/MDTypography";
import { useTranslation } from "react-i18next";

const validationSchema = yup.object({
  designations: yup.string().required("Please enter designation name"),
});

const Designations = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //sending props to component
  const [tasks, setTasks] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);

  const [openupdate, setOpenupdate] = useState(false); //for dialog box start
  console.log(tasks, "tasking");
  const handleOpenupdate = (index: number) => {
    const main_data = tasks[index];
    console.log(main_data, "maindata");

    setOpenupdate(true);
    setEditTaskData(main_data);
  };
  console.log(editTaskData, "taskata");

  const handleCloseupdate = () => {
    setOpenupdate(false);
  }; //end

  const handleDeleteTask = async (des_name: any) => {
    console.log(des_name, "ehcfdki");
    try {
      await axios.delete("http://10.0.20.131:8000/designation", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
        data: {
          des_name: des_name,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/designation", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
      })
      .then((response) => {
        setData(response.data);
        setTasks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const dataTableData = {
    columns: [
      { Header: "DESIGNATION NAME", accessor: "des_name" },
      { Header: "Action", accessor: "action", width: "20%" },
    ],

    rows: data.map((row, index) => ({
      des_name: <p>{row.des_name}</p>,
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
          <IconButton onClick={() => handleDeleteTask(row.des_name)}>
            <DeleteIcon />
          </IconButton>
        </MDTypography>
      ), // Replace "handleAction" with the function you want to call for each row action.
    })),
  };

  const formik = useFormik({
    initialValues: {
      designations: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      axios
        .post(
          "http://10.0.20.133:8000/designation",
          {
            des_name: values.designations,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(values);

      action.resetForm();
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="h3">{t("Desc")}</MDTypography>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="info" onClick={handleOpen}>
          + New Designations
        </Button>
      </Grid>
      <Card>
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={formik.handleSubmit}>
            <MDBox p={4}>
              <Grid container spacing={2}>
                <Grid sm={12}>
                  <MDInput
                    sx={{ width: 500 }}
                    variant="standard"
                    name="designations"
                    autoComplete="off"
                    label="Designation Name"
                    value={formik.values.designations}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.designations && Boolean(formik.errors.designations)}
                    helperText={formik.touched.designations && formik.errors.designations}
                    mb={10}
                    mt={10}
                  />
                </Grid>

                <Grid mt={3}>
                  <Button
                    color="info"
                    variant="contained"
                    type="submit"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid ml={2} mt={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </MDBox>
          </form>
        </Dialog>
      </Card>

      <Dialog open={openupdate} onClose={handleCloseupdate}>
        <Updatedes openupdate={openupdate} setOpenupdate={setOpenupdate} task={editTaskData} />
      </Dialog>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Designations;
