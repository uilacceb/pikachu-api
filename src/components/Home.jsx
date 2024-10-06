import DisplaySection from "./DisplaySection";
import SearchSection from "./SearchSection";

const Home = () => {
  return (
    <div className="lg:flex lg:flex-row lg:h-full flex flex-col">
      <SearchSection />
      <DisplaySection />
    </div>
  );
};

export default Home;
