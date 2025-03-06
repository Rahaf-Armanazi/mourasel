import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

const Pricing = () => {
    const plans = [
        { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },
        { name: "Pro", price: "$20/month", features: ["Feature 1", "Feature 2", "Feature 3"] },
        { name: "Enterprise", price: "Contact Us", features: ["All Features", "Premium Support"] },
    ];

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Pricing Plans
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {plans.map((plan, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{plan.name}</Typography>
                                <Typography variant="h5">{plan.price}</Typography>
                                <ul>
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Pricing;
