import Display from "./Display";
import Search from "./Search";

const Home = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <Search />

      <Display />
    </div>
  );
};

export default Home;
