import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async() => {
  const {data} =await getAllNews();
  // console.log(data);
    return (

<div className="min-h-screen
">
<img className="object-cover w-full h-80 rounded mb-2" src={data[0].thumbnail_url} alt="avatar"/>
<span className="p-2 mt-2 text-white bg-[#FF0000] rounded">{data[0].category}</span>
<h1 className="font-bold text-2xl mt-2 ">{data[0].title}</h1>
<div className="text-gray-600 flex gap-2">
<h1 >By {data[0].author.name}</h1> <p> --{data[0].author.published_date}</p>
</div>
<h1 className="text-gray-500 mt-2">{data[0].details.slice(0,200)}...</h1>
<div className="grid grid-cols-2 gap-2">
{
  data.slice(0,4).map(news=>(
    <div key={news.id}>
    <img className="object-cover w-full h-80 rounded mb-2" src={news.thumbnail_url} alt="avatar"/>
<span className="p-2 mt-2 text-white bg-[#FF0000] rounded">{news.category}</span>
<h1 className="font-bold text-2xl mt-2 ">{news.title}</h1>
<div className="text-gray-600 flex gap-2">
<h1 >By {news.author.name}</h1> <p> --{news.author.published_date}</p>
</div>
<h1 className="text-gray-500 mt-2">{news.details.slice(0,200)}...</h1>
    </div>
  ))
}
</div>
</div>









//        <Box className="mt-4">
//          <Card>
//       <CardActionArea>
//         <CardMedia>
//             <Image width={1000} height={750} src={latestNews} alt='latest'/>
//         </CardMedia>
//         <CardContent>
//           <span className="bg-[#FF0000] px-3 py-2 rounded-md text-white my-4 font-semibold" >Technology</span>
//           <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
//           Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
//           </Typography>
//           <Typography >
//             By GutterBottom variant
//           </Typography>
//           <Typography variant="body2" color="text.secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>


//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//   <Grid 
//    item xs={6}>
//    <Card>
//       <CardActionArea>
//         <CardMedia>
//             <Image width={1000} height={750} src={latestNews1} alt='latest'/>
//         </CardMedia>
//         <CardContent>
//           <span className="bg-[#FF0000] px-3 py-2 rounded-md text-white my-4 font-semibold" >Technology</span>
//           <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
//           Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
//           </Typography>
//           <Typography >
//             By GutterBottom variant
//           </Typography>
//           <Typography variant="body2" color="text.secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   </Grid>
//   <Grid
//    item xs={6}>
//    <Card>
//       <CardActionArea>
//         <CardMedia>
//             <Image width={1000} height={750} src={latestNews2} alt='latest'/>
//         </CardMedia>
//         <CardContent>
//           <span className="bg-[#FF0000] px-3 py-2 rounded-md text-white my-4 font-semibold" >Technology</span>
//           <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
//           Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
//           </Typography>
//           <Typography >
//             By GutterBottom variant
//           </Typography>
//           <Typography variant="body2" color="text.secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   </Grid>
//   <Grid
//    item xs={6}>
//    <Card>
//       <CardActionArea>
//         <CardMedia>
//             <Image width={1000} height={750} src={latestNews3} alt='latest'/>
//         </CardMedia>
//         <CardContent>
//           <span className="bg-[#FF0000] px-3 py-2 rounded-md text-white my-4 font-semibold" >Technology</span>
//           <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
//           Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
//           </Typography>
//           <Typography >
//             By GutterBottom variant
//           </Typography>
//           <Typography variant="body2" color="text.secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   </Grid>
//   <Grid
//    item xs={6}>
//    <Card>
//       <CardActionArea>
//         <CardMedia>
//             <Image width={1000} height={750} src={latestNews4} alt='latest'/>
//         </CardMedia>
//         <CardContent>
//           <span className="bg-[#FF0000] px-3 py-2 rounded-md text-white my-4 font-semibold" >Technology</span>
//           <Typography gutterBottom variant="h5" className="font-extrabold mt-4" component="div">
//           Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
//           </Typography>
//           <Typography >
//             By GutterBottom variant
//           </Typography>
//           <Typography variant="body2" color="text.secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   </Grid>
// </Grid>
//        </Box>
    );
};

export default LatestNews;