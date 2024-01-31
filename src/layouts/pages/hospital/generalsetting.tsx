import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Paper from "@mui/material/Paper";
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
import Divider from "@mui/material/Divider";

//import {ChangeEvent} from "react";

// const validationSchema = yup.object({
//   username: yup.string().min(2).max(25).required("Please enter your name"),

//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

const document_types = [
  "Aadhar Paper",
  "PAN Paper",
  "Driving License",
  "Government ID",
  "Voter Paper",
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
        <div>
          <Grid container>
            <Grid sm={12} py={2}>
              <MDTypography
                variant="h5"
                color="info"
                px={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  borderBottom: "2px solid #3873E8",
                }}
              >
                General Settings
              </MDTypography>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
              <MDBox p={2}>
                <Paper
                  sx={{
                    width: "150%",
                  }}
                >
                  <Grid
                    sm={12}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MDTypography variant="subtitle1" fontWeight="bold" px={2}>
                      Default Unit/UoM
                    </MDTypography>
                  </Grid>
                  <Grid
                    sm={6}
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "50%",
                    }}
                  >
                    <MDTypography variant="subtitle2" p={2}>
                      General Settings
                    </MDTypography>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
          </Grid>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default Test;
