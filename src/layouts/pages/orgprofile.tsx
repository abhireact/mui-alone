import Extrawork from "./extrawork";
import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import MDButton from "components/MDButton";
import MDDropzone from "components/MDDropzone";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
import { useTranslation } from "react-i18next";
// .dropone{
//   font-size:20px;
//   text-align: left;
//   padding:10px;
//   }
//   .droptwo{
//       font-size:12px;
//       text-align: left;
//       padding:10px;

//   }

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi (National Capital Territory of Delhi)",
  "Puducherry",
  "Ladakh",
  "Lakshadweep",
];

const fieldselector = [",", "-", "/"];

const location = ["India", "USA"];
const industries = [
  "Web Development",
  "Web Designing",
  "Agriculture",
  "Writers",
  "Telecommunications",
  "Others",
];

const Orgprofile = () => {
  const { t } = useTranslation("translation");
  const [openupdate, setOpenupdate] = useState(false);
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };
  const handleClickOpen = () => {
    setOpenupdate(true);
  };

  const [date, setDate] = useState("");
  const formik = useFormik({
    initialValues: {
      org_name: "",
      location: "",
      industry: "",
      add_line1: "",
      add_line2: "",
      pincode: "",
      state: "",
      city: "",
      fieldselector: "-",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      // alert(JSON.stringify(values, null, 2));

      axios
        .post("http://10.0.20.131:8000/organization", {
          org_name: values.org_name,
          location: values.location,
          industry: values.industry,
          add_line1: values.add_line1,
          add_line2: values.add_line2,
          pincode: values.pincode,
          state: values.state,
          city: values.city,
          org_date: date,
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
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <MDBox p={4}>
            <Grid container spacing={2}>
              <Grid sm={2}>
                <MDDropzone options={{ addRemoveLinks: true }} />
              </Grid>
              <Grid sm={8}>
                <Stack>
                  <MDTypography variant="p" className="dropone">
                    {t("Org")}
                  </MDTypography>
                </Stack>
                <Stack>
                  <MDTypography variant="p" className="droptwo">
                    Preferred Image Size: 240 x 240 pixels @ 72 DPI, Maximum size of 1MB.{" "}
                  </MDTypography>
                </Stack>
              </Grid>

              <Grid sm={12} mb={2}>
                <MDInput
                  sx={{ width: 700 }}
                  autoComplete="off"
                  variant="standard"
                  name="org_name"
                  label="Organisation Name"
                  value={formik.values.org_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.org_name && Boolean(formik.errors.org_name)}
                  helperText={formik.touched.org_name && formik.errors.org_name}
                />
              </Grid>
              <Grid sm={6}>
                <Autocomplete
                  sx={{ width: 250 }}
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "location", value },
                    });
                  }}
                  options={location}
                  renderInput={(params) => (
                    <FormField
                      label="Select Location"
                      InputLabelProps={{ shrink: true }}
                      name="location"
                      onChange={formik.handleChange}
                      value={formik.values.location}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid sm={6}>
                <Autocomplete
                  sx={{ width: 250 }}
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "industry", value },
                    });
                  }}
                  options={industries}
                  renderInput={(params) => (
                    <FormField
                      label="Industry"
                      InputLabelProps={{ shrink: true }}
                      name="industry"
                      onChange={formik.handleChange}
                      value={formik.values.industry}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid sm={6} mb={2} mt={2}>
                {/* <MDDatePicker input={{ placeholder: "Select a date" }} value= /> */}
                <MDInput
                  type="date"
                  variant="standard"
                  value={date}
                  onChange={(e: any) => setDate(e.target.value)}
                />
              </Grid>
              <Grid sm={6} mb={2} mt={2}>
                <Autocomplete
                  sx={{ width: 250 }}
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "fieldselector", value },
                    });
                  }}
                  options={fieldselector}
                  renderInput={(params) => (
                    <FormField
                      label="Field Selector"
                      InputLabelProps={{ shrink: true }}
                      name="fieldselector"
                      onChange={formik.handleChange}
                      value={formik.values.fieldselector}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid sm={12} mb={2}>
                <MDInput
                  sx={{ width: 700 }}
                  autoComplete="off"
                  variant="standard"
                  name="add_line1"
                  label="Address Line 1"
                  value={formik.values.add_line1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.add_line1 && Boolean(formik.errors.add_line1)}
                  helperText={formik.touched.add_line1 && formik.errors.add_line1}
                />
              </Grid>
              <Grid sm={12} mb={2}>
                <MDInput
                  sx={{ width: 700 }}
                  autoComplete="off"
                  variant="standard"
                  name="add_line2"
                  label="Address Line 2"
                  value={formik.values.add_line2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.add_line2 && Boolean(formik.errors.add_line2)}
                  helperText={formik.touched.add_line2 && formik.errors.add_line2}
                />
              </Grid>
              <Grid sm={4}>
                <Autocomplete
                  sx={{ width: "80%" }}
                  onChange={(event, value) => {
                    formik.handleChange({
                      target: { name: "state", value },
                    });
                  }}
                  options={states}
                  renderInput={(params) => (
                    <FormField
                      label="States"
                      InputLabelProps={{ shrink: true }}
                      name="state"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid sm={4} mb={2}>
                <MDInput
                  sx={{ width: 250 }}
                  autoComplete="off"
                  variant="standard"
                  name="pincode"
                  label="Pincode"
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                  helperText={formik.touched.pincode && formik.errors.pincode}
                />
              </Grid>
              <Grid sm={4} mb={2}>
                <MDInput
                  sx={{ width: 250 }}
                  autoComplete="off"
                  variant="standard"
                  name="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid sm={12}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActions>
                    <MDButton
                      variant="text"
                      color="info"
                      onClick={handleClickOpen}
                      startIcon={<ConstructionIcon />}
                      size="large"
                    >
                      Change
                    </MDButton>
                  </CardActions>
                  <CardContent></CardContent>
                </Card>

                <Dialog open={openupdate} onClose={handleCloseupdate}>
                  <DialogTitle>Filing Address</DialogTitle>
                  <DialogContent>
                    <Extrawork openupdate={openupdate} setOpenupdate={setOpenupdate} />
                  </DialogContent>
                </Dialog>
              </Grid>

              <MDButton color="info" variant="contained" type="submit">
                Submit
              </MDButton>
            </Grid>
          </MDBox>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default Orgprofile;
