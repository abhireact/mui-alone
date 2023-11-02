import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import Radio from "@mui/material/Radio";
import MDBox from "components/MDBox";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import { FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import Emaileditor from "./test";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import FormGroup from "@mui/material/FormGroup";
import { useNavigate } from "react-router-dom";

const entrytypes = ["Automatic", "None", "Manual", "Both"];
const leaveexpiry = ["month(s)", "calendar day(s)", "business day(s)"];
const unitallowed = ["Both", "Day", "Hour"];
const reportaccess = [
  "All data to admin",
  "Department data to department head",
  "Department data to department member",
  "All data to users",
];
const leaverequest = ["1 Year", "2 Year", "3 Year"];
const leavecalendar1 = ["Employee Id", "Employee Name", "Leave type Name"];
const leavecalendar2 = ["Employee Id", "Employee Name", "Leave type Name"];
const leavecalendar3 = ["Employee Id", "Employee Name", "Leave type Name"];

const leavename = [
  "Absent",
  "Casual Leave",
  "Earned Leave",
  "Leave Without Pay",
  "Maternity Leave",
  "Paternity Leave",
  "Sabbatical Leave",
  "Sick Leave",
];
const validationSchema = yup.object({
  leavename: yup.array().required("leave is required"),
  //   day1: yup
  //     .number()
  //     .typeError("That doesn't look  ")
  //     .positive("can't start with a minus")
  //     .integer("can't include a decimal point")
  //     .required(""),
  //   day2: yup
  //     .number()
  //     .typeError("That doesn't look like a pincode ")
  //     .positive("can't start with a minus")
  //     .integer("can't include a decimal point")
  //     .required(""),
  //   leaveexpirynumber: yup
  //     .number()
  //     .typeError("That doesn't look like a pincode ")
  //     .positive("can't start with a minus")
  //     .integer("can't include a decimal point")
  //     .required(""),
});

const General = () => {
  const formik = useFormik({
    initialValues: {
      consecutiveleaves: "",
      leavename: "",
      entrytypes: "",
      requestcompensation: "",
      day1: "1",
      day2: "1",
      leaveexpirynumber: "",
      leaveexpiry: "",
      unitallowed: "",
      duration_allowed: "",

      timeinput: "",
      mandatory: "",
      reportaccess: "",
      payrolladmin: "",
      payrollweekend: "",
      payrollholiday: "",
      maxlop: "",
      unpaidleave: "",
      enablepassword: "",
      leaverequest: "",

      leavemandatory: "",

      leavecancel1: "",
      leavecancel2: "",
      displayformat: "",
    },

    onSubmit: (values, action) => {
      // alert(JSON.stringify(values, null, 2));

      axios
        .post("http://10.0.20.133:8001/mg_general_settings", {
          // ...values,
          no_of_consecutive_leaves: values.consecutiveleaves,
          leave_type: values.leavename,
          mode_to_add_compensatory: values.entrytypes,
          compensatory_for_future_date: values.requestcompensation,
          leave_credited_on_weekdays: values.day1,
          leave_credited_on_holidays: values.day2,
          creadted_leave_expires: [values.leaveexpirynumber, values.leaveexpiry],
          units_allowed: [values.unitallowed],

          durations_allowed: values.duration_allowed,
          time_input: values.timeinput,
          reason_mandatory: values.mandatory,
          resource_availability: values.reportaccess,

          enable_payroll_report_admin: values.payrolladmin,
          include_weekends: values.payrollweekend,
          include_holidays: values.payrollholiday,

          unpaid_leave_marked_as: values.unpaidleave,
          max_lop_count: values.maxlop,
          enable_password_protection: values.enablepassword,

          allow_leave_request: values.leaverequest,

          past_leaves_within_period: values.leavecancel1,
          current_day_and_upcoming_leaves: values.leavecancel2,
          make_reason_for_leave_cancellation: values.leavemandatory,
          leave_display_format: [values.displayformat],

          //...values,
        })
        .then((response: any) => {
          console.log(response);
        })
        .catch((error: any) => {
          console.log(error);
        });
      console.log(values, "values");
      action.resetForm();
    },
  });
  const [openemail, setOpenemail] = useState(false);
  const handleCloseemail = () => {
    setOpenemail(false);
  };
  const handleOpenemail = () => {
    setOpenemail(true);
  };
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <form onSubmit={formik.handleSubmit}>
        <MDBox>
          <MDTypography variant="h6">Inclusion of weekends or Holidays as leave</MDTypography>

          <MDBox>
            <Grid container>
              <Grid sm={6}>
                <MDTypography variant="body2">
                  Number of consecutive leave after which weekends or Holidays are to be considered
                  as leave
                </MDTypography>
              </Grid>
              <Grid sm={6}>
                <MDInput
                  sx={{ width: 50 }}
                  autoComplete="off"
                  variant="standard"
                  name="consecutiveleaves"
                  value={formik.values.consecutiveleaves}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.consecutiveleaves && Boolean(formik.errors.consecutiveleaves)
                  }
                  helperText={formik.touched.consecutiveleaves && formik.errors.consecutiveleaves}
                />
              </Grid>
              <Grid sm={6}>
                <MDTypography variant="body2">Select applicable leave types</MDTypography>
              </Grid>
              <Grid sm={6}>
                <Autocomplete
                  multiple
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "leavename", value },
                    });
                  }}
                  options={leavename}
                  renderInput={(params) => (
                    <FormField
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="leavename"
                      onChange={formik.handleChange}
                      value={formik.values.leavename}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox>
            <MDTypography variant="h6">Compensatory Request</MDTypography>
            <Grid container>
              <Grid sm={6}>
                <MDTypography variant="body2">Mode to add Compensator Request entry</MDTypography>
              </Grid>
              <Grid sm={6}>
                {/* <Autocomplete
                  defaultValue={entrytypes[3]}
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "entrytypes", value },
                    });
                  }}
                  options={entrytypes}
                  renderInput={(params) => (
                    <FormField
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="entrytypes"
                      onChange={formik.handleChange}
                      value={formik.values.entrytypes}
                      {...params}
                      variant="outlined"
                    />
                  )}
                /> */}
                <Autocomplete
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "entrytypes", value },
                    });
                  }}
                  options={entrytypes}
                  renderInput={(params) => (
                    <FormField
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="entrytypes"
                      onChange={formik.handleChange}
                      value={formik.values.entrytypes}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={6}>
                <MDTypography variant="body2">
                  Add Compensatory Request for future date
                </MDTypography>
              </Grid>
              <Grid sm={6}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    row
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={formik.values.requestcompensation.includes(
                            "compensation :Enable"
                          )}
                          onChange={formik.handleChange}
                          name="requestcompensation"
                          value="compensation :Enable"
                        />
                      }
                      label={<MDTypography variant="body2">Enable</MDTypography>}
                    />
                    <FormControlLabel
                      // value="male"
                      control={
                        <Radio
                          checked={formik.values.requestcompensation.includes(
                            "compensation :Disable"
                          )}
                          onChange={formik.handleChange}
                          name="requestcompensation"
                          value="compensation :Disable"
                        />
                      }
                      label={<MDTypography variant="body2"> Disable</MDTypography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={6}>
                <MDTypography variant="body2">
                  Leave to be credited when work is done on a Weekend{" "}
                </MDTypography>
              </Grid>
              <Grid sm={6}>
                <MDTypography variant="body2">
                  {" "}
                  1 x
                  <MDInput
                    sx={{ width: 50 }}
                    autoComplete="off"
                    variant="standard"
                    name="day1"
                    value={formik.values.day1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.day1 && Boolean(formik.errors.day1)}
                    helperText={formik.touched.day1 && formik.errors.day1}
                  />
                  (i.e) 1 day(s) x 1 = 1 day(s), 3 hour(s) x 1 = 3.00 hour(s)
                </MDTypography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={6}>
                <MDTypography variant="body2">
                  Leave to be credited when work is done on a Holidays
                </MDTypography>
              </Grid>
              <Grid sm={6}>
                <MDTypography variant="body2">
                  1 x
                  <MDInput
                    sx={{ width: 50 }}
                    autoComplete="off"
                    variant="standard"
                    name="day2"
                    value={formik.values.day2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.day2 && Boolean(formik.errors.day2)}
                    helperText={formik.touched.day2 && formik.errors.day2}
                  />
                  (i.e) 1 day(s) x 1 = 1 day(s), 3 hour(s) x 1 = 3.00 hour(s)
                </MDTypography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={5}>
                {" "}
                <MDTypography variant="body2">Credit leave expire after</MDTypography>
              </Grid>
              <Grid sm={2}>
                <MDInput
                  sx={{ width: 50 }}
                  autoComplete="off"
                  variant="standard"
                  name="leaveexpirynumber"
                  value={formik.values.leaveexpirynumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.leaveexpirynumber && Boolean(formik.errors.leaveexpirynumber)
                  }
                  helperText={formik.touched.leaveexpirynumber && formik.errors.leaveexpirynumber}
                />
              </Grid>
              <Grid sm={3}>
                <Autocomplete
                  // multiple
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "leaveexpiry", value },
                    });
                  }}
                  options={leaveexpiry}
                  renderInput={(params) => (
                    <FormField
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="leaveexpiry"
                      onChange={formik.handleChange}
                      value={formik.values.leaveexpiry}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={6}>
                <MDTypography variant="h6">Unit(s) allowed</MDTypography>
              </Grid>
              <Grid sm={6}>
                <Autocomplete
                  defaultValue={unitallowed[0]}
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "unitallowed", value },
                    });
                  }}
                  options={unitallowed}
                  renderInput={(params) => (
                    <FormField
                      label={""}
                      InputLabelProps={{ shrink: true }}
                      name="unitallowed"
                      onChange={formik.handleChange}
                      value={formik.values.unitallowed}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={4}>
                {" "}
                <MDTypography variant="body2">Duration(s) Allowed</MDTypography>
              </Grid>
              <Grid sm={6} container>
                <Grid>
                  <FormControlLabel
                    label={<MDTypography variant="body2">Fullday</MDTypography>}
                    control={
                      <Checkbox
                        checked={formik.values.duration_allowed.includes("Fullday")}
                        onChange={formik.handleChange}
                        name="duration_allowed"
                        value="Fullday"
                      />
                    }
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    label={<MDTypography variant="body2">Halfday</MDTypography>}
                    control={
                      <Checkbox
                        checked={formik.values.duration_allowed.includes("Halfday")}
                        onChange={formik.handleChange}
                        name="duration_allowed"
                        value="Halfday"
                      />
                    }
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    label={<MDTypography variant="body2">Quarterday</MDTypography>}
                    control={
                      <Checkbox
                        checked={formik.values.duration_allowed.includes("Quarterday")}
                        onChange={formik.handleChange}
                        name="duration_allowed"
                        value="Quarterday"
                      />
                    }
                  />
                </Grid>
              </Grid>

              <Grid sm={6}>
                {" "}
                <MDTypography variant="body2">Time Input</MDTypography>
              </Grid>
              <Grid sm={6}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    row
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={formik.values.timeinput.includes("timeinput:Enable")}
                          onChange={formik.handleChange}
                          name="timeinput"
                          value="timeinput:Enable"
                        />
                      }
                      label={<MDTypography variant="body2">Enable</MDTypography>}
                    />
                    <FormControlLabel
                      // value="male"
                      control={
                        <Radio
                          checked={formik.values.timeinput.includes("timeinput:Disable")}
                          onChange={formik.handleChange}
                          name="timeinput"
                          value="timeinput:Disable"
                        />
                      }
                      label={<MDTypography variant="body2"> Disable</MDTypography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid sm={6}>
                {" "}
                <MDTypography variant="body2">Make reason mandatory</MDTypography>
              </Grid>
              <Grid sm={6}>
                <Checkbox
                  checked={formik.values.mandatory.includes("mandatory")}
                  onChange={formik.handleChange}
                  name="mandatory"
                  value="mandatory"
                />
              </Grid>
            </Grid>
          </MDBox>
          <MDTypography variant="h6">Permissions</MDTypography>
          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Resource availability report</MDTypography>
            </Grid>
            <Grid sm={6}>
              <Autocomplete
                defaultValue={reportaccess[2]}
                onChange={(event, value) => {
                  formik.handleChange({
                    target: { name: "reportaccess", value },
                  });
                }}
                options={reportaccess}
                renderInput={(params) => (
                  <FormField
                    label={""}
                    InputLabelProps={{ shrink: true }}
                    name="reportaccess"
                    onChange={formik.handleChange}
                    value={formik.values.reportaccess}
                    {...params}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
          <MDTypography variant="h6">Payroll Report Settings</MDTypography>
          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Enable Payroll Report for Admin</MDTypography>{" "}
            </Grid>
            <Grid sm={6}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  row
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formik.values.payrolladmin.includes("payrolladmin:Enable")}
                        onChange={formik.handleChange}
                        name="payrolladmin"
                        value="payrolladmin:Enable"
                      />
                    }
                    label={<MDTypography variant="body2">Enable</MDTypography>}
                  />
                  <FormControlLabel
                    // value="male"
                    control={
                      <Radio
                        checked={formik.values.payrolladmin.includes("payrolladmin:Disable")}
                        onChange={formik.handleChange}
                        name="payrolladmin"
                        value="payrolladmin:Disable"
                      />
                    }
                    label={<MDTypography variant="body2"> Disable</MDTypography>}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Include Weekend(s) </MDTypography>
            </Grid>
            <Grid sm={6}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  row
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formik.values.payrollweekend.includes("payrollweekend:Enable")}
                        onChange={formik.handleChange}
                        name="payrollweekend"
                        value="payrollweekend:Enable"
                      />
                    }
                    label={<MDTypography variant="body2">Enable</MDTypography>}
                  />
                  <FormControlLabel
                    // value="male"
                    control={
                      <Radio
                        checked={formik.values.payrollweekend.includes("payrollweekend:Disable")}
                        onChange={formik.handleChange}
                        name="payrollweekend"
                        value="payrollweekend:Disable"
                      />
                    }
                    label={<MDTypography variant="body2"> Disable</MDTypography>}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Include Holidays </MDTypography>
            </Grid>
            <Grid sm={6}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  row
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formik.values.payrollholiday.includes("payrollholiday:Enable")}
                        onChange={formik.handleChange}
                        name="payrollholiday"
                        value="payrollholiday:Enable"
                      />
                    }
                    label={<MDTypography variant="body2">Enable</MDTypography>}
                  />
                  <FormControlLabel
                    // value="male"
                    control={
                      <Radio
                        checked={formik.values.payrollholiday.includes("payrollholiday:Disable")}
                        onChange={formik.handleChange}
                        name="payrollholiday"
                        value="payrollholiday:Disable"
                      />
                    }
                    label={<MDTypography variant="body2"> Disable</MDTypography>}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <MDTypography variant="h6">LOP Report settings</MDTypography>
          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Unpaid leave to be marked as</MDTypography>{" "}
            </Grid>
            <Grid sm={6}>
              <Grid>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    row
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={formik.values.unpaidleave.includes("unpaidleave:Enable")}
                          onChange={formik.handleChange}
                          name="unpaidleave"
                          value="unpaidleave:Enable"
                        />
                      }
                      label={<MDTypography variant="body2">Loss of pay</MDTypography>}
                    />
                    <FormControlLabel
                      // value="male"
                      control={
                        <Radio
                          checked={formik.values.unpaidleave.includes("unpaidleave:Disable")}
                          onChange={formik.handleChange}
                          name="unpaidleave"
                          value="unpaidleave:Disable"
                        />
                      }
                      label={
                        <MDTypography variant="body2">
                          Carry Over to the next pay period
                        </MDTypography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Maximum LOP count allowed</MDTypography>{" "}
            </Grid>
            <Grid sm={6}>
              <MDInput
                sx={{ width: 50 }}
                autoComplete="off"
                variant="standard"
                name="maxlop"
                value={formik.values.maxlop}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.maxlop && Boolean(formik.errors.maxlop)}
                helperText={formik.touched.maxlop && formik.errors.maxlop}
              />
            </Grid>
          </Grid>
          <MDTypography variant="h6">Export settings</MDTypography>
          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Enable Password Protection</MDTypography>
            </Grid>
            <Grid sm={6}>
              <Checkbox
                checked={formik.values.enablepassword.includes("EnablePassword")}
                onChange={formik.handleChange}
                name="enablepassword"
                value="EnablePassword"
              />
            </Grid>
          </Grid>
          <MDTypography variant="h6">Leave Request Settings</MDTypography>
          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Allow leave requests until the next</MDTypography>
            </Grid>
            <Grid sm={6}>
              <Autocomplete
                defaultValue={leaverequest[0]}
                onChange={(event, value) => {
                  formik.handleChange({
                    target: { name: "leaverequest", value },
                  });
                }}
                options={leaverequest}
                renderInput={(params) => (
                  <FormField
                    label={""}
                    InputLabelProps={{ shrink: true }}
                    name="leaverequest"
                    onChange={formik.handleChange}
                    value={formik.values.leaverequest}
                    {...params}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
          <MDTypography variant="h6">Leave Cancellation Settings</MDTypography>
          <Grid container>
            <Grid sm={4}>
              {" "}
              <MDTypography variant="body2">Past leaves within current pay period </MDTypography>
            </Grid>
            <Grid sm={6}>
              <FormGroup row>
                <FormControlLabel
                  label={<MDTypography variant="body2">Record Owner</MDTypography>}
                  control={
                    <Checkbox
                      checked={formik.values.leavecancel1.includes("recordowner1")}
                      onChange={formik.handleChange}
                      name="leavecancel1"
                      value="recordowner1"
                    />
                  }
                />
                <FormControlLabel
                  label={<MDTypography variant="body2">Reporting Manager</MDTypography>}
                  control={
                    <Checkbox
                      checked={formik.values.leavecancel1.includes("reportingmanager1")}
                      onChange={formik.handleChange}
                      name="leavecancel1"
                      value="reportingmanager1"
                    />
                  }
                />
                <FormControlLabel
                  label={<MDTypography variant="body2">Approvers</MDTypography>}
                  control={
                    <Checkbox
                      checked={formik.values.leavecancel1.includes("approvers1")}
                      onChange={formik.handleChange}
                      name="leavecancel1"
                      value="approvers1"
                    />
                  }
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            <Grid sm={4}>
              {" "}
              <MDTypography variant="body2">
                Current day & upcoming leave requests
              </MDTypography>{" "}
            </Grid>
            <Grid sm={6}>
              <FormGroup row>
                <FormControlLabel
                  label={<MDTypography variant="body2">Record Owner</MDTypography>}
                  control={
                    <Checkbox
                      checked={formik.values.leavecancel2.includes("recordowner2")}
                      onChange={formik.handleChange}
                      name="leavecancel2"
                      value="recordowner2"
                    />
                  }
                />
                <FormControlLabel
                  label={<MDTypography variant="body2">Reporting Manager</MDTypography>}
                  control={
                    <Checkbox
                      checked={formik.values.leavecancel2.includes("reportingmanager2")}
                      onChange={formik.handleChange}
                      name="leavecancel2"
                      value="reportingmanager2"
                    />
                  }
                />
                <FormControlLabel
                  label={<MDTypography variant="body2">Approvers</MDTypography>}
                  control={
                    <Checkbox
                      checked={formik.values.leavecancel2.includes("approvers2")}
                      onChange={formik.handleChange}
                      name="leavecancel2"
                      value="approvers2"
                    />
                  }
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            <Grid sm={4}>
              {" "}
              <MDTypography variant="body2">
                Make reason for leave cancellation mandatory
              </MDTypography>
            </Grid>
            <Grid sm={6}>
              <Checkbox
                checked={formik.values.leavemandatory.includes("leavemandatory")}
                onChange={formik.handleChange}
                name="leavemandatory"
                value="leavemandatory"
              />
            </Grid>
          </Grid>

          <MDTypography variant="h6">Leave Calendar Sync</MDTypography>
          <Grid container>
            <Grid sm={6}>
              <MDTypography variant="body2">Leave display format in Google/Office365 </MDTypography>
            </Grid>
            <Grid sm={6}>
              <Autocomplete
                defaultValue={leavecalendar1[1]}
                onChange={(event, value) => {
                  formik.handleChange({
                    target: { name: "displayformat", value },
                  });
                }}
                options={leavecalendar1}
                renderInput={(params) => (
                  <FormField
                    label={""}
                    InputLabelProps={{ shrink: true }}
                    name="displayformat"
                    onChange={formik.handleChange}
                    value={formik.values.displayformat}
                    {...params}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            {/* <Grid sm={2}>
              <Autocomplete
                defaultValue={leavecalendar2[0]}
                onChange={(event, value) => {
                  formik.handleChange({
                    target: { name: "displayformat", value },
                  });
                }}
                options={leavecalendar2}
                renderInput={(params) => (
                  <FormField
                    label={""}
                    InputLabelProps={{ shrink: true }}
                    name="displayformat"
                    onChange={formik.handleChange}
                    value={formik.values.displayformat}
                    {...params}
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid sm={2}>
              <Autocomplete
                defaultValue={leavecalendar3[0]}
                onChange={(event, value) => {
                  formik.handleChange({
                    target: { name: "displayformat", value },
                  });
                }}
                options={leavecalendar3}
                renderInput={(params) => (
                  <FormField
                    label={""}
                    InputLabelProps={{ shrink: true }}
                    name="displayformat"
                    onChange={formik.handleChange}
                    value={formik.values.displayformat}
                    {...params}
                    variant="outlined"
                  />
                )}
              />
            </Grid> */}
          </Grid>
          <MDTypography variant="h6">Holidays Settings</MDTypography>
          <Grid container>
            <Grid sm={6}>
              {" "}
              <MDTypography variant="body2">Remainder Email</MDTypography>
            </Grid>
            <Grid sm={6}>
              <MDButton variant="text" color="info" onClick={() => handleOpenemail()}>
                {/*  onClick={() => navigate("/pages/practice/emaileditor")}*/}
                Customize email template
              </MDButton>
            </Grid>
            <Grid sm={12}>
              <Dialog open={openemail} onClose={handleCloseemail}>
                <DialogContent>
                  <MDBox mx={10} my={10} sx={{ Width: "100%" }}>
                    <Emaileditor />
                  </MDBox>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>

          <Grid container spacing={2} my={5}>
            <Grid>
              <MDButton variant="contained" color="info" type="submit">
                Save
              </MDButton>
            </Grid>
            <Grid ml={2} sx={{ fontColor: "blue" }}>
              <MDButton color="primary">Reset</MDButton>
            </Grid>
          </Grid>
        </MDBox>
      </form>
    </DashboardLayout>
  );
};

export default General;
