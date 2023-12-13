import { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";

import axios from "axios";

import Dialog from "@mui/material/Dialog";
import Pdfdown from "./viewpdf";

const Employeesm = () => {
  const [data, setData] = useState([]);

  const [emaildata, setEmaildata] = useState("");
  const [openupdate, setOpenupdate] = useState(false);
  const handleOpenupdate = (main_data: any) => {
    console.log(main_data, "maindata");

    setOpenupdate(true);
    setEmaildata(main_data);
  };
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  useEffect(() => {
    axios
      .get("http://10.0.20.133:8000/employee", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAyOTgwOTc5fQ.dy21_oSwrreB3J0z2J7Kvw3oIcP216jFAqSxWUsG-5s`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const dataTableData = {
    columns: [
      { Header: "Employee", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Action", accessor: "action", width: "20%" },
    ],
    rows: data.map((row, index) => ({
      name: (
        <MDTypography variant="p">
          {row.first_name} {row.last_name}
        </MDTypography>
      ),
      email: <MDTypography variant="p">{row.email}</MDTypography>,
      action: (
        <MDTypography variant="p">
          <IconButton
            onClick={() => {
              handleOpenupdate(row.email);
            }}
          >
            <DownloadIcon />
          </IconButton>
        </MDTypography>
      ),
    })),
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Dialog open={openupdate} onClose={handleCloseupdate} fullScreen>
        <Pdfdown setOpenupdate={setOpenupdate} emaildata={emaildata} />
      </Dialog>
      <DataTable table={dataTableData} />
    </DashboardLayout>
  );
};

export default Employeesm;
