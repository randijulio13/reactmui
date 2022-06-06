import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Forgot(props) {
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try{
        await axios.post("forgot", { email });
    }catch(err){

    }
  };

  return (
    <div>
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
          <Typography variant="h5">Send Reset Password Link</Typography>
          <Box
            component="form"
            onSubmit={submit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              label="Email Address"
              fullWidth
              required
              margin="normal"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
              Send Reset Password Link
            </Button>
            <Link
              component={RouterLink}
              variant="body2"
              to="/login"
              sx={{ alignSelf: "center" }}
            >
              Go Back
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Forgot;
