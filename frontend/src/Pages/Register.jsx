import React from "react";
import { Button, Grid, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import axios from "axios";
import sing from "../images/sing.png";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  mainLogin: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    minWidth: 300,
  },
  loginHeading: {
    textAlign: "left",
    fontSize: "50px",
    fontWeight: "300",
    color: "#333333",
    marginBottom: "20px",
  },
  signUpImage: {
    width: "80%",
    height: "600px",
    objectFit: "cover",
    margin: "auto",
  },
});

const MyTextField = ({ label, type, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      type={type}
      helperText={errorText}
      label={label}
      placeholder={placeholder}
      margin="normal"
      variant="outlined"
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(4, "First name should be miniumum 2 characters!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(6, "Password should have miniumum 6 characters!")
    .required("Required"),
});

function Register(props) {
  const classes = useStyles(props);
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/admin/register`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );
      toast.success(response?.data?.message || "Registarion user successfull");
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not register user");
    }
  };

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (data, { setSubmitting }) => {
              setSubmitting(true);
              await handleRegister(data);
              console.log("submit: ", data);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={classes.mainLogin}>
                <Box className={classes.loginHeading}>Register as new user</Box>
                <MyTextField
                  label="Name"
                  name="name"
                  margin="normal"
                  variant="outlined"
                />
                <MyTextField
                  label="Email"
                  margin="normal"
                  name="email"
                  variant="outlined"
                />
                <MyTextField
                  label="Password"
                  name="password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
                <div style={{ height: 20 }} />
                <Button
                  disabled={isSubmitting}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <div />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={sing} className={classes.signUpImage} alt="brand" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
