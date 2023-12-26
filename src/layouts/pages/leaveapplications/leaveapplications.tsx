import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Dialog from "@mui/material/Dialog";
import Updateleave from "./updateapplyleave";
import Viewleave from "./viewleave";
import React from "react";
function getDaysDifference(startDateStr: string, endDateStr: string): number | string {
  // Parse the date strings into Date objects
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Check if the date strings are valid
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return "Invalid date format";
  }

  // Calculate the time difference in milliseconds
  const timeDifference = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return Math.floor(daysDifference);
}

const Applyleave = () => {
  const [data, setData] = useState([]);

  const [openupdate, setOpenupdate] = useState(false); //for dialog box start
  const [editData, setEditData] = useState(null);

  const handleOpenupdate = (index: number) => {
    const main_data = data[index];
    console.log(main_data, "maindata");

    setOpenupdate(true);
    setEditData(main_data);
  };
  console.log(editData, "Data that needs to be edited");

  const handleCloseupdate = () => {
    setOpenupdate(false);
  }; //end

  const [openview, setOpenview] = useState(false); //for dialog box start
  const [Viewdata, setviewData] = useState(null);

  const handleOpenview = (index: number) => {
    const main_data = data[index];
    console.log(main_data, "maindata");

    setOpenview(true);
    setviewData(main_data);
  };
  console.log(editData, "Data that needs to be edited");

  const handleCloseview = () => {
    setOpenview(false);
  }; //end

  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/apply_leave", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk5OTU4NDcxfQ.Ak2T_beghsyFl-g3iuFoA9ne5ccPp0bd9vncnj6adCI`,
        },
      })
      .then((response) => {
        setData(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const dataTableData = {
    columns: [
      { Header: "Employee", accessor: "employee_name" },
      { Header: "Leave Type", accessor: "leave_type" },
      { Header: "Type", accessor: "type" },

      {
        Header: "Leave   Period",
        accessor: "leave_period",
      },
      { Header: "Days Taken", accessor: "leave_days" },
      { Header: "Data of Request", accessor: "created_at" },
      { Header: "Action", accessor: "action" },
    ],

    rows: data.map((row, index) => ({
      employee_name: <MDTypography variant="p">{row.employee_name}</MDTypography>,
      leave_type: <MDTypography variant="p">{row.leave_type}</MDTypography>,
      type: <MDTypography variant="p">{row.type}</MDTypography>,
      created_at: <MDTypography variant="p">{row.created_at}</MDTypography>,
      leave_period: (
        <MDTypography variant="p">
          {row.from_date} to {row.to_date}
        </MDTypography>
      ),
      leave_days: (
        <MDTypography variant="p">{getDaysDifference(row.from_date, row.to_date)}</MDTypography>
      ),
      to_date: <MDTypography variant="p">{row.to_date}</MDTypography>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              handleOpenview(index);
              console.log(index);
            }}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleOpenupdate(index);
              console.log(index);
            }}
          >
            <CreateRoundedIcon />
          </IconButton>
        </MDTypography>
      ), // Replace "handleAction" with the function you want to call for each row action.
    })),
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Dialog open={openupdate} onClose={handleCloseupdate}>
        <Updateleave openupdate={openupdate} setOpenupdate={setOpenupdate} task={editData} />
      </Dialog>
      <Dialog open={openview} onClose={handleCloseview}>
        <Viewleave openview={openview} setOpenview={setOpenview} data={Viewdata} />
      </Dialog>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Applyleave;
