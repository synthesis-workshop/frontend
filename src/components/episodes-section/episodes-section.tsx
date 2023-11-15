import { useEffect, useState, type PropsWithChildren } from "react";
// import {useWindowDimensions} from 'react-native';
// import {Dimensions} from 'react';
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

interface EpisodesSection {
  card: number[];
}

// cards should be array of [Card Object]
// get cards and slice it to first 6 on big screens and to first 3 on mobile

const EpisodesSection = (props: PropsWithChildren<EpisodesSection>) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const [cardsArray, setCardsArray] = useState([]);
  useEffect(() => {
    props.card.length > 3
      ? setCardsArray(props.card.slice(0, 3).map((card) => card))
      : setCardsArray(props.card);
  }, [props.card]);

  return (
    <div className={`flex flex-col items-center bg-whitegrey`}>
      {/* title and dropdowns */}
      <div
        className={`flex flex-col md:gap-12px md:w-728px md:flex-row lg:w-944px xl:w-1202px justify-between items-center pb-32px`}
      >
        <div>
          <p className="md:w-282px font-title text-3xl w-343px h-35px">
            Explore our episodes
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-base items-center font-text">
          {/* <div></div> */}
          <button className="w-343px md:w-148px text-base h-35px font-text">
            Category: All
          </button>
          <button className="w-343px md:w-246px font-text text-base h-35px">
            Sort: Date added ascending
          </button>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-row flex-wrap justify-center gap-20px">
        {isTabletOrMobile
          ? cardsArray.map((card) => {
              return (
                <div className="h-360px sm:w-343px md:w-358px lg:w-301px xl:w-387px rounded-xl bg-primary text-white">
                  {card}
                </div>
              );
            })
          : props.card.map((card) => {
              return (
                <div className="h-360px sm:w-343px md:w-358px lg:w-301px xl:w-387px rounded-xl bg-primary text-white">
                  {card}
                </div>
              );
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
