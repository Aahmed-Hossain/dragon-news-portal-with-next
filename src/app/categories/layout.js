import CategoryList from "@/components/ui/CategoryList/CategoryList";

const CategoryLayout = ({children}) => {
    return (
        <>
      <div className="flex w-11/12 mx-auto">
        <div className="w-2/12">
          <CategoryList></CategoryList>
        </div>
        <div className="w-10/12 ">
        {children}
        </div>
      </div>
    </>
    );
};

export default CategoryLayout;