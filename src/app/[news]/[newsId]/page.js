import { getSingleNews } from "@/utils/getSingleNews";

const NewsDetails = async({params}) => {
    const {data} = await getSingleNews(params.newsId)
    return (
        <div className="w-11/12 mx-auto flex">
            {/* left side for image */}
            <div className="w-1/2"> 
            <img className="object-cover w-full h-ful" src={data.thumbnail_url} alt="avatar"/>
            <div className="grid grid-cols-2 gap-2 mt-2 ">
            <img className="object-cover w-full h-ful" src={data.image_url} alt="avatar"/>
            <img className="object-cover w-full h-ful" src={data.thumbnail_url} alt="avatar"/>
            </div>
            </div>
            {/* rigth side for details */}
            <div className="w-1/2 ml-2">
<h1 className="text-3xl font-extrabold">{data.title}</h1>
<div className="flex text-gray-600">
<img className="h-16 w-16 rounded-full" src={data.author.img} alt="avatar"/>
    <div className=" flex gap-2"> <p>By {data.author.name}</p> <span>--{data.author.published_date}</span></div>
     </div>
     <p className="whitespace-pre-line text-justify">{data.details}</p>
     <h1 className="text-2xl font-bold mt-2 text-justify">``Many desktop publishing packages and web page editors now use as their default model text!</h1>
     <p className="text-gray-500 mt-1">-- Awlad Hossain</p>
            </div>
            
        </div>
    );
};

export default NewsDetails;