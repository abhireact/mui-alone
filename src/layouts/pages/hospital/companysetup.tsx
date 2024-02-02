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
import { message } from "antd";

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

const taxation_methods = ["Not Applicable", "GST", "Composition Scheme"];
const Test = () => {
  const [formData, setFormData] = useState({
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
    company_logo: "",
    signature: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e: { target: { files: any[] } }) => {
    setFormData({
      ...formData,
      company_logo: e.target.files[0],
    });
  };
  const handleFilesChange = (e: { target: { files: any[] } }) => {
    setFormData({
      ...formData,
      signature: e.target.files[0],
    });
  };
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
          setFormData(response.data[0]);
          setFormdata("edit");
        }
      } catch (error) {
        // console.error(error);
        console.log("Data not found");
      }
    };
    fetchData();
  }, []);

  // const handleImage1 = (event: { target: { files: any[] } }) => {
  //   const file = event.target.files[0];
  //   setSendData({ ...formData, company_logo: file });
  // };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formDataObj = new FormData();

    formDataObj.append("businessname", formData.businessname);
    formDataObj.append("address", formData.address);
    formDataObj.append("city", formData.city);
    formDataObj.append("state", formData.state);
    formDataObj.append("pincode", formData.pincode);
    formDataObj.append("country", formData.country);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("pan_no", formData.pan_no);
    formDataObj.append("gstin", formData.gstin);
    formDataObj.append("taxation_method", formData.taxation_method);
    formDataObj.append("company_logo", formData.company_logo);
    formDataObj.append("signature", formData.signature);

    try {
      const response = await axios.post("http://10.0.20.121:8000/company", formDataObj);

      if (response.status === 200) {
        const data = response.data;
        console.log(data, "data getting ");
        message.success("Company created");
        setFormData({
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
          company_logo: "",
          signature: "",
        });
        // Handle success, show message, redirect, etc.
      } else {
        // Handle errors
        console.error("Error:", response.statusText);
        message.error("something wrong happened or fill all details ");
      }
    } catch (error) {
      console.error("Error:");
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
                  <MDTypography variant="h5" py={3}>
                    Customer Details
                  </MDTypography>
                </Grid>

                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    required
                    autoComplete="off"
                    variant="standard"
                    name="businessname"
                    label="Business Name"
                    value={formData.businessname}
                    onChange={handleChange}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    col={3}
                    multiline
                    rows={3}
                    variant="standard"
                    name="address"
                    label="Address"
                    type="address"
                    value={formData.address}
                    onChange={handleChange}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    autoComplete="off"
                    variant="standard"
                    name="pincode"
                    label="Pin Code"
                    value={formData.pincode}
                    onChange={handleChange}
                    mb={10}
                    mt={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    required
                    autoComplete="off"
                    variant="standard"
                    name="city"
                    label="City"
                    value={formData.city}
                    onChange={handleChange}
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
                        value={formData.state}
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
                    value={formData.country}
                    onChange={handleChange}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    variant="standard"
                    name="email"
                    label="email"
                    value={formData.email}
                    onChange={handleChange}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <MDInput
                    required
                    variant="standard"
                    name="phone"
                    label="Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    mb={10}
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
                  <MDTypography variant="h5" py={3}>
                    Company Logo
                  </MDTypography>
                  <div>
                    <MDInput type="file" accept="image/*" onChange={handleFileChange} />
                  </div>
                </Grid>
                <Grid sm={12}>
                  <MDTypography variant="h5" py={3}>
                    Signature
                  </MDTypography>
                  <div>
                    <MDInput type="file" accept="image/*" onChange={handleFilesChange} />
                  </div>
                  {/* <div className="App">
                    <h2>Add Image:</h2>
                    <input type="file" onChange={handleImage} />
                    <img src={file} alt="Uploaded Preview" />
                  </div> */}
                </Grid>
                <Grid sm={12}>
                  <MDTypography variant="h5" py={3}>
                    Other Details
                  </MDTypography>
                </Grid>

                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    variant="standard"
                    name="pan_no"
                    label="PAN No."
                    value={formData.pan_no}
                    onChange={handleChange}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <MDInput
                    variant="standard"
                    name="gstin"
                    label="GSTIN"
                    value={formData.gstin}
                    onChange={handleChange}
                    mb={10}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-center" }}>
                  <Autocomplete
                    sx={{ width: "60%" }}
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
                        value={formData.taxation_method}
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid sm={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
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
