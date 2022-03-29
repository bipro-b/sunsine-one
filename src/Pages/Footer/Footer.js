import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import "./Footer.css"

const Footer = () => {
    return (

        <Box>
            <Container sx={{ bgcolor: 'secondary.main', marginTop: '30px' }} >
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <h2>Ed-Tech </h2>
                        <p>Take better service.</p>
                        authority©. ALl rights reseves.
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <h2>Our Services</h2>
                        <ul style={{ textAlign: 'left' }}>
                            <li>Sedan</li>
                            <li>Sports Car</li>
                            <li>BMW</li>
                            <li>Convertible</li>
                            <li>Station Wagon</li>
                        </ul>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <h3>Contact with us</h3>
                        <p> Email:b@yahoo.com</p>
                        <p> Phone number: 8989-7878-9090</p>
                        <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly">
                            <i class="fab fa-facebook"></i>
                            <i class="fas fa-envelope-open-text"></i>
                            <i class="fas fa-phone-volume"></i>
                        </div>
                    </Grid>


                </Grid>
            </Container>
        </Box >


    );
};

export default Footer;