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
import { Stack } from "@mui/material";
import MDBox from "components/MDBox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "components/MDAvatar";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { message } from "antd";

const Employeesm = () => {
  const [data, setData] = useState([]);
  const [deductor, setDeductor] = useState([]);

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
  const fetchEmp = () => {
    axios
      .get("http://10.0.20.133:8000/employee", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAyOTgwOTc5fQ.dy21_oSwrreB3J0z2J7Kvw3oIcP216jFAqSxWUsG-5s`,
        },
      })
      .then((response) => {
        console.log(response.data, "data");
        setData(response.data);
        if (response.status === 404) {
          message.error("No Data Available");
        }
      });
  };
  const fetchMgtaxes = () => {
    axios
      .get("http://10.0.20.133:8000/mg_taxes", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNzAyOTgwOTc5fQ.dy21_oSwrreB3J0z2J7Kvw3oIcP216jFAqSxWUsG-5s`,
        },
      })
      .then((response) => {
        setDeductor(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error, "yup hello");
        message.error("Error on creating role !");
      });
  };
  useEffect(() => {
    fetchMgtaxes();
    fetchEmp();
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
      <MDBox>
        <Stack direction="row" justifyContent="center">
          <MDTypography variant="subtitle1">
            It&apos;s time to generate Form 16 for the financial year
          </MDTypography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <MDTypography variant="h6">
            Verify your tax deductor before you generate Form 16
          </MDTypography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 3,
              m: 3,
            }}
          >
            <CardContent>
              <Avatar src="" bgColor="light" />
            </CardContent>
            <Stack direction="column" justifyContent="center">
              <Stack direction="row" justifyContent="space-between">
                <MDTypography variant="body1">{deductor[0]?.deductor_father_name}</MDTypography>
                <IconButton>
                  <CreateRoundedIcon fontSize="small" />
                </IconButton>
              </Stack>
              <MDTypography variant="subtitle2">
                Son/Daughter of {deductor[0]?.deductor_name}
              </MDTypography>
            </Stack>
          </Card>
        </Stack>
      </MDBox>
      <Dialog open={openupdate} onClose={handleCloseupdate} maxWidth="md">
        <Pdfdown setOpenupdate={setOpenupdate} emaildata={emaildata} />
      </Dialog>
      <DataTable
        table={dataTableData}
        entriesPerPage={{
          defaultValue: 5,
          entries: [5, 10, 15, 20, 25],
        }}
      />
    </DashboardLayout>
  );
};

export default Employeesm;
