import LatestNews from "@/components/ui/LatestNews/LatestNews";

const Home = () => {
  return (
    <>
      <div className="flex w-11/12 mx-auto">
        <div className="w-8/12">
          <LatestNews></LatestNews>
        </div>
        <div className="w-4/12">
          <h1>side bar</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
