import { PosterCard } from "../../components/poster-card";
import { GET_POSTERS } from "../../graphql/posters";
import { useQuery } from "@apollo/client";
import { ExpandableSection } from "../../components/expandable-section";

export const PosterSection = () => {
  const { loading, error, data } = useQuery(GET_POSTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="py-10 mx-10 max-[375px]:px-4 max-[768px]:mx-4">
        <div className="bg-primary px-8 pt-10 pb-[12px] rounded-t-xl m-0 max-[768px]:px-4">
          <div className="text-white max-w-[765px] flex flex-col  m-auto gap-y-5 max-md:w-full md:text-center ">
            <h2 className="text-[32px] ">Organic Chemistry Posters</h2>
            <p className="text-[16px] ">
              If you are interested in sharing your published work in the form
              of a virtual research poster, feel free to reach out via
              synthesisworkshopvideos2gmail,com and download the template.
            </p>
          </div>
        </div>
        <ExpandableSection
          preview={data?.posters
            .slice(0, 2)
            .map((poster) => (
              <PosterCard
                key={poster.id}
                attribution={poster.attribution}
                className={"poster__card"}
                file={poster.file.url}
                image={poster.image.url}
                title={poster.title}
              />
            ))}
          className="gap-[32px] grid grid-cols-2 max-md:grid-cols-1 max-[768px]:px-4"
        >
          {data.posters.slice(2).map((poster) => (
            <PosterCard
              key={poster.id}
              attribution={poster.attribution}
              className={"poster__card"}
              file={poster.file.url}
              image={poster.image.url}
              title={poster.title}
            />
          ))}
        </ExpandableSection>
      </section>
    </>
  );
};

/*  */
