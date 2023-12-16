const { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Grid } = require("@mui/material")
import latestNews from '../../../assets/latestNews.png'
import latestNews1 from '../../../assets/Rectangle 9.png'
import latestNews2 from '../../../assets/Rectangle 10.png'
import latestNews3 from '../../../assets/Rectangle 11.png'
import latestNews4 from '../../../assets/Rectangle 12.png'
import Image from 'next/image'

const LatestNews = () => {

    return (
       <Box className="mt-4">
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


    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid 
   item xs={6}>
   <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={1000} height={750} src={latestNews1} alt='latest'/>
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
  </Grid>
  <Grid
   item xs={6}>
   <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={1000} height={750} src={latestNews2} alt='latest'/>
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
  </Grid>
  <Grid
   item xs={6}>
   <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={1000} height={750} src={latestNews3} alt='latest'/>
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
  </Grid>
  <Grid
   item xs={6}>
   <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={1000} height={750} src={latestNews4} alt='latest'/>
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
  </Grid>
</Grid>






       </Box>
    );
};

export default LatestNews;