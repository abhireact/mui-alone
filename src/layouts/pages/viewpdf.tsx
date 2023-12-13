import React, { useState } from "react";
import jsPDF from "jspdf";

import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";

const Formtable = () => {
  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tdStyle: React.CSSProperties = {
    border: "2px solid #151516",
    textAlign: "left",
    padding: "8px",
  };

  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tdStyle} colSpan={4}>
              Details of Salary Paid and any other income and tax deducted
            </td>
          </tr>
          <tr>
            <td style={tdStyle} colSpan={2}>
              Whether opting for taxation u/s 115BAC
            </td>
            <td style={tdStyle} colSpan={2}>
              No
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>Gross salary</td>
            <td style={tdStyle}>Rs.</td>
            <td style={tdStyle}>Rs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Salary as per provisions contained in section 17(1)</td>
            <td style={tdStyle}>salaryAsPerProvisionsContainedInSection171</td>
          </tr>
          <tr>
            <td style={tdStyle}>Value of perquisites under section 17(2)</td>
            <td style={tdStyle}>valuePerquisitesUnderSection172</td>
          </tr>
          <tr>
            <td style={tdStyle}>Profits in lieu of salary under section 17(3)</td>
            <td style={tdStyle}>profitsInLieuOfSalaryUnderSection173</td>
          </tr>
          <tr>
            <td style={tdStyle}>Total reported amount of salary received from other employers</td>
            <td style={tdStyle}>totalReportedAmountOfSalaryReceivedFromOtherEmployers</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DownloadButton = () => {
  const downloadPDF = async () => {
    const content = document.getElementById("content");
    const doc = new jsPDF("p", "pt", "a4");

    // Get content dimensions
    const contentWidth = content.offsetWidth;
    const contentHeight = content.offsetHeight;

    // Adjust document size to fit content
    doc.internal.pageSize.width = contentWidth;
    doc.internal.pageSize.height = contentHeight;

    // Set content width to fill the page
    content.style.width = "90%";

    // Add content to the PDF
    await doc.html(content, {
      callback: () => {
        doc.save("webpage.pdf");
      },
    });
  };

  return (
    <>
      <MDButton onClick={downloadPDF} color="info" variant="outlined">
        Download As PDF
      </MDButton>
    </>
  );
};

const Pdfdown = (props: any) => {
  const { setOpenupdate, emaildata } = props;
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };
  return (
    <>
      <div>
        {" "}
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MDButton
            color="primary"
            variant="outlined"
            onClick={() => {
              handleCloseupdate();
            }}
          >
            Cancel
          </MDButton>
        </Grid>
      </div>

      <div id="content">
        <Formtable />
      </div>
      <DownloadButton />
    </>
  );
};

export default Pdfdown;
