import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";

interface LoginPageProps {}

interface LoginPageState {
  username: string;
  password: string;
  profilePic: File | null;
}

const LoginPage: React.FC<LoginPageProps> = () => {
  const formik = useFormik<LoginPageState>({
    initialValues: {
      username: "",
      password: "",
      profilePic: null,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      // You can add validation for the profilePic if needed
    }),
    onSubmit: async (values) => {
      // Handle form submission logic here
      const { username, password, profilePic } = values;
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      try {
        const response = await fetch("/api/login", {
          method: "POST",
          body: formData,
        });

        console.log(response);
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      formik.setFieldValue("profilePic", e.target.files[0]);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {formik.values.profilePic && (
              <div>
                <img
                  src={URL.createObjectURL(formik.values.profilePic)}
                  alt="Profile Preview"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </div>
            )}
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
