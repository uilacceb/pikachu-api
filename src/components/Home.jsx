import Display from "./Display";
import SearchSection from "./SearchSection";

const Home = () => {
  return (
    <div className="flex flex-row  h-full">
      <SearchSection />
      <Display />
    </div>
  );
};

export default Home;
