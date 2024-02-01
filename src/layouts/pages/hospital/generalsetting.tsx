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

//import {ChangeEvent} from "react";

// const validationSchema = yup.object({
//   username: yup.string().min(2).max(25).required("Please enter your name"),

//   password: yup
//     .string()
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

let initialValues = {
  secure_access: "",
  stock_sale: "",
  allow_task: "",
  defaultunit: "",
  identifier: "",
  inventory_valuation: "",
  enable: "",
  price: "",
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
              <MDBox px={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Default Unit/UoM
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
                      <MDTypography variant="subtitle2" p={2}>
                        Select default unit of measurement which suits your business most
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} py={2}>
                      <FormControl sx={{ m: 1, minWidth: 70 }}>
                        {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={values.defaultunit}
                          onChange={handleChange}
                          autoWidth={true}
                          name="defaultunit"
                        >
                          <MenuItem value="">
                            <em>chooose default unit </em>
                          </MenuItem>
                          <MenuItem value={10}>Bar Code</MenuItem>
                          <MenuItem value={21}>Part No.</MenuItem>
                          <MenuItem value={22}>Batch No.</MenuItem>
                          <MenuItem value={22}>QR Code</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox px={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Inventory Identifier
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
                      <MDTypography variant="subtitle2" p={2}>
                        Select type of number used in inventory identification
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} py={2}>
                      <FormControl sx={{ m: 1, minWidth: 70 }}>
                        {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={values.identifier}
                          onChange={handleChange}
                          autoWidth={true}
                          name="identifier"
                        >
                          <MenuItem value="">
                            <em>chooose inventory identifier </em>
                          </MenuItem>
                          <MenuItem value={10}>Bar Code</MenuItem>
                          <MenuItem value={21}>Part No.</MenuItem>
                          <MenuItem value={22}>Batch No.</MenuItem>
                          <MenuItem value={22}>QR Code</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox px={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Inventory Valuation
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
                      <MDTypography variant="subtitle2" p={2}>
                        Select Inventory valuation method as per your accounting practice
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} py={2}>
                      <FormControl sx={{ m: 1, minWidth: 70 }}>
                        {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={values.inventory_valuation}
                          onChange={handleChange}
                          autoWidth={true}
                          name="inventory_valuation"
                        >
                          <MenuItem value="">
                            <em>chooose inventory valuation </em>
                          </MenuItem>
                          <MenuItem value={10}>Bar Code</MenuItem>
                          <MenuItem value={21}>Part No.</MenuItem>
                          <MenuItem value={22}>Batch No.</MenuItem>
                          <MenuItem value={22}>QR Code</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper style={{ height: "100%" }}>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Secure Access
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
                      <MDTypography variant="subtitle2" p={2}>
                        Ask for username and password at the startup
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.secure_access.includes("Fullday")}
                        onChange={handleChange}
                        name="secure_access"
                        value="Fullday"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox p={2}>
                <Paper style={{ height: "100%" }}>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Negative Stock Sale
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
                      <MDTypography variant="subtitle2" p={2}>
                        Allows you to do billing in case of negative stock
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.stock_sale.includes("Fullday")}
                        onChange={handleChange}
                        name="stock_sale"
                        value="Fullday"
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
                        Allows Task Confirmation
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
                      <MDTypography variant="subtitle2" p={2}>
                        Implement user confirmation for critical actions in the application.
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.allow_task.includes("Fullday")}
                        onChange={handleChange}
                        name="allow_task"
                        value="Fullday"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>

            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox px={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Enable Manufacturing
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
                      <MDTypography variant="subtitle2" p={2}>
                        Allows you to create bill of materials and add assembled items in stock
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.enable.includes("Fullday")}
                        onChange={handleChange}
                        name="enable"
                        value="Fullday"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </MDBox>
            </Grid>
            <Grid sm={4} container sx={{ display: "flex", justifyContent: "center" }}>
              <MDBox px={2}>
                <Paper>
                  <Grid container spacing={1} p={2}>
                    <Grid sm={12}>
                      {" "}
                      <MDTypography variant="body2" fontWeight="bold" px={2}>
                        Price Catalog
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
                      <MDTypography variant="subtitle2" p={2}>
                        Allows you to add multiple sale prices for the same item
                      </MDTypography>
                    </Grid>
                    <Grid sm={3} p={2}>
                      <Checkbox
                        checked={values.price.includes("Fullday")}
                        onChange={handleChange}
                        name="price"
                        value="Fullday"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
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
