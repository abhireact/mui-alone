import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import Cookies from "js-cookie";
const token = Cookies.get("token");
const Viewleave = (props: any) => {
  const { openView, setOpenview, data } = props;
  console.log(data, "data");
  const handleCloseview = () => {
    setOpenview(false);
  };
  return (
    <Card>
      <MDBox py={4} pl={8}>
        <Grid container>
          <Grid sm={5} my={2}>
            <MDTypography variant="body2">Employee ID</MDTypography>
          </Grid>
          <Grid sm={6} my={2}>
            <MDInput value={data.employee_name} variant="standard" />
          </Grid>

          <Grid sm={5} my={2}>
            <MDTypography variant="body2">Leave Type</MDTypography>
          </Grid>
          <Grid sm={6} my={2}>
            <MDInput value={data.leave_type} variant="standard" />
          </Grid>

          <Grid sm={3} my={2}>
            <MDTypography variant="body2">Date</MDTypography>
          </Grid>
          <Grid sm={3} my={2}>
            <MDInput value={data.from_date} variant="standard" />
          </Grid>
          <Grid sm={1} px={1} my={2}>
            <MDTypography variant="body2"> to</MDTypography>
          </Grid>
          <Grid sm={3} my={2}>
            <MDInput value={data.to_date} variant="standard" />
          </Grid>

          <Grid sm={5} my={2}>
            <MDTypography variant="body2">Team Email ID</MDTypography>
          </Grid>
          <Grid sm={6} my={2}>
            <MDInput value={data?.team_email} variant="standard" />
          </Grid>

          <Grid sm={5} my={2}>
            <MDTypography variant="body2">Date of Request</MDTypography>
          </Grid>
          <Grid sm={6} my={2}>
            <MDInput value={data.created_at} variant="standard" />
          </Grid>

          <Grid sm={5} my={2}>
            <MDTypography variant="body2">Reason for Leave</MDTypography>
          </Grid>
          <Grid sm={6} my={2}>
            <MDInput rows={3} multiline value={data?.reason_for_leave} variant="outlined" />
          </Grid>
          <MDButton
            color="primary"
            onClick={() => {
              handleCloseview();
            }}
          >
            Cancel
          </MDButton>
        </Grid>
      </MDBox>
    </Card>
  );
};
export default Viewleave;
