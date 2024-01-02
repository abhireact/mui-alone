import axios from "axios";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import Cookies from "js-cookie";
const token = Cookies.get("token");
const Applyleave = (props: any) => {
  const { openUpdate, setOpenupdate, task } = props;

  const handleCloseupdate = () => {
    setOpenupdate(false);
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      employee_name: "",
      leave_type: "",
      team_email: "",
      from_date: "",
      to_date: "",
      reason_for_leave: "",
      status: true,
    },
    onSubmit: (values, action) => {
      axios
        .post(
          "http://10.0.20.133:8000/apply_leave",
          {
            leave_type: values.leave_type,
            employee_name: values.employee_name,
            team_email: values.team_email,
            from_date: values.from_date,
            to_date: values.to_date,
            reason_for_leave: values.reason_for_leave,
            status: values.status,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(values, "values");
      action.resetForm();
    },
  });
  return (
    <>
      <MDBox p={4} sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid sm={6} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDTypography variant="body2">Employee ID</MDTypography>
            </Grid>
            <Grid sm={4} my={3}>
              <MDInput
                sx={{ width: "90%" }}
                autoComplete="off"
                variant="standard"
                name="employee_name"
                value={values.employee_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.employee_name && Boolean(errors.employee_name)}
                helperText={touched.employee_name && errors.employee_name}
              />
            </Grid>

            <Grid sm={6} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDTypography variant="body2">Leave Type</MDTypography>
            </Grid>
            <Grid sm={4} my={3}>
              <MDInput
                sx={{ width: "90%" }}
                autoComplete="off"
                variant="standard"
                name="leave_type"
                value={values.leave_type}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.leave_type && Boolean(errors.leave_type)}
                helperText={touched.leave_type && errors.leave_type}
              />
            </Grid>

            <Grid sm={5} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDTypography variant="body2" pl={6}>
                Date
              </MDTypography>
            </Grid>
            <Grid sm={2} my={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <MDInput
                type="date"
                name="from_date"
                variant="standard"
                value={values.from_date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.from_date && Boolean(errors.from_date)}
                helperText={touched.from_date && errors.from_date}
              />
            </Grid>
            <Grid sm={1} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDTypography variant="body2"> to</MDTypography>
            </Grid>
            <Grid sm={2} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDInput
                type="date"
                name="to_date"
                variant="standard"
                value={values.to_date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.to_date && Boolean(errors.to_date)}
                helperText={touched.to_date && errors.to_date}
              />
            </Grid>

            <Grid sm={6} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDTypography variant="body2">Team Email ID</MDTypography>
            </Grid>
            <Grid sm={4} my={3}>
              <MDInput
                sx={{ width: "90%" }}
                autoComplete="off"
                variant="standard"
                name="team_email"
                value={values.team_email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.team_email && Boolean(errors.team_email)}
                helperText={touched.team_email && errors.team_email}
              />
            </Grid>
            <Grid sm={6} my={3} sx={{ display: "flex", justifyContent: "center" }}>
              <MDTypography variant="body2">Reason for Leave</MDTypography>
            </Grid>
            <Grid sm={4} my={3}>
              <MDInput
                multiline
                rows={3}
                sx={{ width: "90%" }}
                autoComplete="off"
                variant="standard"
                name="reason_for_leave"
                value={values.reason_for_leave}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.reason_for_leave && Boolean(errors.reason_for_leave)}
                helperText={touched.reason_for_leave && errors.reason_for_leave}
              />
            </Grid>

            <Grid container spacing={2} my={2} sx={{ display: "flex", justifyContent: "center" }}>
              <MDButton color="info" type="submit" variant="outlined">
                <MDTypography color="blue" variant="h6">
                  Submit &nbsp;
                </MDTypography>
                <SendIcon />
              </MDButton>
            </Grid>
          </Grid>
        </form>
      </MDBox>
    </>
  );
};

export default Applyleave;
