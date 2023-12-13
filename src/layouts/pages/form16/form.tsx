import { Stack } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "components/MDAvatar";
import IconButton from "@mui/material/IconButton";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
const Form = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Stack mt={4} direction="row" justifyContent="center">
          <MDTypography variant="subtitle1">
            It&apos;s time to generate Form 16 for the financial year
          </MDTypography>
        </Stack>
        <Stack mt={2} direction="row" justifyContent="center">
          <MDTypography variant="h6">
            Verify your tax deductor before you generate Form 16
          </MDTypography>
        </Stack>
        <Stack mt={2} direction="row" justifyContent="center">
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
                <MDTypography variant="body1">Debendra</MDTypography>
                <IconButton>
                  <CreateRoundedIcon fontSize="small" />
                </IconButton>
              </Stack>
              <MDTypography variant="subtitle2">Son/Daughter of Ananta </MDTypography>
            </Stack>
          </Card>
        </Stack>

        <Stack mt={2} direction="row" justifyContent="center">
          <MDTypography variant="button">
            Note: Remember that once you generate Form 16, you cannot change the deductor details.
          </MDTypography>
        </Stack>
        <Stack mt={2} direction="row" justifyContent="center">
          <MDButton variant="contained" color="info">
            Generate Form 16
          </MDButton>
        </Stack>
      </MDBox>
    </DashboardLayout>
  );
};

export default Form;
