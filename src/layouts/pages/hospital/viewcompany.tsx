import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import imagecontent from "../practiceimages/company.jpeg";
import { message } from "antd";
import Cookies from "js-cookie";
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
              // style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" align="center" style={{ color: "white" }}>
                Company Name
              </Typography>
            </div>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Grid container spacing={2} style={{ padding: "20px" }}>
              <Grid item xs={6} sm={3}>
                <Typography variant="h5">Business Name:</Typography>
                <Typography variant="body1">{/* Business Name from data */}</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h5">Address:</Typography>
                <Typography variant="body1">{/* Address from data */}</Typography>
              </Grid>
              {/* Add similar Grid items for other information */}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Company;
