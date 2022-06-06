import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";

function Dashboard(props) {
  return (
    <Box sx={{ flexGrow: 1, mt:3, px:2 }}>
      <Grid container spacing={3}>
        <Grid item xs={10} md={8} lg={6}>
          <Card>
              <CardContent>
                  Dashboard
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
