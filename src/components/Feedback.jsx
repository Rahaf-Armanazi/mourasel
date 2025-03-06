import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

const Feedback = () => {
    const feedbacks = [
        { name: "John Doe", comment: "Amazing service!" },
        { name: "Jane Smith", comment: "Highly recommend this product." },
    ];

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Customer Feedback
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {feedbacks.map((feedback, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{feedback.name}</Typography>
                                <Typography>{feedback.comment}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Feedback;
