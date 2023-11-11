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
    <div className={cx("flex flex-col bg-primary relative", className)}>
        <div className="flex flex-col items-center pt-[152px] text-center mx-10">
        <div className="w-[577px] h-[347px] bg-gradient-to-b from-#4A506F via-#4A506F to-transparent absolute"></div>
            <div className="flex flex-col text-white/60 text-5xl font-medium font-title">
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
            <div className="text-white/80 font-normal font-text text-lg pt-[25px] max-w-[650px]">Synthesis Workshop was started as a series of YouTube podcasts on organic chemistry and is growing into an educational online project</div>
            <div className="flex gap-20 bg-yellow rounded-3xl transform translate-y-1/2 py-8 text-center justify-center w-full">
                <div className="flex flex-col gap-1">
                    <div className="text- text-3xl font-medium font-text">{videoCount}</div>
                    <div className="text-primary/80 pt-3 font-text">Videos</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-primary text-3xl font-medium font-text">{viewsCount}</div>
                    <div className="text-primary/80 pt-3  font-text">Todal Views</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-primary text-3xl font-medium font-text">{guestsCount}</div>
                    <div className="text-primary/80 pt-3 font-text">Featured Guests</div>
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
