import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Cookies from "js-cookie";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

const token = Cookies.get("token");

const Test = () => {
  const [data, setData] = useState([{ earning_type_name: "" }]);
  const [hiddenElements, setHiddenElements] = useState([]);
  const handleCancelClick = (cancelledElement: any) => {
    const updatedHiddenElements = hiddenElements.filter((element) => element !== cancelledElement);
    setHiddenElements(updatedHiddenElements);
    console.log(hiddenElements, "hidden elements");
  };
  const [ann, setAnn] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.0.20.133:8000/mg_earning_type", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log("Data not found");
      }
    };
    fetchData();
  }, []);

  const handleClickOpen = (hello: any) => {
    setHiddenElements([...hiddenElements, hello]);
    console.log(hiddenElements, "it is working");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Earning</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.map((info, index) => (
                <div
                  key={index}
                  style={{
                    display: hiddenElements.includes(info) ? "none" : "block",
                  }}
                >
                  <Typography variant="caption">
                    {info?.earning_type_name}
                    <MDButton color="info" variant="text" onClick={() => handleClickOpen(info)}>
                      <AddIcon />
                    </MDButton>
                  </Typography>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item sm={9}>
          <Card>
            <Grid container>
              <Grid item sm={2.5}>
                <MDTypography variant="subtitle2" p={2}>
                  SALARY COMPONENTS
                </MDTypography>
              </Grid>
              <Grid item sm={2.5}>
                <MDTypography variant="subtitle2" p={2}>
                  CALCULATION TYPE
                </MDTypography>
              </Grid>
              <Grid item sm={2.5}>
                <MDTypography variant="subtitle2" p={2}>
                  MONTHLY AMOUNT
                </MDTypography>
              </Grid>
              <Grid item sm={2.5}>
                <MDTypography variant="subtitle2" p={2}>
                  ANNUAL AMOUNT
                </MDTypography>
              </Grid>
            </Grid>
            <Divider />
            {hiddenElements?.map((info, index) => (
              <Grid key={index} container p={2}>
                <Grid item sm={2.5}>
                  {info.display_name}
                </Grid>
                <Grid item sm={2.5}>
                  {info.calculation_type === "% of Basic" ||
                  info.calculation_type === "% of CTC" ? (
                    <MDInput
                      name={`calculation_type_${index}`}
                      onChange={(e: { target: { value: any } }) => e.target.value}
                      defaultValue={info.enter_amount_or_percent}
                      sx={{ width: "75%" }}
                    />
                  ) : (
                    "fixed amount"
                  )}
                </Grid>
                <Grid item sm={2.5}>
                  <MDInput sx={{ width: "75%" }} name={`month_amount_${index}`} type="number" />
                </Grid>
                <Grid item sm={2.5}>
                  <Typography p={2}>
                    <CloseIcon onClick={() => handleCancelClick(info)} />
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Test;
