import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";

import Grid from "@mui/material/Grid";

const validationSchema = yup.object({
  designations: yup.string().required("Please enter designation name"),
});
const Updatedes = (props: any) => {
  const { openUpdate, setOpenupdate, task } = props;
  console.log(task, "task");
  const handleCloseupdate = () => {
    setOpenupdate(false);
  };

  const formik = useFormik({
    initialValues: {
      designations: task.des_name,
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      axios
        .put(
          "http://10.0.20.133:8000/designation",
          {
            old_des_name: task.des_name,
            new_des_name: values.designations,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvX2lkIjoxLCJlbWFpbCI6IjIwMDNvbTE3MTFAZ21haWwuY29tIiwiZXhwIjoxNjk3Nzc2NTMwLCJhZG1pbiI6dHJ1ZX0.PWQQOV6bj7uCVyqjG7NjGrZ0CR6GVGUivWOjmy9vCSk`,
            },
          }
        )
        .then((response) => {
          console.log(response, "update is successful");
        })
        .catch((error) => {
          console.log(error, "failed update");
        });
      console.log(values);

      action.resetForm();
      window.location.reload();
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <MDBox p={4}>
          <Grid container spacing={2}>
            <Grid sm={12}>
              <MDInput
                sx={{ width: 500 }}
                variant="standard"
                name="designations"
                autoComplete="off"
                label="Designation Name"
                value={formik.values.designations}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.designations && Boolean(formik.errors.designations)}
                helperText={formik.touched.designations && formik.errors.designations}
                mb={10}
                mt={10}
              />
            </Grid>

            <Grid mt={3}>
              <Button
                color="info"
                variant="contained"
                type="submit"
                onClick={() => {
                  handleCloseupdate();
                }}
              >
                Save
              </Button>
            </Grid>
            <Grid ml={2} mt={3}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  handleCloseupdate();
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </MDBox>
      </form>
    </Card>
  );
};

export default Updatedes;
