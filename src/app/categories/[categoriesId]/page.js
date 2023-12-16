import { getCategoryNews } from "@/utils/getCategoryNews";
import Link from "next/link";


const DynamicCategory = async({params, searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category)
    return (
        <div >
            <h1 className="text-center font-semibold text-blue-600">Total <span className="font-bold text-xl">{searchParams.category}</span> news {data.length}</h1>
        <div className="grid grid-cols-3  gap-4 ">
            {
                data.map(news=>(
                    <Link 
                     key={news.id} 
                     href={`/${news.category.toLowerCase()}/${news._id}`}
                     className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover w-full h-56" src={news.thumbnail_url} alt="avatar"/>

    <div class="py-5 px-2">
        <h3 href="#" class="block text-md font-semibold text-gray-800 dark:text-white" tabindex="0" role="link">{news.title}</h3>
        <span class="text-s text-gray-700 dark:text-gray-200">{news.author.name}</span> <br/>
        <span class="text-sm text-gray-700 dark:text-gray-200">{news.details.slice(0,200)}...</span>
    </div>
</Link>
                ))
            }
        </div>
        </div>
    );
};

export default DynamicCategory;