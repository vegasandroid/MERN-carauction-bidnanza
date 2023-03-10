import React from 'react';
import logo1 from './images/1.webp';
import logo2 from './images/2.webp';
import logo3 from './images/3.webp';
import logo4 from './images/4.webp';
import logo5 from './images/2.webp';
import logo6 from './images/3.webp';
import logo7 from './images/4.webp';
import logo8 from './images/2.webp';
import logo9 from './images/1.webp';
import logo10 from './images/2.webp';
import logo11 from './images/3.webp';
import logo12 from './images/4.webp';
import logo13 from './images/2.webp';
import logo14 from './images/3.webp';
import logo15 from './images/4.webp';
import logo16 from './images/2.webp';
import { Typography, Divider, Box } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import CarCardVertical from "../CarCardVertical";
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import SearchBox from "../SearchBox/SearchBox";
import BrandSection from '../BrandSection';

export default function AliveAuctionsPanel() {

    const fadeImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
                    logo9, logo10, logo11, logo12, logo13, logo14, logo15 ];

    return (
        <Box
            sx={{ backgroundColor: 'white' }}
            className="ps-10 pe-10 pt-8 pb-8" >
            <div className="section-title center-block text-center"> 
                <h2>Alive Auctions</h2> 
            </div>


            {/* <BrandSection /> */}

            <MDBContainer>
                <MDBRow>
                    {
                        fadeImages.map((sliderImg) =>
                            <CarCardVertical
                                title="4,900-Mile 2008 Ferrari 430 Scuderia"
                                date="2/7/2023"
                                price="$75,000"
                                imgUrl={sliderImg}
                                imageLink="#" />

                        )
                    }
                </MDBRow>
            </MDBContainer>
        </Box>
    );
}