import { Container, Grid, Typography, Item } from "@mui/material";

const CurrentWeek = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom component="div">
        Current week
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" gutterBottom component="div">
            Tuesday
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Breakfast
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Second breakfast
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Lunch
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Dinner
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" gutterBottom component="div">
            Wednesday
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CurrentWeek;
