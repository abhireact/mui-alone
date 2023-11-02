import MDInput from "components/MDInput";
import dayjs from "dayjs";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Cookies from "js-cookie";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import MDBox from "components/MDBox";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),

  current_password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  new_password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Test1 = () => {
  const [values2, setValues2] = useState(dayjs("2022-04-17T15:30"));
  const [values1, setValues1] = useState(dayjs("2022-04-17T15:30"));
  const token = Cookies.get("token");
  console.log(token, "token");
  const { handleChange, handleBlur, handleSubmit, touched, errors, values } = useFormik({
    initialValues: {
      email: "",
      current_password: "",
      new_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const data = { time1: values1, time2: values2 };
      axios
        .post(
          "http://10.0.20.133:8000/reset-password",
          {
            data,
          },
          {
            headers: {
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

      action.resetForm();
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <form onSubmit={handleSubmit}>
          <MDBox p={4}>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="email"
                variant="standard"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                mb={10}
                mt={10}
              />
            </div>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="confirmpassword"
                variant="standard"
                name="current_password"
                label="Current Password"
                type="password"
                value={values.current_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.current_password && Boolean(errors.current_password)}
                helperText={touched.current_password && errors.current_password}
                mb={10}
              />
            </div>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="password"
                variant="standard"
                name="new_password"
                label="New Password"
                type="password"
                value={values.new_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.new_password && Boolean(errors.new_password)}
                helperText={touched.new_password && errors.new_password}
                mb={10}
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                label="Start From"
                value={values2}
                onChange={(newValue) => setValues2(newValue)}
              />
              <MobileTimePicker
                label="Start From"
                value={values1}
                onChange={(newValue) => setValues1(newValue)}
              />
            </LocalizationProvider>

            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </MDBox>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default Test1;
