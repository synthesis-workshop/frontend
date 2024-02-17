import { useQuery } from "@apollo/client";
import cx from "classnames";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { OrderDirection } from "../../__generated__/graphql";
import { Button, EpisodeCard, Loading } from "../../components";
import Menu from "../../components/drop-down-menu/drop-down-menu";
import { GET_EPISODES } from "../../graphql";
import { SearchBar } from "../../components/form/search-bar";
import { useForm } from "react-hook-form";
import youtubeIcon from "../../images/image 10.svg";

const CategoryList = [
  {
    name: "All",
    value: [
      "Research Spotlight",
      "Total Synthesis",
      "Named Reaction",
      "Culture of Chemistry",
    ],
  },
  { name: "Research Spotlight", value: ["Research Spotlight"] },
  { name: "Total Synthesis", value: ["Total Synthesis"] },
  { name: "Named Reaction", value: ["Named Reaction"] },
  { name: "Culture of Chemistry", value: ["Culture of Chemistry"] },
];

const SortList = [
  { name: "Date added ascending", value: [OrderDirection.Asc] },
  { name: "Date added descending", value: [OrderDirection.Desc] },
];

export const EpisodesSection = () => {
  const [category, setCategory] = useState<string[]>(CategoryList[0].value);
  const [sorting, setSorting] = useState<OrderDirection[]>(SortList[0].value);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSearch = handleSubmit((data) => {
    navigate(`/episodes?search=${encodeURIComponent(data.searchInput)}`);
  });

  const changeCategory = (newState: string[]) => {
    setCategory(newState);
  };

  const changeSort = (newState: OrderDirection[]) => {
    setSorting(newState);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const { loading, data } = useQuery(GET_EPISODES, {
    variables: {
      orderBy: [
        {
          publishedAt: sorting[0],
        },
      ],
      where: {
        category: {
          in: category,
        },
        status: {
          equals: "published",
        },
      },
      take: isTabletOrMobile ? 3 : 6,
    },
  });

  return (
    <div className="flex flex-col w-full sm:max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
      <div
        className={cx(
          "w-full flex flex-col justify-between items-center pb-8 gap-5",
          "md:flex-row md:items-start md:gap-0",
        )}
      >
        <h2 className="font-title text-primary text-3xl">
          Explore our episodes
        </h2>
        <div className="font-text flex flex-col md:flex-row gap-4">
          <Menu
            title={"Category"}
            list={CategoryList}
            changeMenu={changeCategory}
          />
          <Menu title={"Sort"} list={SortList} changeMenu={changeSort} />
        </div>
      </div>

      {/* Episodes grid or loading state */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3 lg:gap-5 auto-rows-[360px]">
            {data?.episodes?.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
          <div className="mt-10 mx-auto mb-24">
            <Link to="/episodes">
              <Button>Show All Episodes</Button>
            </Link>
          </div>
        </>
      )}

      {/* Follow us on YouTube banner */}
      <div className="w-full mb-8 bg-primary rounded-xl flex items-center justify-between gap-4 p-8 md:p-16">
        <div className="flex gap-4 text-white/60 font-title text-2xl md:text-[32px] font-normal md:flex-row flex-col md:gap-2">
          Follow us on
          <a
            className="text-white"
            href="https://www.youtube.com/c/SynthesisWorkshopVideos"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <a
          href="https://www.youtube.com/c/SynthesisWorkshopVideos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={youtubeIcon}
            alt="YouTube"
            style={{ height: "35px", width: "auto" }}
          />
        </a>
      </div>

      {/* Search section */}
      <div className="w-full flex justify-center">
        <div className="bg-white rounded-xl flex flex-col items-center justify-center w-full py-10">
          {/* Title container */}
          <div
            className="w-full flex justify-center items-center px-4"
            style={{ marginBottom: "40px" }}
          >
            <h1
              className="font-title text-primary text-3xl text-center"
              style={{ width: "452px" }}
            >
              Search for any organic chemistry related topic
            </h1>
          </div>

          {/* Search form */}
          <div className="w-full px-4 flex justify-center items-center max-w-[794px]">
            <form
              onSubmit={handleSearch}
              className="w-full flex flex-col md:flex-row items-center justify-center gap-5"
            >
              <SearchBar
                className="w-full md:w-4/5 rounded-lg border-2 border-formBorder p-3"
                placeholder="Search for any topic"
                inputId="searchInput"
                ariaLabel="Search for episodes"
                name="searchInput"
                register={register}
                rules={{}}
              />
              <Button
                type="submit"
                className="w-full md:w-auto rounded-lg border-2 border-formBorder p-3 md:px-8"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
