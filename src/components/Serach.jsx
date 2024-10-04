import Ball from "../assets/game.png";
const Search = () => {
  return (
    <div className="flex justify-center items-center">
      <input
        className="h-10 rounded-md text-[20px] font-Inter font-semibold px-2 mr-4 focus:outline-none"
        type="text"
      />
      <button>
        <img src={Ball} className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Search;
