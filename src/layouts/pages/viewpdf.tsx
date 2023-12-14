import React from "react";
import jsPDF from "jspdf";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const Formtable = () => {
  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tdStyle: React.CSSProperties = {
    border: "1px solid #151516",
    textAlign: "center",
    padding: "8px",
  };

  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tdStyle} colSpan={5}>
              Details of Salary Paid and any other income and tax deducted
            </td>
          </tr>

          <tr>
            <td style={tdStyle}>1.</td>
            <td style={tdStyle} colSpan={4}>
              Gross salary
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>(a)</td>
            <td style={tdStyle}>Salary as per provisions contained in section 17(1)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>1474046</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(b)</td>
            <td style={tdStyle}>Value of perquisites under section 17(2)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(c)</td>
            <td style={tdStyle}>Profits in lieu of salary under section 17(3)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(d)</td>
            <td style={tdStyle}>Total</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>1474046.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(e)</td>
            <td style={tdStyle}>Reported total amount of salary received from other employer(s)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>2.</td>
            <td style={tdStyle} colSpan={3}>
              Less: Allowances to the extent exempt under section 10
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>(a)</td>
            <td style={tdStyle}>Travel concession or assistance under section 10(5)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(b)</td>
            <td style={tdStyle}>Death-cum-retirement gratuity under section 10(10)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(c)</td>
            <td style={tdStyle}>Commuted value of pension under section 10(10A)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(d)</td>
            <td style={tdStyle}>
              Cash equivalent of leave salary encashment under section 10 (10AA)
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(e)</td>
            <td style={tdStyle}>House rent allowance under section 10(13A)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>57502.0</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(f).</td>
            <td style={tdStyle}>
              Amount of any other exemption under section 10 [Note: Break-up to be filled and signed
              by employer in the table provide at the bottom of this form]
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
          </tr>

          <tr>
            <td style={tdStyle}>(g)</td>
            <td style={tdStyle}>Total amount of any other exemption under section 10</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(h)</td>
            <td style={tdStyle}>
              Total amount of exemption claimed under section 10 [2(a)+2(b)+2(c)+2(d)+2(e)+2(g)]
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>57502.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>3.</td>
            <td style={tdStyle}>
              Total amount of salary received from current employer [1(d)+2(h)]
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>1416544.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>4.</td>
            <td style={tdStyle} colSpan={4}>
              Less: Deductions under section 16
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>(a)</td>
            <td style={tdStyle}>Total amount of any other exemption under section 10</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>50000.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(b)</td>
            <td style={tdStyle}>Entertainment allowance under section 16(ii)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(c)</td>
            <td style={tdStyle}>Tax on employment under section 16(iii)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>5.</td>
            <td style={tdStyle}>Total amount of deductions under section 16 [4(a)+4(b)+4(c)]</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>50000.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>6.</td>
            <td style={tdStyle}>
              Income chargeable under the head &rdqou;Salaries&ldquo;[3+1(e)-5]
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>50000.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>7.</td>
            <td style={tdStyle} colSpan={4}>
              Add: Any other income reported by the employee under as per section 192 (2B)
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>(a)</td>
            <td style={tdStyle}>
              Income (or admissible loss) from house property reported by employee offered for TDS
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(b)</td>
            <td style={tdStyle}>Income under the head Other Sources offered for TDS</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}></td>
          </tr>
          <tr>
            <td style={tdStyle}>8.</td>
            <td style={tdStyle}>
              Total amount of other income reported by the employee [7(a)+7(b)]
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>9.</td>
            <td style={tdStyle}>Gross total income (6+8)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>1366544.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>10.</td>
            <td style={tdStyle} colSpan={2}>
              Deductions under Chapter VI-A
            </td>
            <td style={tdStyle}>Gross Amount</td>
            <td style={tdStyle}>Deductible Amount</td>
          </tr>
          <tr>
            <td style={tdStyle}>(a)</td>
            <td style={tdStyle}>
              Deduction in respect of life insurance premia, contributions to provident fund etc.
              under section 80C
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>150000.00</td>
            <td style={tdStyle}>150000.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(b)</td>
            <td style={tdStyle}>
              Deduction in respect of contribution to certain pension funds under section 80CCC
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(c)</td>
            <td style={tdStyle}>
              Deduction in respect of contribution by taxpayer to pension scheme under section 80CCD
              (1)
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(d)</td>
            <td style={tdStyle}>Total deduction under section 80C, 80CCC and 80CCD(1)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>150000.00</td>
            <td style={tdStyle}>150000.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(e)</td>
            <td style={tdStyle}>
              Deductions in respect of amount paid/deposited to notified pension scheme under
              section 80CCD (1B)
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(f)</td>
            <td style={tdStyle}>
              Deduction in respect of contribution by Employer to pension scheme under section 80CCD
              (2)
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(g)</td>
            <td style={tdStyle}>
              Deduction in respect of health insurance premia under section 80D
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(h)</td>
            <td style={tdStyle}>
              Deduction in respect of interest on loan taken for higher education under section 80E
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle} colSpan={2}></td>

            <td style={tdStyle}>
              <div>Gross</div>
              <div>Amount</div>
            </td>

            <td style={tdStyle}>
              <div>Qualifying</div>
              <div>Amount</div>
            </td>
            <td style={tdStyle}>
              <div>Deductible</div>
              <div>Amount</div>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>(i)</td>
            <td style={tdStyle}>
              Total Deduction in respect of donations to certain funds, charitable institutions,
              etc. under section 80G
            </td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(j)</td>
            <td style={tdStyle}>
              Deduction in respect of interest on deposits in savings account under section 80TTA
            </td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>(k)</td>
            <td style={tdStyle}>
              Amount Deductible under any other provision (s) of Chapter VI-A [Note: Break-up to be
              filled and signed by employer in the table provide at the bottom of this form]
            </td>
            <td style={tdStyle} colSpan={3}></td>
          </tr>
          <tr>
            <td style={tdStyle}>(l)</td>
            <td style={tdStyle}>
              Total of amount deductible under any other provision(s) of Chapter VI-A
            </td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>11.</td>
            <td style={tdStyle}>
              Aggregate of deductible amount under Chapter VI-A
              [10(d)+10(e)+10(f)+10(g)+10(h)+10(i)+10(j)+10(l)]
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>150000.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>12.</td>
            <td style={tdStyle}>Total taxable income (9-11)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>1216544.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>13.</td>
            <td style={tdStyle}>Tax on total income</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>177463.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>14.</td>
            <td style={tdStyle}>Rebate under section 87A, if applicable</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>15.</td>
            <td style={tdStyle}>Surcharge, wherever applicable</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>16.</td>
            <td style={tdStyle}>Health and eduacation cess</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>7099.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>17.</td>
            <td style={tdStyle}>Tax payable (13+15+16-14)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>184562.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>18.</td>
            <td style={tdStyle}>Less: Relief under section 89 (attach details)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>0.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>19.</td>
            <td style={tdStyle}>Net tax payable (17-18)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>184562.00</td>
          </tr>
          <tr>
            <td style={tdStyle} colSpan={5}>
              Verification
            </td>
          </tr>
          <tr>
            <td style={tdStyle} colSpan={5}>
              I, UMA ANDAN, son/daughter of MUTHURAMAN ANDAN CHETTY .Working in the capacity of HEAD
              PAYROLL AND CONSOLIDATED FINANCIALS (Designation) do hereby certify that the
              information given above is true, complete and correct and is based on the books of
              account, documents, TDS statements, and other available records.
            </td>
          </tr>
          <tr>
            <td style={tdStyle} colSpan={2}>
              Place: Mumbai
            </td>
            <td style={tdStyle} colSpan={3}>
              (Signature of person responsible for deduction of tax)
            </td>
          </tr>
          <tr>
            <td style={tdStyle} colSpan={2}>
              Date: 30-May-2023
            </td>

            <td style={tdStyle} colSpan={3}>
              Full Name:
            </td>
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
    const padding = 72;

    // Get content dimensions
    const contentWidth = content.offsetWidth + padding;
    const contentHeight = content.offsetHeight + padding * 2;

    // Adjust document size to fit content
    doc.internal.pageSize.width = contentWidth;
    doc.internal.pageSize.height = contentHeight;

    // Set content width to fill the page
    content.style.padding = `${padding}px`;
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
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MDButton
            color="primary"
            variant="outlined"
            onClick={() => {
              handleCloseupdate();
            }}
          >
            &lt;-BACK
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
