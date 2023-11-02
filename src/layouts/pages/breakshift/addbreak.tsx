import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import Autocomplete from "@mui/material/Autocomplete";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";

const Addbreak = (props: any) => {
  const { setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/employee_shift_break/shifts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
      })
      .then((response) => {
        setShifts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      break_name: "",
      icon: "",
      pay_type: "",
      mode: "",
      breake_start_time: "",
      break_end_time: "",
      applicable_shifts: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const sendData = {
        break_name: values.break_name,
        icon: values.icon,
        pay_type: values.pay_type,
        mode: values.mode,
        breake_start_time: [values.breake_start_time],
        break_end_time: [values.break_end_time],
        applicable_shifs: values.applicable_shifts,
      };
      axios.post("http://10.0.20.133:8000/employee_shift_break", sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
        },
      });

      action.resetForm();
    },
  });
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit}>
          <MDBox p={4}>
            <Grid container>
              <Grid item sm={3}>
                <MDTypography ml={15} variant="body1">
                  Name
                </MDTypography>
              </Grid>
              <Grid item sm={7}>
                <MDInput
                  variant="standard"
                  name="break_name"
                  value={values.break_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb={10}
                  mt={10}
                />
              </Grid>
              <Grid item sm={3}>
                <MDTypography ml={15} variant="body1">
                  Icon
                </MDTypography>
              </Grid>
              <Grid item sm={7}>
                <MDInput
                  variant="standard"
                  name="icon"
                  value={values.icon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb={10}
                  mt={10}
                />
              </Grid>
              <Grid container>
                <Grid sm={6}>
                  <MDTypography ml={15} variant="body1">
                    Pay Type
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  <FormControl>
                    <RadioGroup>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.pay_type.includes("Paid")}
                            onChange={handleChange}
                            name="pay_type"
                            value="Paid"
                          />
                        }
                        label={<MDTypography variant="body2">Paid</MDTypography>}
                      />

                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.pay_type.includes("Unpaid")}
                            onChange={handleChange}
                            name="pay_type"
                            value="Unpaid"
                          />
                        }
                        label={<MDTypography variant="body2">Unpaid</MDTypography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid sm={6}>
                  <MDTypography ml={15} variant="body1">
                    Mode
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  <FormControl>
                    <RadioGroup>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.mode.includes("Automatic")}
                            onChange={handleChange}
                            name="mode"
                            value="Automatic"
                          />
                        }
                        label={<MDTypography variant="body2">Automatic </MDTypography>}
                      />

                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.mode.includes("Manual")}
                            onChange={handleChange}
                            name="mode"
                            value="Manual"
                          />
                        }
                        label={<MDTypography variant="body2">Manual </MDTypography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileTimePicker
                  label="Start Time"
                  value={values.breake_start_time}
                  onChange={handleChange}
                />
                <MobileTimePicker
                  label="End Time"
                  value={values.break_end_time}
                  onChange={handleChange}
                />
              </LocalizationProvider> */}
              <Grid sm={3}>
                <MDTypography ml={15} variant="body1">
                  Start Time
                </MDTypography>
              </Grid>

              <Grid sm={2}>
                <MDInput
                  type="time"
                  variant="standard"
                  name="breake_start_time"
                  value={values.breake_start_time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.breake_start_time && Boolean(errors.breake_start_time)}
                  helperText={touched.breake_start_time && errors.breake_start_time}
                  mb={10}
                />
              </Grid>
              <Grid sm={3}>
                <MDTypography ml={15} variant="body1">
                  End Time
                </MDTypography>
              </Grid>

              <Grid sm={2}>
                <MDInput
                  type="time"
                  variant="standard"
                  name="break_end_time"
                  value={values.break_end_time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.break_end_time && Boolean(errors.break_end_time)}
                  helperText={touched.break_end_time && errors.break_end_time}
                  mb={10}
                />
              </Grid>
              <Grid sm={5}>
                <MDTypography ml={15} variant="body1">
                  Applicable Shifts
                </MDTypography>
              </Grid>

              <Grid sm={5}>
                <Autocomplete
                  multiple
                  onChange={(event, value) => {
                    handleChange({
                      target: { name: "applicable_shifts", value },
                    });
                  }}
                  options={shifts}
                  renderInput={(params) => (
                    <FormField
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="applicable_shifts"
                      onChange={handleChange}
                      value={values.applicable_shifts}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid container sm={12}>
                <Grid mt={4}>
                  <MDButton
                    color="info"
                    variant="contained"
                    type="submit"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Save
                  </MDButton>
                </Grid>
                <Grid ml={2} mt={4}>
                  <MDButton
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Cancel
                  </MDButton>
                </Grid>
              </Grid>
            </Grid>
          </MDBox>
        </form>
      </LocalizationProvider>
    </DashboardLayout>
  );
};

export default Addbreak;
