import React from "react";
import { PosterCard } from "../../components/poster-card";
import { GET_POSTERS } from "../../graphql/posters";
import { useQuery } from "@apollo/client";
import { ExpandableSection } from "../../components/expandable-section";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PosterSection = () => {
  const { data } = useQuery(GET_POSTERS);

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <section className="mx-10 max-[375px]:px-4 max-[768px]:mx-4">
        <div
          className="bg-primary px-8 pt-10 pb-[12px] rounded-t-xl m-0 max-[768px]:px-4"
          id="posters"
        >
          <div className="text-white max-w-[765px] flex flex-col  m-auto gap-y-5 max-md:w-full md:text-center ">
            <h2 className="text-[32px] ">Organic Chemistry Posters</h2>
            <p className="text-[16px] ">
              If you are interested in sharing your published work in the form
              of a virtual research poster, feel free to reach out via{" "}
              <a href="mailto:synthesisworkshopvideos@gmail.com">
                synthesisworkshopvideos@gmail.com
              </a>{" "}
              and download the template.
            </p>
          </div>
        </div>
        {showContent ? (
          data?.posters && data.posters.length > 0 ? (
            <ExpandableSection
              variant="dark"
              expandText="More Posters"
              collapseText="Fewer Posters"
              preview={data.posters.slice(0, 2).map((poster) => (
                <PosterCard key={poster.id} {...poster} />
              ))}
              className="gap-[32px] grid grid-cols-2 max-md:grid-cols-1 max-[768px]:px-4 rounded-t-none"
            >
              {data.posters.length > 2 &&
                data.posters
                  .slice(2)
                  .map((poster) => <PosterCard key={poster.id} {...poster} />)}
            </ExpandableSection>
          ) : null
        ) : (
          <Skeleton height={316} borderRadius={12} />
        )}
      </section>
    </>
  );
};
