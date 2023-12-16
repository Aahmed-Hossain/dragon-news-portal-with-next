
import Link from "next/link";
import { getCategory } from "./../../../utils/getCategory";

const CategoryList = async () => {
  const { data: categories } = await getCategory();
  return (
    <div className="min-h-screen">
     <div className="bg-gray-200 px-2 py-4">
     <h1 className="text-lg font-semibold mb-3 border-b-2 border-blue-400">Category</h1>
      <div className="grid grid-rows-1 border-2 border-b-0 border-blue-400">
        {categories.map((category) => (
          <button key={category._id}
          className="border-b-2  p-2 font-semibold border-blue-400 "
          >
            <Link href={`news?category=${category.title.toLowerCase()}`}>
            {category.title}</Link>
          </button>
        ))}
      </div>
     </div>
    </div>
  );
};

export default CategoryList;
