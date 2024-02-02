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
import { useEffect, useState } from "react";
import MDAvatar from "components/MDAvatar";
const token = Cookies.get("token");
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { s } from "@fullcalendar/core/internal-common";

//import {ChangeEvent} from "react";

// const validationSchema = yup.object({
//   username: yup.string().min(2).max(25).required("Please enter your name"),

//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

let initialValues = {
  enable_cess: false,
  tax_change: false,
  shipping_cess: "",
  apparel_slab_limit: "",
  apparel_slab_percent: "",
  footwear_slab_limit: "",
  footwear_slab_percent: "",
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
  }, []);
  useEffect(() => {
    handleFormSubmit;
  }, [onchange]);
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

  useEffect(() => {
    // Trigger handleSubmit whenever form values change
    handleSubmit();
  }, [values]);
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
                Taxation Settings
              </MDTypography>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Enable Cess
                      </MDTypography>
                    </Grid>
                    <Grid
                      sm={9}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        borderRight: "2px solid #3873E8",
                      }}
                    >
                      {" "}
                      <MDTypography variant="caption" p={2}>
                        Enable additional cess on items, You can deine cess rate in item master
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.enable_cess}
                        onChange={handleChange}
                        name="enable_cess"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Shipping Cess
                      </MDTypography>
                    </Grid>
                    <Grid
                      sm={9}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        borderRight: "2px solid #3873E8",
                      }}
                    >
                      {" "}
                      <MDTypography variant="caption" p={2}>
                        Enter cess changed on shipping/freight/transport cost
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <MDInput
                        variant="standard"
                        name="shipping_cess"
                        label="₹"
                        type="shipping_cess"
                        value={values.shipping_cess}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.shipping_cess && Boolean(errors.shipping_cess)}
                        helperText={touched.shipping_cess && errors.shipping_cess}
                        mb={10}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Allow Item Tax Change
                      </MDTypography>
                    </Grid>
                    <Grid
                      sm={9}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        borderRight: "2px solid #3873E8",
                      }}
                    >
                      {" "}
                      <MDTypography variant="caption" p={2}>
                        Allows you to tax change tax rate at the time of entering sale and purchases
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.tax_change}
                        onChange={handleChange}
                        name="tax_change"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Apparel Slab
                      </MDTypography>
                    </Grid>
                    <Grid
                      sm={9}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        borderRight: "2px solid #3873E8",
                      }}
                    >
                      <MDTypography variant="caption" p={2}>
                        Enter apparel slab limit and tax percentage (if applicable)
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} px={2}>
                      <MDInput
                        variant="standard"
                        name="apparel_slab_limit"
                        label="₹"
                        type="apparel_slab_limit"
                        value={values.apparel_slab_limit}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.apparel_slab_limit && Boolean(errors.apparel_slab_limit)}
                        helperText={touched.apparel_slab_limit && errors.apparel_slab_limit}
                      />
                      <MDInput
                        variant="standard"
                        name="apparel_slab_percent"
                        label="%"
                        type="apparel_slab_percent"
                        value={values.apparel_slab_percent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.apparel_slab_percent && Boolean(errors.apparel_slab_percent)}
                        helperText={touched.apparel_slab_percent && errors.apparel_slab_percent}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Footwear Slab
                      </MDTypography>
                    </Grid>
                    <Grid
                      sm={9}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        borderRight: "2px solid #3873E8",
                      }}
                    >
                      {" "}
                      <MDTypography variant="caption" p={2}>
                        Enter footwear slab limit and tax percentage (if applicable )
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} px={2}>
                      <MDInput
                        variant="standard"
                        name="footwear_slab_limit"
                        label=" ₹"
                        type="footwear_slab_limit"
                        value={values.footwear_slab_limit}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.footwear_slab_limit && Boolean(errors.footwear_slab_limit)}
                        helperText={touched.footwear_slab_limit && errors.footwear_slab_limit}
                      />
                      <MDInput
                        variant="standard"
                        name="footwear_slab_percent"
                        label=" %"
                        type="footwear_slab_percent"
                        value={values.footwear_slab_percent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.footwear_slab_percent && Boolean(errors.footwear_slab_percent)
                        }
                        helperText={touched.footwear_slab_percent && errors.footwear_slab_percent}
                      />
                    </Grid>
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
