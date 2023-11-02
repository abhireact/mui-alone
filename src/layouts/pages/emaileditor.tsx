import React, { useState } from "react";
import MDEditor from "components/MDEditor";
import MDBox from "components/MDBox";
import { Autocomplete, Grid, TextField } from "@mui/material";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import ReactQuill from "react-quill";
import { useFormik } from "formik";
import axios from "axios";

const systemfields = [
  { label: "Holidays Name", def: "Holiday Name" },
  { label: "Holiday Start Date", def: "Holiday from " },
  { label: "Holidays End Date", def: "Holiday to" },
  { label: "Holidays Descriptiion", def: "Holiday Description" },
  { label: "Employee Displayname", def: "Employee Displayname" },
  { label: "Employee Id", def: "Employee Id" },
];
const mergefields = ["System Fields"];
const values = "<h1>hello world</h1>";

function Emaileditor() {
  const [selectfields, setSelectfields] = useState(null);
  const formik = useFormik({
    initialValues: {
      emailedit: "Hello world",
    },

    onSubmit: (values, action) => {
      axios
        .post("", {
          emailedit: values.emailedit,
        })
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
    <DashboardLayout>
      <DashboardNavbar />
      <form onSubmit={formik.handleSubmit}>
        <MDBox>
          <Grid container>
            <Grid sm={3.5} mb={2}>
              <MDTypography variant="h6">Average Merge Field</MDTypography>
              <Autocomplete
                sx={{ width: "90%" }}
                options={mergefields}
                // getOptionLabel={(place) => place.location_name}
                renderInput={(params) => <TextField {...params} />}
                //value={}
              />
            </Grid>
            <Grid sm={3.5} mb={2}>
              <MDTypography variant="h6">Select Field</MDTypography>
              <Autocomplete
                sx={{ width: "90%" }}
                options={systemfields}
                renderInput={(params) => <TextField {...params} />}
                //value={}
                onChange={(event, newfields) => {
                  setSelectfields(newfields);
                  console.log(newfields);
                }}
              />
            </Grid>
            <Grid sm={3}>
              <MDTypography variant="h6">Field Value</MDTypography>
              <MDInput sx={{ width: "90%" }} value={selectfields?.def} />
            </Grid>

            <Grid sm={12}>
              {/* <MDEditor
                name="emailedit"
                value={() => formik.values.emailedit}
                onChange={formik.handleChange}
              />
              <MDEditor value={formik.values.emailedit} onChange={formik.handleChange} /> */}
              {/* <ReactQuill theme="snow" value={value} onChange={setValue} />; */}
              {/* <MDEditor
                onChange={(event: any, value: any) =>
                  formik.handleChange({
                    target: { name: "emailedit", value },
                  })
                }
                renderInput={(params: any) => (
                  <MDInput
                    label={""}
                    InputLabelProps={{ shrink: true }}
                    name="emailedit"
                    onChange={formik.handleChange}
                    value={formik.values.emailedit}
                    {...params}
                    variant="outlined"
                  />
                )}
              /> */}

              <MDEditor />
            </Grid>
          </Grid>

          <Grid container spacing={2} my={5}>
            <Grid ml={2}>
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
}

export default Emaileditor;
