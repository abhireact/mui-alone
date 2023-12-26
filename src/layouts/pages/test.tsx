import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MDButton from "components/MDButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Cookies from "js-cookie";
import axios from "axios";

const token = Cookies.get("token");

const Test = () => {
  const [data, setData] = useState([{ earning_type_name: "" }]);
  const [hiddenElements, setHiddenElements] = useState([]);

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

  const handleClickOpen = (hello: string) => {
    setHiddenElements([...hiddenElements, hello]);
    console.log(hiddenElements, "it is working");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                display: hiddenElements.includes(info.earning_type_name) ? "none" : "block",
              }}
            >
              <Typography>
                {info?.earning_type_name}
                <MDButton
                  color="info"
                  variant="text"
                  onClick={() => handleClickOpen(info?.earning_type_name)}
                >
                  <AddIcon />
                </MDButton>
              </Typography>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {hiddenElements?.map((info, index) => (
        <div key={index}>
          {info}
          <button>disappear</button>
        </div>
      ))}
    </DashboardLayout>
  );
};

export default Test;
