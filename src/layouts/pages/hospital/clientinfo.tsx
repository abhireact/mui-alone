import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Cookies from "js-cookie";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import Autocomplete from "@mui/material/Autocomplete";
import MDTypography from "components/MDTypography";
import MDDropzone from "components/MDDropzone";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import { useState, useEffect } from "react";
import MDAvatar from "components/MDAvatar";
const token = Cookies.get("token");
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//import {ChangeEvent} from "react";

// const validationSchema = yup.object({
//   username: yup.string().min(2).max(25).required("Please enter your name"),

//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });
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

  "Delhi (National Capital Territory of Delhi)",
  "Puducherry",
  "Ladakh",
  "Lakshadweep",
];
const document_types = [
  "Aadhar Card",
  "PAN Card",
  "Driving License",
  "Government ID",
  "Voter Card",
];
let initialValues = {
  fullname: "",
  billing_address: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
  email_id: "",
  phone_no: "",
  contact_no: "",
  pan_no: "",
  gstin: "",
  account_type: "",
  opening_balance: "",
  document_type: "",
  document_no: "",
  dob: "",
  anniversary: "",
  credit_allowed: "",
  credit_limit: "",
  remark_or_note: "",
};

const Test = () => {
  const [formdata, setFormdata] = useState("create");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          console.log(response.data);
          initialValues = response.data[0];
          setFormdata("edit");
        }
      } catch (error) {
        // console.error(error);
        console.log("Data not found");
      }
    };
    fetchData();
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      // validationSchema: validationSchema,
      enableReinitialize: true,
      onSubmit: async (values, action) => {
        if (formdata === "create") {
          handleFormSubmit();
        } else {
          handleFormEditSubmit();
        }
      },
    });
  const handleFormSubmit = async () => {
    console.log({ ...values }, "submit values");
    try {
      let sendData = values;

      const response = await axios.post("", sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Created Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleFormEditSubmit = async () => {
    try {
      let sendData = values;

      const response = await axios.put(``, sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Edited Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <form onSubmit={handleSubmit}>
        <Card>
          <Grid container>
            <Grid
              sm={4}
              container
              spacing={4}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <MDBox p={4} px={8}>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" pt={2}>
                    Client Details
                  </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    required
                    autoComplete="off"
                    variant="standard"
                    name="fullname"
                    label="Full Name"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.fullname && Boolean(errors.fullname)}
                    helperText={touched.fullname && errors.fullname}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    col={3}
                    multiline
                    rows={3}
                    variant="standard"
                    name="billing_address"
                    label="Billing Address"
                    value={values.billing_address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.billing_address && Boolean(errors.billing_address)}
                    helperText={touched.billing_address && errors.billing_address}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    required
                    autoComplete="off"
                    variant="standard"
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city && errors.city}
                    mb={10}
                    mt={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <Autocomplete
                    sx={{ width: "100%" }}
                    onChange={(event, value) => {
                      handleChange({
                        target: { name: "state", value },
                      });
                    }}
                    options={states}
                    renderInput={(params: any) => (
                      <FormField
                        label="States"
                        InputLabelProps={{ shrink: true }}
                        name="state"
                        onChange={handleChange}
                        value={values.state}
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="country"
                    label="Country"
                    value={values.country}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="email_id"
                    label="Email ID"
                    value={values.email_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email_id && Boolean(errors.email_id)}
                    helperText={touched.email_id && errors.email_id}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    required
                    variant="standard"
                    name="phone_no"
                    label="Phone No."
                    value={values.phone_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone_no && Boolean(errors.phone_no)}
                    helperText={touched.phone_no && errors.phone_no}
                    mb={10}
                  />
                </Grid>

                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" py={1}>
                    Tax Details
                  </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="pan_no"
                    label="PAN No."
                    value={values.pan_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.pan_no && Boolean(errors.pan_no)}
                    helperText={touched.pan_no && errors.pan_no}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="gstin"
                    label="GSTIN"
                    value={values.gstin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.gstin && Boolean(errors.gstin)}
                    helperText={touched.gstin && errors.gstin}
                    mb={10}
                  />
                </Grid>
              </MDBox>
            </Grid>
            <Grid
              sm={4}
              container
              spacing={4}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <MDBox p={4} px={8}>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" py={2}>
                    Profile Pic
                  </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDDropzone options={{ addRemoveLinks: true }} />
                  {/* <MDAvatar bgColor="dark" size="xxl">
                    <AccountCircleIcon fontSize="large" />
                  </MDAvatar> */}
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" py={2}>
                    Identity Details
                  </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <Autocomplete
                    sx={{ width: "100%" }}
                    onChange={(event, value) => {
                      handleChange({
                        target: { name: "document_type", value },
                      });
                    }}
                    options={document_types}
                    renderInput={(params: any) => (
                      <FormField
                        label="Document Type"
                        InputLabelProps={{ shrink: true }}
                        name="document_type"
                        onChange={handleChange}
                        value={values.document_type}
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDInput
                    variant="standard"
                    name="document_no"
                    label="Document No"
                    value={values.document_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.document_no && Boolean(errors.document_no)}
                    helperText={touched.document_no && errors.document_no}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" py={2}>
                    Anniversary
                  </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="body2">Date of Birth : </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDInput
                    sx={{ width: "100%" }}
                    variant="standard"
                    type="date"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.dob && Boolean(errors.dob)}
                    helperText={touched.dob && errors.dob}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="body2">Anniversary : </MDTypography>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDInput
                    sx={{ width: "100%" }}
                    variant="standard"
                    type="date"
                    name="anniversary"
                    value={values.anniversary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.anniversary && Boolean(errors.anniversary)}
                    helperText={touched.anniversary && errors.anniversary}
                    mb={10}
                  />
                </Grid>
              </MDBox>
            </Grid>
            <Grid sm={4} container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={4} px={8}>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" py={2}>
                    Account Details
                  </MDTypography>
                </Grid>

                <Grid sm={12}>
                  <MDTypography variant="body2">Account Type : </MDTypography>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      row
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.account_type.includes("Debit")}
                            onChange={handleChange}
                            name="account_type"
                            value="Debit"
                          />
                        }
                        label={<MDTypography variant="body2">Debit</MDTypography>}
                      />
                      <FormControlLabel
                        // value="male"
                        control={
                          <Radio
                            checked={values.account_type.includes("Credit")}
                            onChange={handleChange}
                            name="account_type"
                            value="Credit"
                          />
                        }
                        label={<MDTypography variant="body2"> Credit</MDTypography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    autoComplete="off"
                    variant="standard"
                    name="opening_balance"
                    label="Opening Balance"
                    value={values.opening_balance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.opening_balance && Boolean(errors.opening_balance)}
                    helperText={touched.opening_balance && errors.opening_balance}
                    mb={10}
                    mt={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <MDTypography variant="h5" py={2}>
                    Other Details
                  </MDTypography>
                </Grid>
                <Grid sm={12}>
                  <MDTypography variant="body2">Credit Allowed : </MDTypography>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      row
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.credit_allowed.includes("Yes")}
                            onChange={handleChange}
                            name="credit_allowed"
                            value="Yes"
                          />
                        }
                        label={<MDTypography variant="body2">Yes</MDTypography>}
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            checked={values.credit_allowed.includes("No")}
                            onChange={handleChange}
                            name="credit_allowed"
                            value="No"
                          />
                        }
                        label={<MDTypography variant="body2"> No</MDTypography>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="credit_limit"
                    label="Credit Limit"
                    value={values.credit_limit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.credit_limit && Boolean(errors.credit_limit)}
                    helperText={touched.credit_limit && errors.credit_limit}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="remark_or_note"
                    label="Remark / Note"
                    value={values.remark_or_note}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.remark_or_note && Boolean(errors.remark_or_note)}
                    helperText={touched.remark_or_note && errors.remark_or_note}
                    mb={10}
                  />
                </Grid>
              </MDBox>
              <Grid sm={12} py={6} sx={{ display: "flex", justifyContent: "center" }}>
                <MDButton color="info" type="submit">
                  Submit -&gt;
                </MDButton>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </form>
    </DashboardLayout>
  );
};

export default Test;
