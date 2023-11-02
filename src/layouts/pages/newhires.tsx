import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import imagecontent from "./practiceimages/name2.png";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
const Newhires = () => {
  const hiringdata = [
    {
      dob: "28 Aug",
      image: "",
      name: "S1 - Allan Francis",
      email: "allanfrancis@zylker.com",
      designation: "Head of Department-Product",
    },
    {
      dob: "28 Aug",
      image: "",
      name: "S2 - Aleo Krib",
      email: "aleokirb@zylker.com",
      designation: "Head of Department-Sales",
    },
    {
      dob: "28 Aug",
      image: "",
      name: "S8 - Morgan Finely",
      email: "morganfinely@zylker.com",
      designation: "Officer-Marketing",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row", // Display cards in a row
          flexWrap: "wrap",
          flexGrow: 1,
          lineHeight: "10%",
        }}
      >
        {hiringdata.map((data, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 1,
              m: 1,
              bgcolor: "transparent",
              borderRadius: 2,
              flex: "0 0 calc(33.33% - 16px)",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <MDTypography variant="body2" fontWeight="light">
              {data.dob}
            </MDTypography>
            <CardContent>
              <Avatar src={imagecontent} />
            </CardContent>
            <MDTypography variant="h6">{data.name}</MDTypography>
            <MDTypography variant="caption">{data.designation}</MDTypography>
            <MDTypography variant="overline" color="info">
              {data.email}
            </MDTypography>
          </Card>
        ))}
      </Grid>
    </DashboardLayout>
  );
};
export default Newhires;
