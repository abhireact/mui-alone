import React, { useEffect, useState, useRef } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import Divider from "@mui/material/Divider";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Cookies from "js-cookie";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import DataTable from "examples/Tables/DataTable";
const token = Cookies.get("token");

const SalaryTemp = () => {
  const [data, setData] = useState([]);

  const [hiddenElements, setHiddenElements] = useState([]);
  const [inputElements, setInputElements] = useState([]);
  const [ann, setAnn] = useState([]);

  const handleChange = (index: any, field: any, value: any) => {
    // Update the state with the modified data
    const updatedElements = [...hiddenElements];
    updatedElements[index] = { ...updatedElements[index], [field]: value };
    setInputElements(updatedElements);
    console.log(inputElements, "changing elements");
  };

  const handleCancelClick = (cancelledElement: any) => {
    const updatedHiddenElements = hiddenElements.filter((element) => element !== cancelledElement);
    setHiddenElements(updatedHiddenElements);
    console.log(hiddenElements, "hidden elements");
  };

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
          setHiddenElements([response.data[1]]);
          console.log(hiddenElements, "default value ");
        }
      } catch (error) {
        console.log("Data not found");
      }
    };
    fetchData();
  }, []);

  const handleClickOpen = (hello: any) => {
    console.log(hiddenElements, " sending data");
    setHiddenElements([...hiddenElements, hello]);

    setInputElements([...inputElements, hello]);
  };
  const dataTableData = {
    columns: [
      { Header: "SALARY COMPONENTS", accessor: "earning_type_name" },
      { Header: "CALCULATION TYPE", accessor: "calculation_type" },
      { Header: "MONTHLY AMOUNT", accessor: "monthly_amount" },
      { Header: "ANNUAL  AMOUNT", accessor: "annual_amount" },

      { Header: "ACTION", accessor: "action" },
    ],

    rows: hiddenElements.map((row, _index) => ({
      calculation_type: (
        <div>
          {row.calculation_type === "% of Basic" || row.calculation_type === "% of CTC" ? (
            <MDTypography variant="p">
              <MDInput
                name={`calculation_type_${_index}`}
                onChange={(e: { target: { value: any } }) =>
                  handleChange(_index, "enter_amount_or_percent", e.target.value)
                }
                defaultValue={row.enter_amount_or_percent}
                sx={{ width: "100px" }}
              />
            </MDTypography>
          ) : (
            <MDTypography variant="caption"> system calculated </MDTypography>
          )}
          <MDTypography variant="p"> {row.calculation_type} </MDTypography>
        </div>
      ),
      earning_type_name: <MDTypography variant="p">{row.earning_type_name}</MDTypography>,
      monthly_amount: (
        <MDTypography variant="p">
          {" "}
          <MDInput
            sx={{ width: "100px" }}
            name={`month_amount_${_index}`}
            type="number"
            onChange={(e: { target: { value: any } }) => {
              const monthlyAmount = e.target.value;
              handleChange(_index, "month_amount", monthlyAmount);
              // Calculate and update annual amount
              const annualAmount = Number(monthlyAmount) * 12;
              setAnn((prevAnn) => {
                const updatedAnn = { ...prevAnn };
                updatedAnn[_index] = annualAmount;
                return updatedAnn;
              });
            }}
            defaultValue={0}
          />
        </MDTypography>
      ),
      annual_amount: (
        <MDTypography variant="p">
          <MDInput value={ann[_index] || 0} disabled sx={{ width: "100px" }} p={2} />
        </MDTypography>
      ),

      action: (
        <MDButton>
          <RemoveCircleOutlineIcon onClick={() => handleCancelClick(row)} color="primary" />
        </MDButton>
      ),
    })),
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
                  <Grid container>
                    <Grid item sm={9}>
                      {" "}
                      <Typography variant="caption">{info?.earning_type_name}</Typography>
                    </Grid>
                    <Grid item sm={2}>
                      <MDButton color="info" variant="text" onClick={() => handleClickOpen(info)}>
                        <AddIcon />
                      </MDButton>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item sm={9}>
          <DataTable
            table={dataTableData}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default SalaryTemp;
{
  /* <Card>
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
            {hiddenElements?.map((row, index) => (
              <Grid key={index} container p={2}>
                <Grid item sm={2.5}>
                  {row.display_name}
                </Grid>
                <Grid item sm={2.5}>
                  {row.calculation_type === "% of Basic" || row.calculation_type === "% of CTC" ? (
                    <MDInput
                      name={`calculation_type_${index}`}
                      onChange={(e: { target: { value: any } }) =>
                        handleChange(index, "enter_amount_or_percent", e.target.value)
                      }
                      defaultValue={row.enter_amount_or_percent}
                      sx={{ width: "75%" }}
                    />
                  ) : (
                    "fixed amount"
                  )}
                </Grid>
                <Grid item sm={2.5}>
                  <MDInput
                    sx={{ width: "75%" }}
                    name={`month_amount_${index}`}
                    type="number"
                    onChange={(e: { target: { value: any } }) => {
                      const monthlyAmount = e.target.value;
                      handleChange(index, "month_amount", monthlyAmount);
                      // Calculate and update annual amount
                      const annualAmount = Number(monthlyAmount) * 12;
                      setAnn((prevAnn) => {
                        const updatedAnn = { ...prevAnn };
                        updatedAnn[index] = annualAmount;
                        return updatedAnn;
                      });
                    }}
                    defaultValue={0}
                  />
                </Grid>
                <Grid item sm={2.5}>
                  <MDInput value={ann[index] || 0} disabled sx={{ width: "55%" }} p={2} />
                  <MDButton>
                    <RemoveCircleOutlineIcon
                      onClick={() => handleCancelClick(row)}
                      color="primary"
                    />
                  </MDButton>
                </Grid>
              </Grid>
            ))}
          </Card> */
}
