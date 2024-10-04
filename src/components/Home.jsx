import DisplaySection from "./DisplaySection";
import SearchSection from "./SearchSection";

const Home = () => {
  return (
    <div className="flex flex-row  h-full">
      <SearchSection />
      <DisplaySection />
    </div>
  );
};

export default Home;
