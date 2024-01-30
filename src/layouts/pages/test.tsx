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
import { useState, useEffect } from "react";

const token = Cookies.get("token");
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
let initialValues = {
  businessname: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
  email: "",
  phone: "",
  pan_no: "",
  gstin: "",
  taxation_method: "",
};
const taxation_methods = ["Not Applicable", "GST", "Composition Scheme"];
const Test = () => {
  // const [file, setFile] = useState<string | undefined>();

  // function handleImage(e: ChangeEvent<HTMLInputElement>): void {
  //   if (e.target.files) {
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   }
  // }
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
            <Grid sm={6} container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={4} px={8}>
                <Grid sm={12}>
                  <MDTypography variant="h5" p={3}>
                    Customer Details
                  </MDTypography>
                </Grid>

                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    required
                    autoComplete="off"
                    variant="standard"
                    name="businessname"
                    label="Business Name"
                    value={values.businessname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.businessname && Boolean(errors.businessname)}
                    helperText={touched.businessname && errors.businessname}
                    mb={10}
                    mt={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    col={3}
                    multiline
                    rows={3}
                    variant="standard"
                    name="address"
                    label="Address"
                    type="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
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
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <Autocomplete
                    sx={{ width: "70%" }}
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
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    variant="standard"
                    name="country"
                    label="Country"
                    type="country"
                    value={values.country}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    variant="standard"
                    name="email"
                    label="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    required
                    variant="standard"
                    name="phone"
                    label="Phone No."
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12}>
                  <MDTypography variant="h5" p={3}>
                    Other Details
                  </MDTypography>
                </Grid>

                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    variant="standard"
                    name="pan_no"
                    label="PAN No."
                    value={values.pan_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.pan_no && Boolean(errors.pan_no)}
                    helperText={touched.pan_no && errors.pan_no}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
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
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <Autocomplete
                    sx={{ width: "70%" }}
                    onChange={(event, value) => {
                      handleChange({
                        target: { name: "taxation_method", value },
                      });
                    }}
                    options={taxation_methods}
                    renderInput={(params: any) => (
                      <FormField
                        label="Taxation Method"
                        InputLabelProps={{ shrink: true }}
                        name="taxation_method"
                        onChange={handleChange}
                        value={values.taxation_method}
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
              </MDBox>
            </Grid>
            <Grid
              sm={6}
              container
              spacing={4}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <MDBox p={4} px={8}>
                <Grid sm={12}>
                  <MDTypography variant="h5" p={3}>
                    Company Logo
                  </MDTypography>
                  <MDDropzone options={{ addRemoveLinks: true }} />
                </Grid>
                <Grid sm={12}>
                  <MDTypography variant="h5" p={3}>
                    Signature
                  </MDTypography>
                  <MDDropzone options={{ addRemoveLinks: true }} />
                  {/* <div className="App">
                    <h2>Add Image:</h2>
                    <input type="file" onChange={handleImage} />
                    <img src={file} alt="Uploaded Preview" />
                  </div> */}
                </Grid>
                <Grid sm={4} p={12}>
                  <MDButton color="info" variant="outlined" type="submit">
                    Submit
                  </MDButton>
                </Grid>
              </MDBox>
            </Grid>
          </Grid>
        </Card>
      </form>
    </DashboardLayout>
  );
};

export default Test;
