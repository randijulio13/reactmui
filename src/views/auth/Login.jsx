import {
  Box,
  Grid,
  Card,
  CardContent,
  Container,
  TextField,
  CssBaseline,
  Typography,
  Button,
  Link,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { authenticated } from "../../store";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const credential = { email, password };
  const setAuth = useSetRecoilState(authenticated);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      setErrors([]);
      let { data } = await axios.post("login", credential);
      localStorage.setItem("tokenUser", data.token);
      setAuth({
        check: true,
        user: data.data,
      });
      navigate("/");
    } catch (err) {
      setErrors(err.response.data.errors);
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
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
          <TextField
            error={errors.email && true}
            helperText={errors.email && errors.email[0]}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={errors.password && true}
            helperText={errors.password && errors.password[0]}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
            variant="contained"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2" component={RouterLink} to="/forgot">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" component={RouterLink} to="/register">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
