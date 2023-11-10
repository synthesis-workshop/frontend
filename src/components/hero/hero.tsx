import cx from "classnames";
import React from "react";

import flaskURL from "../../assets/flask1-blue.png";

export interface HeroProps {
  className?: string;  
  videoCount: string;
  viewsCount: string;
  guestsCount: string;
  subCount: string;
  
}

export const Hero: React.FC<HeroProps> = ({
  className,
    
    videoCount,
    viewsCount,
    guestsCount,
    subCount, 
   

}) => {
  return (
    <div className={cx("flex flex-col bg-primary relative w-full", className)}>
        <div className="flex flex-col gap-1 py-20 items-center">
            <div className="flex flex-col text-white/60 text-5xl text-center font-medium font-title -tracking-2 max-w-xl">
                <div>
                    <p>Explore the art</p>
                </div>
                <div className="flex">
                    <p className="pr-2">of</p>
                    <p className="text-white/90">organic</p> 
                    <img src={flaskURL} alt="flask" className="object-contain p-2" /> 
                    <p className="text-white/90">synthesis</p>
                </div>
            </div>
            <div className="text-white/80 font-normal text-center font-text text-lg pt-10 pt-20 max-w-2xl">Synthesis Workshop was started as a series of YouTube podcasts on organic chemistry and is growing into an educational online project</div>
        </div>
        <div className="">
            <div className="flex flex-row gap-8 bg-white rounded-3xl absolute -bottom-20 py-8 px-10">
                <div className="flex flex-col gap-1">
                    <div className="text- text-3xl font-medium font-text">{videoCount}</div>
                    <div className="text-primary/80 pt-3 font-text">Videos</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-primary text-3xl font-medium font-text">{viewsCount}</div>
                    <div className="text-primary/80 pt-3  font-text">Views</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-primary text-3xl font-medium font-text">{guestsCount}</div>
                    <div className="text-primary/80 pt-3 font-text">Guests</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-primary text-3xl font-medium font-text">{subCount}</div>
                    <div className="text-primary/80 pt-3 font-text ">Subscribers</div>
                </div>
            </div>
        </div>
    </div>
  );
};
