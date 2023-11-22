import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import Autocomplete from "@mui/material/Autocomplete";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Checkbox from "@mui/material/Checkbox";

import { FormControlLabel } from "@mui/material";

function transformString(inputString: string): string {
  // Split the input string into an array of substrings
  const substrings = inputString.split("/");

  // Reverse the array of substrings
  const reversedArray = substrings.reverse();

  // Join the reversed array into a string using '-' as the separator
  const resultString = reversedArray.join("-");

  return resultString;
}
const Recordloan = (props: any) => {
  const { setOpendialog } = props;
  const handleClosedialog = () => {
    setOpendialog(false);
  };
  // autcomplete location  start
  const [locations, setLocations] = useState([]);

  const [location, setLocation] = useState();
  //End
  // autcomplete loan
  const [loans, setLoans] = useState([]);

  const [loan, setLoan] = useState();
  //End
  // autcomplete loan
  const [employees, setEmployees] = useState([]);

  const [employee, setEmployee] = useState();
  //End
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      paid_through_account: "",
      loan_amount: "",
      disbursement_date: "",
      reason: "",
      exempt_loan: false,
      repayment_date: "",
      instalment_amount: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values, action) => {
      const sendData = {
        employee_name: employee,
        location_name: location,
        manage_loan_name: loan,
        loan_amount: values.loan_amount,
        disbursement_date: transformString(values.disbursement_date),
        repayment_date: transformString(values.repayment_date),
        exempt_loan: values.exempt_loan,
        instalment_amount: values.instalment_amount,

        paid_through_account: values.paid_through_account,
        reason: values.reason,
      };
      axios.post("http://10.0.20.133:8000/record_loans", sendData, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwMTEwMzQ0fQ.yXoGAiYrgE55zEyiYpkacryNrZxp-TLiYgpV4_gVCTI",
        },
      });
      handleClosedialog();

      action.resetForm();
    },
  });
  const Fetchlocations = async () => {
    try {
      const response = await axios.get("http://10.0.20.133:8000/worklocation", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwMTEwMzQ0fQ.yXoGAiYrgE55zEyiYpkacryNrZxp-TLiYgpV4_gVCTI",
        },
      });
      console.log(response.data);
      setLocations(response.data);
    } catch (error) {
      console.error("error fetching tasks:", error);
    }
  };
  const Fetchemployees = async () => {
    try {
      const response = await axios.get("http://10.0.20.133:8000/record_loans/employee_name", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwMTEwMzQ0fQ.yXoGAiYrgE55zEyiYpkacryNrZxp-TLiYgpV4_gVCTI",
        },
      });
      console.log(response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error("error fetching tasks:", error);
    }
  };
  const Fetchloantypes = async () => {
    try {
      const response = await axios.get("http://10.0.20.133:8000/manage_loan", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAwMTEwMzQ0fQ.yXoGAiYrgE55zEyiYpkacryNrZxp-TLiYgpV4_gVCTI",
        },
      });
      console.log(response.data);
      setLoans(response.data);
    } catch (error) {
      console.error("error fetching tasks:", error);
    }
  };
  useEffect(() => {
    Fetchlocations();
    Fetchemployees();
    Fetchloantypes();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Location Name</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <Autocomplete
              sx={{ width: "45%" }}
              options={locations}
              getOptionLabel={(object) => object.location_name}
              renderInput={(params) => <MDInput {...params} label="choose location" />}
              value={location}
              onChange={(_event, newobject1) => {
                setLocation(newobject1.location_name);
                console.log(newobject1, "new object1");
                console.log(newobject1.location_name, "location name ");
              }}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Loan Name</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <Autocomplete
              sx={{ width: "45%" }}
              options={loans}
              getOptionLabel={(object) => object.loan_name}
              renderInput={(params) => <MDInput {...params} label="choose loan" />}
              value={loan}
              onChange={(_event, newobject2) => {
                setLoan(newobject2.loan_name);
                console.log(newobject2, "new object2");
                console.log(newobject2.loan_name, "loan name ");
              }}
            />
          </Grid>

          <Grid item sm={4}>
            <MDTypography variant="inherit">Employee Name</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <Autocomplete
              sx={{ width: "45%" }}
              options={employees}
              getOptionLabel={(object) => object.employee_name}
              renderInput={(params) => <MDInput {...params} label="choose employee" />}
              value={employee}
              onChange={(_event, newobject3) => {
                setEmployee(newobject3.employee_name);

                console.log(newobject3.employee_name, "employee name ");
              }}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Loan Amount</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="loan_amount"
              type="number"
              value={values.loan_amount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Disbursment Date</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="disbursement_date"
              type="date"
              value={values.disbursement_date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Repayment Start Date</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="repayment_date"
              type="date"
              value={values.repayment_date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Instalment Amount</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="instalment_amount"
              type="number"
              value={values.instalment_amount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item sm={4}>
            <MDTypography variant="inherit">Paid through Amount</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="paid_through_account"
              value={values.paid_through_account}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item sm={4}>
            <MDTypography variant="inherit">Reason</MDTypography>
          </Grid>
          <Grid item sm={6} mb={2}>
            <MDInput
              sx={{ width: "45%" }}
              variant="standard"
              name="reason"
              multiline
              placeholder="write a reason here …"
              rows={3}
              value={values.reason}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid container>
            <Grid sm={0.5}>
              <FormControlLabel
                label={null}
                control={
                  <Checkbox
                    checked={values.exempt_loan} // Check if exempt_loan is true
                    onChange={handleChange}
                    name="exempt_loan"
                  />
                }
              />
            </Grid>
            <Grid sm={8}>
              <MDTypography variant="h6">
                Exempt this loan from perquisite calculation{" "}
              </MDTypography>
              <MDTypography variant="body2">
                According to Rule 3(A), employees availing medical loan or any loan below ₹20,000
                can be exempted from perquisite calculation.
              </MDTypography>
            </Grid>
          </Grid>
          <Grid container sm={12}>
            <Grid mt={4}>
              <MDButton color="info" variant="contained" type="submit">
                Save
              </MDButton>
            </Grid>
            <Grid ml={2} mt={4}>
              <MDButton
                color="primary"
                variant="outlined"
                onClick={() => {
                  handleClosedialog();
                }}
              >
                Cancel
              </MDButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </DashboardLayout>
  );
};

export default Recordloan;
