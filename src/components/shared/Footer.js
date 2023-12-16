import { Box, Button, Container, IconButton, Typography } from "@mui/material";


// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const navItems = [
    {route:'Home', pathname:'/'},
    {route:'Pages', pathname:'/pages'},
    {route:'Category', pathname:'/category'},
    {route:'Contact', pathname:'/contact'},
    {route:'News', pathname:'/news'},
    {route:'About', pathname:'/about'},
];
const Footer = () => {
    return (
        <Box className="bg-black px-3 py-10">
            <Container>
            <Box className="w-full text-center py-2" sx={{"& svg": {color:"white"}}}>
           
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
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname} >
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">@2023 Dragon News. Design by Programming Hero</Typography>
            </Container>

            
        </Box>
    );
};

export default Footer;