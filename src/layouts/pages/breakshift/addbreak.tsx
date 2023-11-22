import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import { TreeSelect } from "antd";

import { useState, useEffect } from "react";

import axios from "axios";

const Addbreak = (props: any) => {
  const { SHOW_PARENT } = TreeSelect;

  const [value, setValue] = useState([""]);
  const [treeData, setTreeData] = useState([]);

  const onChange = (newValue: string[]) => {
    setValue(newValue);
    console.log(newValue, "shift ");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.0.20.133:8000/shifts/tree_data", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwNzE2MTAxfQ.qGUKy1fkZx15cX_LGBkM1tj35t5YbkGqymbNfJiIiGg`,
          },
        });

        setTreeData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please Select",
    style: {
      width: "100%",
    },
  };
  const { setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      break_name: "",
      icon: "",
      pay_type: "",
      mode: "",
      breake_start_time: "",
      break_end_time: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const sendData = {
        break_name: values.break_name,
        icon: values.icon,
        pay_type: values.pay_type,
        mode: values.mode,
        breake_start_time: [values.breake_start_time],
        break_end_time: [values.break_end_time],
        applicable_shifs: value,
      };
      axios.post("http://10.0.20.133:8000/employee_shift_break", sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwNTU3ODE1fQ.hyB3ittDp0gkZeU4aNd3GlAFl9i4W8Eg9g3KBav7kSM`,
        },
      });

      action.resetForm();
    },
  });
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <form onSubmit={handleSubmit}>
        <MDBox p={4}>
          <Grid container>
            <Grid item sm={3}>
              <MDTypography mb={2} variant="body2">
                NAME
              </MDTypography>
            </Grid>
            <Grid item sm={7}>
              <MDInput
                mb={2}
                sx={{ width: "45%" }}
                variant="standard"
                name="break_name"
                value={values.break_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item sm={3}>
              <MDTypography mb={2} variant="body2">
                ICON
              </MDTypography>
            </Grid>
            <Grid item sm={7}>
              <MDInput
                mb={2}
                sx={{ width: "45%" }}
                variant="standard"
                name="icon"
                value={values.icon}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid container>
              <Grid sm={5}>
                <MDTypography mb={2} variant="body2">
                  PAY TYPE
                </MDTypography>
              </Grid>
              <Grid sm={4}>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.pay_type.includes("Paid")}
                          onChange={handleChange}
                          name="pay_type"
                          value="Paid"
                        />
                      }
                      label={<MDTypography variant="body2">Paid</MDTypography>}
                    />

                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.pay_type.includes("Unpaid")}
                          onChange={handleChange}
                          name="pay_type"
                          value="Unpaid"
                        />
                      }
                      label={<MDTypography variant="body2">Unpaid</MDTypography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={5}>
                <MDTypography mb={2} variant="body2">
                  MODE
                </MDTypography>
              </Grid>
              <Grid sm={4}>
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.mode.includes("Automatic")}
                          onChange={handleChange}
                          name="mode"
                          value="Automatic"
                        />
                      }
                      label={<MDTypography variant="body2">Automatic </MDTypography>}
                    />

                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.mode.includes("Manual")}
                          onChange={handleChange}
                          name="mode"
                          value="Manual"
                        />
                      }
                      label={<MDTypography variant="body2">Manual </MDTypography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <Grid sm={5}>
              <MDTypography mb={2} variant="body2">
                START TIME
              </MDTypography>
            </Grid>

            <Grid sm={4} mb={2}>
              <MDInput
                type="time"
                variant="standard"
                name="breake_start_time"
                value={values.breake_start_time}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.breake_start_time && Boolean(errors.breake_start_time)}
                helperText={touched.breake_start_time && errors.breake_start_time}
              />
            </Grid>
            <Grid sm={5}>
              <MDTypography mb={2} variant="body2">
                END TIME
              </MDTypography>
            </Grid>

            <Grid sm={4} mb={2}>
              <MDInput
                type="time"
                variant="standard"
                name="break_end_time"
                value={values.break_end_time}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.break_end_time && Boolean(errors.break_end_time)}
                helperText={touched.break_end_time && errors.break_end_time}
              />
            </Grid>
            <Grid sm={5}>
              <MDTypography mb={2} variant="body2">
                APPLICABLE SHIFTS
              </MDTypography>
            </Grid>

            <Grid sm={4}>
              <TreeSelect {...tProps} />
            </Grid>
            <Grid container sm={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Grid mt={4}>
                <MDButton
                  color="info"
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Save
                </MDButton>
              </Grid>
              <Grid ml={2} mt={4}>
                <MDButton
                  color="primary"
                  variant="outlined"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </MDButton>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </form>
    </DashboardLayout>
  );
};

export default Addbreak;
