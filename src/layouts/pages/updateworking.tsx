import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components

import Button from "components/MDButton";

import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

import axios from "axios";

import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const validationSchema = yup.object({
  name: yup.string().required("Please  name"),
  location: yup.string().required("please enter the field"),
  date: yup.string().required("please put date"),
  description: yup.string().required("please fill the description"),
});

const Updateworking = (props: any) => {
  const { openUpdate, setOpenupdate, task } = props;
  console.log(task, "task");
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  //department formik
  const formik = useFormik({
    initialValues: {
      name: task.name,
      location: task.applicable_for,
      date: task.date,
      description: task.description,
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      axios
        .put("http://10.0.20.133:8001/exceptionalworkday", {
          name: values.name,
          date: values.date,
          description: values.description,
          applicable_for: values.location,
        })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(values);
      action.resetForm();
    },
  });
  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <MDBox p={4}>
          <Grid container>
            <Grid sm={12}>
              <MDInput
                sx={{ width: "75%" }}
                // id="email"
                variant="standard"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                mb={10}
                mt={10}
              />
            </Grid>
            <Grid sm={12}>
              <MDInput
                // id="email"
                sx={{ width: "75%" }}
                variant="standard"
                name="location"
                label="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
                mb={10}
                mt={10}
              />
            </Grid>
            <Grid sm={12}>
              <MDInput
                sx={{ width: "75%" }}
                // id="email"
                variant="standard"
                name="date"
                label="Date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
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
              <Button
                color="info"
                variant="contained"
                type="submit"
                onClick={() => {
                  handleCloseupdate();
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
                  handleCloseupdate();
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </MDBox>
      </form>
    </Card>
  );
};

export default Updateworking;
