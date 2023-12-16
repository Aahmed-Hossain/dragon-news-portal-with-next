import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/headerLogo.png'
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate();
    return (
       <Box>
        <Container>
            <Image alt='logo' src={logo} width={500} height={100} className=" mx-auto"/>
            <Typography variant="body2" color="gray" textAlign="center" className='my-2'>---Journalism Without Fear or Favour---</Typography>
            <Typography  textAlign="center" className='my-2'>{currentDate}</Typography>
        </Container>
       </Box>
    );
};

export default Header;