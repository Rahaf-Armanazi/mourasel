import { Grid, Card, CardContent, Typography } from "@mui/material";

const Features = ({ limit }) => {
  const features = Array(limit).fill("Feature");

  return (
    <Grid container spacing={2}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{feature} {index + 1}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
