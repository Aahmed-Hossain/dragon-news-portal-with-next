"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Header from "./Header";

const navItems = [
    {route:'Home', pathname:'/'},
    {route:'Pages', pathname:'/pages'},
    {route:'Category', pathname:'/categories/news?category=all-news'},
    {route:'Contact', pathname:'/contact'},
    {route:'News', pathname:'/news'},
    {route:'About', pathname:'/about'},
];

function Navbar() {
  return (
   <div className="w-11/12 mx-auto" >
   <Header></Header>
    <AppBar position="static"  sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={200} height={100} alt="logo" ></Image>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname} >
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction='row' sx={{"& svg": {color:"white"}}}>
            <IconButton>
              <FacebookIcon/>
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </div>
  );
}
export default Navbar;
