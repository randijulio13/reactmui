import {
  Container,
  CssBaseline,
  Typography,
  Box,
  TextField,
  Grid,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const formData = { email, name, password, password_confirmation: confirm };

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("register", formData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          mt: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h1">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={register}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs md={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs md={6}>
              <TextField
                required
                fullWidth
                id="password_confirmation"
                label="Confirm"
                value={confirm}
                type="password"
                onChange={(e) => setConfirm(e.target.value)}
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
            variant="contained"
          >
            Submit
          </Button>
          <Link variant="body2" component={RouterLink} to="/login">
            Already have an account? Sign In
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
