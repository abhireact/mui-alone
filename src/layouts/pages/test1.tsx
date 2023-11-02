import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";

// Define the type for your data objects
type LeaveEntry = {
  leave_type: string;
  employee_name: string;
  employee_email: string;
  from_date: string;
  to_date: string;
  team_email: string;
  type: string;
  reason_for_leave: string;
  status: boolean;
  created_at: string;
};

// Define the props type for your component
type LeaveDataProps = {
  targetDate: string;
};
const Test = () => {
  const todayDate = new Date();
  const formattedDate = todayDate.toISOString().split("T")[0];
  const [date, setDate] = useState("2023-10-11"); //formattedDate

  // Function to add one day
  const addOneDay = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    setDate(currentDate.toISOString().split("T")[0]);
  };

  // Function to subtract one day
  const subtractOneDay = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    setDate(currentDate.toISOString().split("T")[0]);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container>
        <Grid sm={12} sx={{ justifyContent: "flex-center" }}>
          <MDTypography variant="h5">Daily Leave Status</MDTypography>
        </Grid>
        <Grid sm={12} sx={{ justifyContent: "flex-center" }}>
          <IconButton onClick={subtractOneDay}>
            <ArrowCircleLeftIcon />
          </IconButton>
          {date}
          <IconButton onClick={addOneDay}>
            <ArrowCircleRightIcon />
          </IconButton>
        </Grid>
      </Grid>

      <LeaveData targetDate={date} />
    </DashboardLayout>
  );
};

export default Test;

const LeaveData: React.FC<LeaveDataProps> = ({ targetDate }) => {
  // Initialize data as an empty array to distinguish between loading and empty data
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchLeaves() {
      try {
        const response = await axios.get(
          "http://10.0.20.133:8000/apply_leave/manager_leave_applications",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6Im9tQGdtYWlsLmNvbSIsImV4cCI6MTY5OTM0MTExMX0.iUCe7LLqABAsARRl-bT2dusnEFfOI_jniq0X8gOvbDQ",
            },
          }
        );
        let filteredData: YourDataInterface[] = response.data.filter(
          (entry: { from_date: string; to_date: string }) => {
            return targetDate >= entry.from_date && targetDate <= entry.to_date;
          }
        );

        setData(
          response.data.filter((entry: { from_date: string; to_date: string }) => {
            return targetDate >= entry.from_date && targetDate <= entry.to_date;
          })
        );
      } catch (error) {
        console.error("Error fetching leaves:", error);
      }
    }

    fetchLeaves();
  }, []);

  return (
    <>
      {data.length === 0 ? (
        // Empty data state
        <div>No leave data available for the specified date.</div>
      ) : (
        // Data available, render the grid
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row", // Display cards in a row
            flexWrap: "wrap",
            flexGrow: 1,
            lineHeight: "10%",
          }}
        >
          {data.map(
            (
              entry: {
                employee_name: any;
                leave_type: any;
                reason_for_leave: any;
                employee_email: any;
              },
              index: React.Key
            ) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  flex: "0 0 calc(33.33% - 16px)",
                  justifyItems: "center",
                  alignItems: "center",
                }}
                key={index}
              >
                <MDTypography variant="body1"> {entry.employee_name}</MDTypography>
                <MDTypography variant="body2">{entry.leave_type}</MDTypography>
                <MDTypography variant="body2">{entry.reason_for_leave}</MDTypography>
                <MDTypography variant="overline" color="info">
                  {entry.employee_email}
                </MDTypography>
              </Card>
            )
          )}
        </Grid>
      )}
    </>
  );
};

// Define YourDataInterface to match your data structure
interface YourDataInterface {
  employee_name: string;
  leave_type: string;
  reason_for_leave: string;
  from_date: string; // Adjust the type according to your needs
  to_date: string; // Adjust the type according to your needs
  employee_email: string;
}
