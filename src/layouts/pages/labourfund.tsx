import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MDButton from "components/MDButton";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import MDAvatar from "components/MDAvatar";
import WarningIcon from "@mui/icons-material/Warning";
import { useFormik } from "formik";
import axios from "axios";
// Karnataka
// Employees' Contribution
// ₹ 20.00
// Employer's Contribution
// ₹ 40.00
// Deduction Cycle
// Yearly
// Status
// Enabled (Disable)
const data = [
  {
    state: "Karnataka",
    employee_contribution: "20",
    employer_contribution: "40",
    deduction_cycle: "yearly",
    status: true,
  },
  {
    state: "Orissa",
    employee_contribution: "30",
    employer_contribution: "50",
    deduction_cycle: "monthly",
    status: false,
  },
];
const Labourfund = () => {
  const [tasks, setTasks] = useState(data);

  const [openpop, setOpenpop] = useState(false);
  const handleClosepop = () => {
    setOpenpop(false);
  };
  const handleOpenpop = () => {
    setOpenpop(true);
  };
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      description: "",
      start_date: "",
      end_date: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const sendData = {};
      axios.post("", sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwMjE0MDcyfQ.WP23DM78RR5uyY4E5hupWFvjNyZZqT2NpGj9kpTBucA`,
        },
      });

      action.resetForm();
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <MDTypography sx={{ fontSize: 20, fontWeight: "bold" }}>Labour Welfare Fund</MDTypography>
        <MDTypography sx={{ fontSize: 14 }}>
          Labour Welfare Fund act ensures social security and improved working conditions for
          employees whose monthly salary is less than or equal to Rs.15,000.
        </MDTypography>
      </MDBox>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row", // Display cards in a row
          flexWrap: "wrap",
          flexGrow: 1,
          lineHeight: "10%",
        }}
      >
        {tasks.map((task, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 0.5,
              m: 0.5,
              bgcolor: "background.paper",
              borderRadius: 2,
              flexBasis: "40%", // Display two cards in one row
            }}
          >
            <CardContent>
              <Grid container sx={{ marginBottom: -1 }}>
                <Grid sm={6}>
                  <MDTypography
                    sx={{
                      fontFamily: "Raleway",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {task.state}
                  </MDTypography>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14 }} variant="span">
                    Employer&apos;s Contributtion
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14, fontWeight: "bold" }} ml={2} variant="span">
                    {task.employer_contribution}
                  </MDTypography>
                </Grid>
              </Grid>
            </CardContent>

            <CardContent>
              <Grid container>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14 }} variant="span">
                    Employee&apos;s Contributtion
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14, fontWeight: "bold" }} ml={2} variant="span">
                    {task.employee_contribution}
                  </MDTypography>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14 }} variant="span">
                    Deduction Cycle
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14, fontWeight: "bold" }} ml={2} variant="span">
                    {task.deduction_cycle}
                  </MDTypography>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent sx={{ marginBottom: -1.4 }}>
              <Grid container>
                <Grid sm={6}>
                  <MDTypography sx={{ fontSize: 14 }} variant="span">
                    Status
                  </MDTypography>
                </Grid>
                <Grid sm={6}>
                  {task.status ? (
                    <MDTypography
                      sx={{ fontSize: 14, fontWeight: "bold", color: "#5BA7FC" }}
                      ml={2}
                      variant="span"
                      onClick={() => handleOpenpop()}
                    >
                      Enable
                    </MDTypography>
                  ) : (
                    <MDTypography
                      sx={{ fontSize: 14, fontWeight: "bold", color: "#DC395F" }}
                      ml={2}
                      variant="span"
                      onClick={() => handleOpenpop()}
                    >
                      Disable
                    </MDTypography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}

        <Dialog open={openpop} onClose={handleClosepop}>
          <MDBox pl={8}>
            <Grid container py={2}>
              <Grid sm={2}>
                <WarningIcon />
              </Grid>
              <Grid sm={10}>
                <MDTypography>
                  You are about to disable LWF for your work location(s) at Karnataka. Are you sure
                  you want to proceed?
                </MDTypography>
              </Grid>
            </Grid>
            <Grid container py={2}>
              <Grid mt={3}>
                <MDButton
                  color="info"
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    handleClosepop();
                  }}
                >
                  Yes, Proceed
                </MDButton>
              </Grid>
              <Grid ml={2} mt={3}>
                <MDButton
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleClosepop();
                  }}
                >
                  Cancel
                </MDButton>
              </Grid>
            </Grid>
          </MDBox>
        </Dialog>
      </Grid>
    </DashboardLayout>
  );
};

export default Labourfund;
