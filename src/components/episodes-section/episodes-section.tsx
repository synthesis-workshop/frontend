// import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Card {
  name: string;
}

interface EpisodesSection {
  card: Card;
}

// get cards and slice it to first 6 on big screens and to first 3 on mobile

const numbers = [1, 2, 3, 4, 5, 6];

const EpisodesSection = () => {
  return (
    <div className={`flex flex-col w-1202px h-899px bg-whitegrey`}>
      {/* title and dropdowns */}
      <div className="flex flex-row justify-between pb-32px">
        {/* title */}
        <div>
          <p className="f-title">Explore our episodes</p>
        </div>
        {/* dropdowns */}
        <div className="flex flex-row justify-end f-text h-35px w-410px">
          <button className="w-148px h-35px">Category:All</button>
          <button className="w-246px h-35px">Sort:Date added ascending</button>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-row flex-wrap content-center items-center gap-20px">
        {numbers.map((card) => {
          return <div className="w-387px h-360px bg-primary">{card}</div>;
        })}
      </div>
      {/* button */}
      <div className="flex justify-center pt-40px">
        <Link to="/episodes">
          <button className="border-2 border-primary rounded-lg w-222px h-52px">
            Show All Episodes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EpisodesSection;
