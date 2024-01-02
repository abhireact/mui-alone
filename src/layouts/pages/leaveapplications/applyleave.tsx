import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
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
import { TroubleshootSharp } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import Cookies from "js-cookie";

import { Autocomplete } from "@mui/material";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
interface MyError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}
const Applyleave = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const EmployeeData = [
    {
      first_name: "Mindcom",
      last_name: null,
      email: "mindcom@gmail.com",
      department: null,
      designation: "Admin",
      location: "Banglore",
      role: "Admin",
      manager: null,
      added_by: null,
      joining_date: "None",
      dob: "None",
      gender: null,
      marital_status: null,
    },
    {
      first_name: "Hariom",
      last_name: "ojha",
      email: "2003om1711@gmail.com",
      department: "ffIT",
      designation: "hariom",
      location: "Mumbai",
      role: "Admin",
      manager: "Mindcom",
      added_by: "Mindcom",
      joining_date: "2022-01-07",
      dob: "2003-01-01",
      gender: "male",
      marital_status: "Single",
    },
    {
      first_name: "om",
      last_name: "ojha",
      email: "om.hariomojha@gmail.com",
      department: "ffIT",
      designation: "hariom",
      location: "Kolkata",
      role: "Admin",
      manager: "Mindcom",
      added_by: "Mindcom",
      joining_date: "2022-07-02",
      dob: "2003-01-01",
      gender: "male",
      marital_status: "Single",
    },
    {
      first_name: "Anjali",
      last_name: "sahani",
      email: "asahani@mindcomgroup.com",
      department: "ffIT",
      designation: "Developer",
      location: "Mumbai",
      role: "Employee",
      manager: "Hariom",
      added_by: "Hariom",
      joining_date: "2022-12-07",
      dob: "2001-01-01",
      gender: "female",
      marital_status: "Single",
    },
    {
      first_name: "Debendra",
      last_name: "Bedanta",
      email: "debkumar@mindcomgroup.com",
      department: "ffIT",
      designation: "S Developer",
      location: "Mumbai",
      role: "Employee",
      manager: "Hariom",
      added_by: "Hariom",
      joining_date: "2023-01-02",
      dob: "1998-05-14",
      gender: "female",
      marital_status: "",
    },
    {
      first_name: "Prabhakar",
      last_name: "Bishwal",
      email: "pbiswal@mindcomgroup.com",
      department: "abhiupdate",
      designation: "hariom",
      location: "Mumbai",
      role: "Employee",
      manager: "Hariom",
      added_by: "Hariom",
      joining_date: "2023-05-09",
      dob: "1992-11-05",
      gender: "male",
      marital_status: "Single",
    },
    {
      first_name: "darshan",
      last_name: "b",
      email: "suhas200124@gmail.com",
      department: "abhiupdate",
      designation: "hariom",
      location: "Mumbai",
      role: "Admin",
      manager: "Hariom",
      added_by: "Hariom",
      joining_date: "2023-10-08",
      dob: "2001-09-23",
      gender: "female",
      marital_status: "",
    },
    {
      first_name: "Praveen",
      last_name: "Kumar",
      email: "afeolxgcu@10mail.org",
      department: "Marketing",
      designation: "internet",
      location: "Mumbai",
      role: "Employee",
      manager: "Hariom",
      added_by: "Hariom",
      joining_date: "2023-04-11",
      dob: "1995-05-31",
      gender: "male",
      marital_status: "Married",
    },
    {
      first_name: "anjan",
      last_name: "sahani",
      email: "anjali@gmail.com",
      department: "IT",
      designation: "HR",
      location: "Banglore",
      role: "Admin",
      manager: "Hariom",
      added_by: "Hariom",
      joining_date: "2023-01-27",
      dob: "2000-08-04",
      gender: "female",
      marital_status: "Single",
    },
    {
      first_name: "anjalidfsddsf",
      last_name: "sahani",
      email: "anjan@gmail.com",
      department: "ffIT",
      designation: "HR",
      location: "Mumbai",
      role: "Admin",
      manager: "Anjali",
      added_by: "Anjali",
      joining_date: "2023-12-01",
      dob: "1999-09-09",
      gender: "female",
      marital_status: "Single",
    },
    {
      first_name: "fgv",
      last_name: "sahani",
      email: "debk@mindcomgroup.com",
      department: "abhiupdate",
      designation: "Admin",
      location: "Banglore",
      role: "Admin",
      manager: "Prabhakar",
      added_by: "Prabhakar",
      joining_date: "2023-12-01",
      dob: "1999-09-09",
      gender: "female",
      marital_status: "Single",
    },
  ];
  console.log("Employee", EmployeeData);
  const emoployee_name = [];

  if (EmployeeData && EmployeeData.length > 0) {
    const uniqueEmployeeDataNames = new Set();

    for (let i = 0; i < EmployeeData.length; i++) {
      const EmployeeDataName = EmployeeData[i]["email"];
      uniqueEmployeeDataNames.add(EmployeeDataName);
    }

    // Convert the Set to an array if needed
    emoployee_name.push(...uniqueEmployeeDataNames);
  }

  console.log(emoployee_name, "EmployeeDataName");
  const leavetype = [
    {
      leave_type_name: "Absent",
      leave_type_code: "xc",
      leave_type: "xcv",
      unit: "xcv",
      balance_based_on: "xcv",
      description: "xcv",
      start_date: "2023-09-13 00:00:00",
      end_date: "2023-11-19 00:00:00",
      gender: ["male"],
      marital_status: ["married"],
      department: ["abhiupdate", "ffIT", "Marketing"],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: ["Banglore", "Mumbai", "Kolkata", "New  Delhi"],
    },
    {
      leave_type_name: "Leave",
      leave_type_code: "xc",
      leave_type: "xcv",
      unit: "xcv",
      balance_based_on: "xcv",
      description: "xcv",
      start_date: "2023-09-13 00:00:00",
      end_date: "2023-11-19 00:00:00",
      gender: ["male"],
      marital_status: ["married"],
      department: ["abhiupdate", "ffIT", "Marketing"],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: ["Banglore", "Mumbai", "Kolkata", "New  Delhi"],
    },
    {
      leave_type_name: "Sick Leave",
      leave_type_code: "xc",
      leave_type: "xcv",
      unit: "xcv",
      balance_based_on: "xcv",
      description: "xcv",
      start_date: "2023-09-13 00:00:00",
      end_date: "2023-11-19 00:00:00",
      gender: ["male"],
      marital_status: ["married"],
      department: ["abhiupdate", "ffIT", "Marketing"],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: ["Banglore", "Mumbai", "Kolkata", "New  Delhi"],
    },
    {
      leave_type_name: "Casual Leaves",
      leave_type_code: "casual",
      leave_type: "",
      unit: "days",
      balance_based_on: "Leave grant",
      description: "sxdasx",
      start_date: "2023-11-02 00:00:00",
      end_date: "2023-11-30 00:00:00",
      gender: ["male", "female"],
      marital_status: ["married", "single"],
      department: [],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: ["Banglore", "Mumbai", "Kolkata", "New  Delhi"],
    },
    {
      leave_type_name: "Medical Leave",
      leave_type_code: "medical",
      leave_type: "",
      unit: "days",
      balance_based_on: "Fixed entitlement",
      description: "Medical leave ",
      start_date: "2022-01-02 00:00:00",
      end_date: "2023-12-31 00:00:00",
      gender: ["male", "female"],
      marital_status: ["single", "married"],
      department: ["abhiupdate", "ffIT"],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: ["Banglore", "Mumbai", "Kolkata", "New  Delhi"],
    },
    {
      leave_type_name: "Free Leave",
      leave_type_code: "free",
      leave_type: "",
      unit: "days",
      balance_based_on: "Leave grant",
      description: "gt54bvtgg65g",
      start_date: "2022-01-01 00:00:00",
      end_date: "2024-01-02 00:00:00",
      gender: ["male", "female"],
      marital_status: ["single", "married"],
      department: ["abhiupdate", "ffIT", "Marketing", "HR"],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: ["Banglore", "Mumbai", "Kolkata", "New  Delhi"],
    },
    {
      leave_type_name: "Travel Leave",
      leave_type_code: "TL",
      leave_type: "",
      unit: "days",
      balance_based_on: "Leave grant",
      description: "",
      start_date: "2022-01-25 00:00:00",
      end_date: "2023-12-23 00:00:00",
      gender: ["male", "female", "other"],
      marital_status: ["single", "married"],
      department: [
        "abhiupdate",
        "ffIT",
        "Marketing",
        "HR",
        "Management",
        "technicalwefrwec",
        "qwe",
        "abhijit",
      ],
      designation: ["Admin", "HR", "hariom", "S Developer", "Developer", "internet"],
      location: [
        "Banglore",
        "Mumbai",
        "Kolkata",
        "New  Delhi",
        "Mirzapur",
        " htbg",
        "Narsimha Laxmi ",
        "dsvfsd",
        "Lucknoooo",
      ],
    },
  ];
  console.log("leavetype", leavetype);
  const leavetype_name = [];

  if (leavetype && leavetype.length > 0) {
    const uniqueleavetypeNames = new Set();

    for (let i = 0; i < leavetype.length; i++) {
      const leavetypeName = leavetype[i]["leave_type_name"];
      uniqueleavetypeNames.add(leavetypeName);
    }

    // Convert the Set to an array if needed
    leavetype_name.push(...uniqueleavetypeNames);
  }

  console.log(leavetype_name, "leavetypeName");
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
            employee_email: values.employee_name,
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
          if (response.status === 200) {
            navigate("/pages/leave/list_view");
            message.success("Leave Applied successfully");
          }
        })
        .catch((error) => {
          console.error("Error deleting task:", error);
          const myError = error as MyError;
          message.error(myError?.response?.data?.detail || "An unexpected error occurred");
        });
      console.log(values, "values");
      action.resetForm();
    },
  });
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3} p={2}>
        <Grid item xs={12} sm={9}>
          <MDTypography variant="h5">{"Apply Leave "}</MDTypography>
        </Grid>
      </Grid>
      <Card>
        <form onSubmit={handleSubmit}>
          <MDBox py={4} pl={8}>
            <Grid container>
              <Grid sm={4} my={2}>
                <MDTypography variant="button">Employee ID</MDTypography>
              </Grid>
              <Grid sm={6} my={2}>
                {/* <MDInput
                  sx={{ width: "60" }}
                  autoComplete="off"
                  variant="standard"
                  name="employee_name"
                  value={values.employee_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.employee_name && Boolean(errors.employee_name)}
                  helperText={touched.employee_name && errors.employee_name}
                /> */}
                <Autocomplete
                  // multiple
                  sx={{ width: "60%" }}
                  onChange={(event, value) => {
                    handleChange({ target: { name: "employee_name", value } });
                  }}
                  // value={department}
                  // onChange={handleMainFieldChange}
                  options={emoployee_name}
                  renderInput={(params) => (
                    <MDInput
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="employee_name"
                      onChange={handleChange}
                      value={values.employee_name}
                      {...params}
                      variant="standard"
                      sx={{ width: "60" }}
                    />
                  )}
                />
              </Grid>

              <Grid sm={4} my={2}>
                <MDTypography variant="body2">Leave Type</MDTypography>
              </Grid>
              <Grid sm={6} my={2}>
                <Autocomplete
                  // multiple

                  sx={{ width: "60%" }}
                  onChange={(event, value) => {
                    handleChange({ target: { name: "leave_type", value } });
                  }}
                  // value={department}
                  // onChange={handleMainFieldChange}
                  options={leavetype_name}
                  renderInput={(params) => (
                    <MDInput
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="leave_type"
                      onChange={handleChange}
                      value={values.leave_type}
                      {...params}
                      variant="standard"
                    />
                  )}
                />
              </Grid>

              <Grid sm={3} my={2}>
                <MDTypography variant="body2">Date</MDTypography>
              </Grid>
              <Grid sm={3} my={2} sx={{ display: "flex", justifyContent: "center" }}>
                <MDInput
                  sx={{ width: "40%" }}
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
              <Grid sm={1} my={2}>
                <MDTypography
                  variant="body2"
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  to
                </MDTypography>
              </Grid>
              <Grid sm={3} my={2} sx={{ display: "flex", justifyContent: "flex-start" }}>
                <MDInput
                  sx={{ width: "40%" }}
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

              <Grid sm={4} my={2}>
                <MDTypography variant="body2">Team Email ID</MDTypography>
              </Grid>
              <Grid sm={6} my={2}>
                <MDInput
                  autoComplete="off"
                  variant="standard"
                  name="team_email"
                  value={values.team_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.team_email && Boolean(errors.team_email)}
                  helperText={touched.team_email && errors.team_email}
                  sx={{ width: "60%" }}
                />
              </Grid>
              <Grid sm={4} my={2}>
                <MDTypography variant="body2">Reason for Leave</MDTypography>
              </Grid>
              <Grid sm={6} my={2}>
                <MDInput
                  multiline
                  rows={3}
                  sx={{ width: "60%" }}
                  autoComplete="off"
                  variant="outlined"
                  name="reason_for_leave"
                  value={values.reason_for_leave}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.reason_for_leave && Boolean(errors.reason_for_leave)}
                  helperText={touched.reason_for_leave && errors.reason_for_leave}
                />
              </Grid>
              <Grid container>
                <Grid item>
                  <MDButton color="primary" variant="outlined">
                    <MDTypography variant="subtitle2" fontWeight="bold" color="primary">
                      Cancel
                    </MDTypography>
                  </MDButton>
                </Grid>
                <Grid item ml={2}>
                  <MDButton color="info" type="submit" variant="contained">
                    <MDTypography color="blue" variant="subtitle2" fontWeight="bold">
                      Submit &nbsp;
                    </MDTypography>
                    <SendIcon />
                  </MDButton>
                </Grid>
              </Grid>
            </Grid>
          </MDBox>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default Applyleave;
