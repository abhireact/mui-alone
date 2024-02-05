import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import imagecontent from "../practiceimages/company.jpeg";
import { message } from "antd";
import Cookies from "js-cookie";
import MDTypography from "components/MDTypography";
const token = Cookies.get("token");

const Company = () => {
  const [data, setData] = useState();
  const [image1, setImage1] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://10.0.20.121:8000/company", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
        setImage1(response.data.company_logo);
        console.log("Data", response.data.company_logo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card style={{ position: "relative" }}>
            <img
              src={"http://" + image1}
              alt="Company Logo"
              style={{
                width: "100%",
                height: "40%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <MDTypography variant="h4" align="center" style={{ color: "white" }}>
                Company Name
              </MDTypography>
            </div>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Grid container spacing={2} style={{ padding: "20px" }}>
              <Grid item xs={12} sm={6}>
                <MDTypography variant="h5">Address</MDTypography>
                <MDTypography variant="body1">address name</MDTypography>
                <MDTypography variant="body1">pincode city state </MDTypography>
                <MDTypography variant="body1">country </MDTypography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <MDTypography variant="h5">Contact Us</MDTypography>
                <MDTypography variant="body1">phone no</MDTypography>
                <MDTypography variant="body1">email</MDTypography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Company;
