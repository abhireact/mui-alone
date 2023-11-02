import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { styled } from "@mui/material/styles";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import MDButton from "components/MDButton";
import { DialerSip } from "@mui/icons-material";

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.content}`]: {
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: "#F0F2F5",
    },
    "&:hover": {
      backgroundColor: "#F0F2F5",
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, #F0F2F5)`,
      color: "inherit",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "normal",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

// const treeheading = [
//   { Product: ["lemon", "orange"] },
//   { Services: ["Call Center", "Developement", "Saleforce"] },
//   { InformationTechnology: ["React", "Node"] },
//   { Marketing: ["X", "Y", "Z"] },
//   { HR: ["A", "B", "C"] },
// ];

const Taxwork = () => {
  const a = [
    {
      income: "Basic",
      amount: 12500400,
    },
    {
      income: "House Rent Allowance",
      amount: 6250200,
    },
    {
      income: "Fixed Allowance",
      amount: 6249600,
    },
  ];
  //Start Dialog box
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>TDS Details</Grid>
      <Grid container>
        <Grid sm={6}>
          <MDTypography variant="body2">Particulars</MDTypography>
        </Grid>
        <Grid sm={6}>
          <MDTypography variant="body2">Declared Amount</MDTypography>
        </Grid>
      </Grid>
      <Divider />
      <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>Earnings</Grid>
      <TreeView
        // aria-label="file system navigator"
        defaultCollapseIcon={<RemoveCircleIcon color="info" />}
        defaultExpandIcon={<AddCircleIcon color="info" />}
      >
        <StyledTreeItem
          nodeId="1"
          label={
            <Grid container>
              <Grid sm={6}>Gross Salaray</Grid>
              <Grid sm={6}>{}</Grid>
            </Grid>
          }
        >
          <StyledTreeItem
            nodeId="2"
            label={
              <Grid container>
                <Grid sm={6}>{a[0].income}</Grid>
                <Grid sm={6}>{a[0].amount}</Grid>
              </Grid>
            }
          />
          <StyledTreeItem
            nodeId="3"
            label={
              <Grid container>
                <Grid sm={6}>{a[1].income}</Grid>
                <Grid sm={6}>{a[1].amount}</Grid>
              </Grid>
            }
          />
          <StyledTreeItem
            nodeId="4"
            label={
              <Grid container>
                <Grid sm={6}>{a[2].income}</Grid>
                <Grid sm={6}>{a[2].amount}</Grid>
              </Grid>
            }
          />
        </StyledTreeItem>
      </TreeView>
      <TreeView
        // aria-label="file system navigator"
        defaultCollapseIcon={<RemoveCircleIcon color="info" />}
        defaultExpandIcon={<AddCircleIcon color="info" />}
      >
        <StyledTreeItem
          nodeId="5"
          label={
            <Grid container>
              <Grid sm={6}> Income from Other Sources</Grid>
              <Grid sm={6}>{a[0].amount}</Grid>
            </Grid>
          }
        >
          {" "}
          <StyledTreeItem
            nodeId="6"
            label={
              <Grid container>
                <Grid sm={6}>{a[1].income}</Grid>
                <Grid sm={6}>{a[1].amount}</Grid>
              </Grid>
            }
          />
        </StyledTreeItem>
      </TreeView>
      <Divider />
      <Grid container>
        <Grid sm={6}>Gross Total Income</Grid>
        <Grid>₹2,50,002.00</Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid sm={6}>Exemptions Based on your Declaration</Grid>
      </Grid>
      <TreeView
        // aria-label="file system navigator"
        defaultCollapseIcon={<RemoveCircleIcon color="info" />}
        defaultExpandIcon={<AddCircleIcon color="info" />}
      >
        <StyledTreeItem
          nodeId="1"
          label={
            <Grid container>
              <Grid sm={6}>Under Section 16</Grid>
              <Grid sm={6}>₹50,000.00</Grid>
            </Grid>
          }
        >
          <StyledTreeItem
            nodeId="2"
            label={
              <Grid container>
                <Grid sm={6}>Standard Deduction</Grid>
                <Grid sm={6}>₹50,000.00</Grid>
              </Grid>
            }
          />
        </StyledTreeItem>
      </TreeView>
      <Divider />
      <Grid container>
        <Grid sm={6}>Total Exemptions</Grid>
        <Grid>₹50,000.00</Grid>
      </Grid>
      <Divider />
      <Grid container sx={{ bgcolor: "#F4F4F4" }}>
        <Grid sm={6}>Total Taxable Income</Grid>
        <Grid>₹2,00,000.00</Grid>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>Tax Details</Grid>
      <Grid container>
        <Grid sm={6}>
          Tax on total taxable income{" "}
          <MDTypography color="info" onClick={handleClickOpen}>
            (Show Breakup)
          </MDTypography>
        </Grid>
        <Grid>₹0</Grid>
      </Grid>
      <Grid container>
        <Grid sm={6}>Less: Rebate Under Section 87A (a)</Grid>
        <Grid>₹0</Grid>
      </Grid>
      <Grid container>
        <Grid sm={6}>Less : Relief Under Section 87A (b)</Grid>
        <Grid>₹0</Grid>
      </Grid>
      <Grid container>
        <Grid sm={6}>Tax on total taxable income</Grid>
        <Grid>₹0</Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid sm={6}>Total Tax Payable</Grid>
        <Grid>₹2,50,002.00</Grid>
      </Grid>
      <Divider />
      <Grid container sx={{ bgcolor: "#F4F4F4" }}>
        <Grid sm={6}>Total Tax Liability</Grid>
        <Grid sm={6}>₹0</Grid>
        <Grid sm={6}>TDS to be deducted per month: ₹0.00</Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <MDBox m={10}>
          <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>
            Tax Calculation Breakup{" "}
          </Grid>
          <Grid container>
            <Grid sm={6}>Total Taxable Income</Grid>
            <Grid>₹2,00,000.00</Grid>
          </Grid>
          <Grid container>
            <Grid sm={6}>Taxable Income Range</Grid>
            <Grid>Tax Amount</Grid>
          </Grid>
          <Grid container>
            <Grid sm={6}>For ₹0.00 to ₹3,00,000.00</Grid>
            <Grid sm={6}>₹0</Grid>
            <Grid sm={6}>Tax: 0% of ₹2,00,002.00</Grid>
          </Grid>
          <Grid container>
            <Grid sm={6}>Tax on total taxable income</Grid>
            <Grid>₹0</Grid>
          </Grid>
        </MDBox>
      </Dialog>
    </DashboardLayout>
  );
};

export default Taxwork;
