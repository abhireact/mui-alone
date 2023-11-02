import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";

import axios from "axios";

const ListView = () => {
  const [LeaveData, setleaveData] = useState([]);
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://10.0.20.133:8000/currentleave/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6ImRyYXNoYW5uYWlkdTAwNEBnbWFpbC5jb20iLCJleHAiOjE2OTU3OTYxOTEsImFkbWluIjp0cnVlfQ.VUB7apGKIoeWtooKBMqZfDinaM7Og26zWxcqYzSukeE"}`,
        },
      });
      setleaveData(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        {LeaveData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                py: 5,
                bgcolor: "background.paper",
                borderRadius: 2,
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <MDTypography variant="h6" fontWeight="bold">
                {data.leave_type}
              </MDTypography>
              <CardContent>
                <Avatar src={data?.leave_image} alt="image link" variant="square" />
              </CardContent>
              <MDTypography variant="body2" fontWeight="regular">
                {data.number_of_leaves ? `Available: ${data.number_of_leaves}` : "Available:"}
              </MDTypography>
              <MDTypography variant="body2" fontWeight="regular">
                {data.booked ? ` Booked: ${data.booked}` : "Booked:"}
              </MDTypography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default ListView;
