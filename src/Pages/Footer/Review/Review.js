import React from 'react';
import { Container, Grid } from '@mui/material';

const Review = () => {
    return (
        <Container>

            <Grid sx={{ textAlign: 'left' }} item sm={12} md={4}>
                <h3>Customer reviews</h3>

                <p>
                    Services of this compnay is facilatedd us.
                    I motivate to other to buy car from here
                </p>


            </Grid>
        </Container>
    );
};

export default Review;