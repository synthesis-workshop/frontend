import cx from "classnames";
import React from "react";

import flaskURL from "../../assets/flask1-blue.png";
import purpleBlur from "../../assets/purple-blur.png";
import greyBlur from "../../assets/grey-blur.png";

export interface HeroProps {
  className?: string;  
  videoCount: number;
  viewsCount: number;
  guestsCount: number;
  subscriberCount: number;
  
}

export const Hero: React.FC<HeroProps> = ({
  className,
  videoCount,
  viewsCount,
  guestsCount,
  subscriberCount, 
}) => {

    const formatNumber = (number) => {
        if (number >= 1000) {
          return (number / 1000).toFixed(1) + "K";
        } else {
          return number.toString();
        }
      };    

  return (
    <div className={cx("flex flex-col bg-primary relative w-screen", className)}>
        <div className="flex flex-col items-center pt-[152px] text-center mx-4 md:mx-10">
            <img className="absolute h-[407px] lg:h-[398px] md:h-[347px] w-[248px] lg:w-[654px] md:w-[577px] -bottom-[68px] -left-[100px]  " src={purpleBlur} alt="" />
            <img className="absolute h-[227px] md:h-[398px] w-[377px] md:w-[654px] -top-[33px] md:-top-[68px] -right-[128px] md:-right-[100px] md:-right-[150px] -rotate-12" src={greyBlur} alt="" />
            <div className="flex flex-col text-white/60 text-4xl md:text-5xl font-medium font-title">
                <div>
                    <p>Explore the art</p>
                </div>
                <div className="flex">
                    <p className="pr-2">of</p>
                    <p className="text-white/90">organic</p> 
                    <img src={flaskURL} alt="flask" className="h-[36px] md:h-[43px] w-[20px] md:w-[24px] mx-2 object-contain" /> 
                    <p className="text-white/90">synthesis</p>
                </div>
            </div>
            <div className="text-white/80 font-text text-lg pt-[25px] max-w-[650px] pb-[131px]">Synthesis Workshop was started as a series of YouTube podcasts on organic chemistry and is growing into an educational online project</div>
            <div className="flex flex-wrap gap-10 md:gap-20 bg-white rounded-3xl w-[343px] md:w-11/12 absolute -bottom-[220px] md:-bottom-[80px] py-8 md:py-10 text-center justify-center">
                <div className="flex flex-col gap-1 w-[121px] md:w-auto">
                    <div className="text-primary text-3xl font-medium font-text">{formatNumber(videoCount)}+</div>
                    <div className="text-primary/80 pt-3 font-text">Videos</div>
                </div>
                <div className="flex flex-col gap-1 w-[121px] md:w-auto">
                    <div className="text-primary text-3xl font-medium font-text">{formatNumber(viewsCount)}+</div>
                    <div className="text-primary/80 pt-3  font-text">Total Views</div>
                </div>
                <div className="flex flex-col gap-1 w-[121px] md:w-auto">
                    <div className="text-primary text-3xl font-medium font-text">{formatNumber(guestsCount)}+</div>
                    <div className="text-primary/80 pt-3 font-text">Featured Guests</div>
                </div>
                <div className="flex flex-col gap-1 w-[121px] md:w-auto">
                    <div className="text-primary text-3xl font-medium font-text">{formatNumber(subscriberCount)}+</div>
                    <div className="text-primary/80 pt-3 font-text ">Subscribers</div>
                </div>
            </div>
            
        </div>
    </div>
  );
};
