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
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const token = Cookies.get("token");
//import {ChangeEvent} from "react";

// const validationSchema = yup.object({
//   username: yup.string().min(2).max(25).required("Please enter your name"),

//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });
const abhi = ["abhi"];
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
  secure_access: "",
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
        <FormControlLabel
          label={<MDTypography variant="body2">Fullday</MDTypography>}
          control={
            <Checkbox
              checked={values.secure_access.includes("Fullday")}
              onChange={handleChange}
              name="secure_access"
              value="Fullday"
            />
          }
        />
      </form>
    </DashboardLayout>
  );
};

export default Test;
