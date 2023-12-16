import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import latestNews from '../../../assets/Rectangle 11.png'
import { Image } from 'next/image';

const Sidebar = () => {
    return (
        <Box className="mt-4 mx-1">
            <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={1000} height={750} src={latestNews} alt='latest'/>
        </CardMedia>
        <CardContent>
          <span className="bg-[#FF0000] px-3 py-2 rounded-md text-white my-4 font-semibold" >Technology</span>
          <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography >
            By GutterBottom variant
          </Typography>
          <Typography variant="body2" color="text.secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography variant="body2" color="text.secondary">By Awlad Hossain - Mar 18 2023</Typography>



{/* 
          <Card sx={{ display: 'flex' , marginTop: '10px' }}>
          <Image src={img} alt="img" width={100} height={50}></Image>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it 
          </Typography>
          <Typography  color="text.secondary" component="div">
          Mar 18 2023
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
          <Card sx={{ display: 'flex' , marginTop: '10px' }}>
          <Image src={img} alt="img" width={100} height={50}></Image>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it 
          </Typography>
          <Typography  color="text.secondary" component="div">
          Mar 18 2023
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
          <Card sx={{ display: 'flex' , marginTop: '10px' }}>
          <Image src={img} alt="img" width={100} height={50}></Image>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it 
          </Typography>
          <Typography  color="text.secondary" component="div">
          Mar 18 2023
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
          <Card sx={{ display: 'flex' , marginTop: '10px' }}>
          <Image src={img} alt="img" width={100} height={50}></Image>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it 
          </Typography>
          <Typography  color="text.secondary" component="div">
          Mar 18 2023
          </Typography>
        </CardContent>
        
      </Box>
    </Card> */}
        </Box>
    );
};

export default Sidebar;