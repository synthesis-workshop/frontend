import { useQuery } from "@apollo/client";
import cx from "classnames";
import React, { useMemo } from "react";
import greyBlur from "../../images/grey-blur.png";
import purpleBlur from "../../images/purple-blur.png";
import { Loading } from "../../components";
import { GET_STATS } from "../../graphql";
import flaskBlue from "../../images/flask-blue.svg";
import { kFormat } from "../../utils";

export const Hero: React.FC = () => {
  const { loading, data } = useQuery(GET_STATS);

  const stats = useMemo(
    () => [
      { label: "Videos", value: data?.meta?.videoCount ?? 0 },
      { label: "Total Views", value: data?.meta?.viewsCount ?? 0 },
      { label: "Featured Guests", value: data?.meta?.guestsCount ?? 0 },
      { label: "Subscribers", value: data?.meta?.subscriberCount ?? 0 },
    ],
    [data],
  );

  return (
    <div className="relative w-screen">
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

      <div className="flex flex-col items-center py-[152px] text-center mx-4 relative z-10">
        <h1 className="flex flex-col text-white/60 text-4xl md:text-5xl font-medium font-title">
          Explore the art
          <div className="flex items-center gap-2">
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
          Synthesis Workshop was started as a series of YouTube podcasts on
          organic chemistry and is growing into an educational online project
        </div>

        <div
          className={cx(
            "flex flex-wrap gap-10 bg-white rounded-3xl w-[343px] max-w-[1280px] absolute -bottom-[188px] py-8 text-center justify-center shadow-2xl",
            "md:gap-20 md:w-11/12 md:-bottom-[80px] md:py-10",
          )}
        >
          {loading ? (
            <Loading />
          ) : (
            stats.map(({ label, value }) => (
              <div
                className="flex flex-col gap-1 w-[121px] md:w-auto"
                key={label}
              >
                <div className="text-primary text-3xl font-medium font-text">
                  {kFormat(value)}+
                </div>
                <div className="text-primary/80 pt-3 font-text tracking-tight">
                  {label}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
