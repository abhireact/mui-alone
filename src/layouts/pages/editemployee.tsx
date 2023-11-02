import Extrawork from "./extrawork";
import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import MDButton from "components/MDButton";
import MDDropzone from "components/MDDropzone";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import validationSchema from "./schema";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MDDatePicker from "components/MDDatePicker";
import TextField from "@mui/material/TextField";
import ConstructionIcon from "@mui/icons-material/Construction";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import MDTypography from "components/MDTypography";
import Stack from "@mui/material/Stack";

import React from "react";

function Editemployee() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      emp_id: "1232",
      nickname: "",
      firstname: "",
      lastname: "",
      emailaddress: "",
      department: "",
      designation: "",
      location: "",
      zohorole: "",
      employmenttype: "",
      employeestatus: "",
      sourceofhire: "",
      dateofjoining: "2023-08-24",
      reportingmanager: "",
      dateofbirth: "",
      expertise: "",
      maritalstatus: "",
      aboutme: "",
      uan: "",
      pan: "",
      aadhaar: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <form onSubmit={handleSubmit}>
        <MDBox>
          <Grid container>
            <Grid sm={12}>
              <MDTypography variant="h6">Basic Information</MDTypography>
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="emp_id"
                label="Employee ID"
                value={values.emp_id}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.emp_id && Boolean(errors.emp_id)}
                helperText={touched.emp_id && errors.emp_id}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="nickname"
                label="Nick Name"
                value={values.nickname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.nickname && Boolean(errors.nickname)}
                helperText={touched.nickname && errors.nickname}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="firstname"
                label="Full Name"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={touched.firstname && errors.firstname}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="emailaddress"
                label="Email Address"
                value={values.emailaddress}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.emailaddress && Boolean(errors.emailaddress)}
                helperText={touched.emailaddress && errors.emailaddress}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="lastname"
                label="Last Name"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
              />
            </Grid>

            <Grid sm={12}>
              <MDTypography variant="h6">Work Information</MDTypography>
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="department"
                label="Department"
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.department && Boolean(errors.department)}
                helperText={touched.department && errors.department}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="location"
                label="Location"
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.location && Boolean(errors.location)}
                helperText={touched.location && errors.location}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="designation"
                label="Designation"
                value={values.designation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.designation && Boolean(errors.designation)}
                helperText={touched.designation && errors.designation}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="zohorole"
                label="Zoho Role"
                value={values.zohorole}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.zohorole && Boolean(errors.zohorole)}
                helperText={touched.zohorole && errors.zohorole}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="employmenttype"
                label="Employment Type"
                value={values.employmenttype}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.employmenttype && Boolean(errors.employmenttype)}
                helperText={touched.employmenttype && errors.employmenttype}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="employeestatus"
                label="Employee Status"
                value={values.employeestatus}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.employeestatus && Boolean(errors.employeestatus)}
                helperText={touched.employeestatus && errors.employeestatus}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="sourceofhire"
                label="Source of Hiring"
                value={values.sourceofhire}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.sourceofhire && Boolean(errors.sourceofhire)}
                helperText={touched.sourceofhire && errors.sourceofhire}
              />
            </Grid>
            <Grid sm={6}>
              <MDInput
                type="Date"
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="dateofjoining"
                label="Source of Hiring"
                value={values.dateofjoining}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.dateofjoining && Boolean(errors.dateofjoining)}
                helperText={touched.dateofjoining && errors.dateofjoining}
              />
            </Grid>
            <Grid sm={12}>
              <MDTypography variant="h6">Hierarchy Information Information</MDTypography>
            </Grid>
            <Grid sm={6}>
              <MDInput
                type="Date"
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="dateofjoining"
                label="Source of Hiring"
                value={values.dateofjoining}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.dateofjoining && Boolean(errors.dateofjoining)}
                helperText={touched.dateofjoining && errors.dateofjoining}
              />
            </Grid>
            <Grid sm={12}>
              <MDTypography variant="h6">Personal Details</MDTypography>
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: "80%" }}
                autoComplete="off"
                variant="standard"
                name="dateofbirth"
                label=""
                value={values.dateofjoining}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.dateofjoining && Boolean(errors.dateofjoining)}
                helperText={touched.dateofjoining && errors.dateofjoining}
              />
            </Grid>
            <MDButton color="info" variant="contained" type="submit">
              Submit
            </MDButton>
          </Grid>
        </MDBox>
      </form>
    </DashboardLayout>
  );
}

export default Editemployee;
