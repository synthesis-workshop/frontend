import { useQuery } from "@apollo/client";
import cx from "classnames";
import React, { useMemo } from "react";
import greyBlur from "../../images/grey-blur.png";
import purpleBlur from "../../images/purple-blur.png";
import { GET_STATS } from "../../graphql";
import flaskBlue from "../../images/flask-blue.svg";
import { kFormat } from "../../utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Hero: React.FC = () => {
  const { data } = useQuery(GET_STATS);

  const stats = useMemo(
    () => [
      { label: "Videos", value: data?.meta?.videoCount ?? 0 },
      { label: "Total Views", value: data?.meta?.viewsCount ?? 0 },
      { label: "Featured Guests", value: data?.meta?.guestsCount ?? 0 },
      { label: "Subscribers", value: data?.meta?.subscriberCount ?? 0 },
    ],
    [data],
  );

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden absolute w-full h-full bg-primary">
        <img
          className="absolute h-[407px] lg:h-[398px] md:h-[347px] w-[248px] lg:w-[654px] md:w-[577px] bottom-0 -left-[100px]"
          src={purpleBlur}
          alt="left accent blur"
        />
        <img
          className="absolute h-[227px] md:h-[398px] w-[377px] md:w-[654px] -top-[33px] md:-top-[68px] -right-[128px] md:-right-[100px] -rotate-12"
          src={greyBlur}
          alt="right accent blur"
        />
      </div>

      <div className="flex flex-col items-center py-40 text-center relative z-10">
        <h1 className="flex flex-col text-white/60 text-4xl md:text-5xl font-medium font-title">
          Explore the art
          <div className="flex items-center justify-center gap-x-2 gap-y-1 flex-wrap">
            of <span className="text-white/90">organic</span>
            <img
              src={flaskBlue}
              alt="flask"
              className="h-9 w-5 md:h-10 md:w-6 object-contain"
            />
            <span className="text-white/90">synthesis</span>
          </div>
        </h1>

        <div className="text-white/80 font-text text-lg pt-6 max-w-[650px]">
          Synthesis Workshop started as a video podcast about organic synthesis
          and has grown into a broader collaborative educational initiative
        </div>

        <div
          className={cx(
            "flex flex-wrap gap-10 bg-white rounded-3xl w-[343px] max-w-smPageContent md:max-w-mdPageContent lg:max-w-lgPageContent xl:max-w-xlPageContent absolute -bottom-[188px] py-8 text-center justify-center shadow-2xl",
            "md:gap-20 md:w-11/12 md:-bottom-[80px] md:py-10",
          )}
        >
          {stats.map(({ label, value }) => (
            <div
              className="flex flex-col gap-1 w-[121px] md:w-auto"
              key={label}
            >
              <div className="text-primary text-3xl font-medium font-text">
                {showContent ? (
                  kFormat(value) + "+"
                ) : (
                  <Skeleton
                    height={39}
                    width={77}
                    containerClassName="flex-1"
                    baseColor="#FFF"
                    borderRadius={12}
                  />
                )}
              </div>
              <div className="text-primary/80 pt-3 font-text tracking-tight">
                {showContent ? (
                  label
                ) : (
                  <Skeleton
                    height={20}
                    width={120}
                    containerClassName="flex-1"
                    baseColor="#FFF"
                    borderRadius={12}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
