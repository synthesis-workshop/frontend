import { useQuery } from "@apollo/client";
import cx from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { OrderDirection } from "../../__generated__/graphql";
import { Form, Button, EpisodeCard, Loading } from "../../components";
import Menu from "../../components/drop-down-menu/drop-down-menu";
import { GET_EPISODES } from "../../graphql";
import { useNavigate } from "react-router-dom";

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
interface FormValues {
  searchInput: string;
}

export const EpisodesSection = () => {
  const [category, setCategory] = useState<string[]>(CategoryList[0].value);
  const [sorting, setSorting] = useState<OrderDirection[]>(SortList[0].value);

  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<FormValues>(); // Used FormValues interface
  const searchInputRules = {
    required: "Search term is required",
    minLength: {
      value: 3,
      message: "Search term must be at least 3 characters",
    },
  };

  const onSubmit = handleSubmit((data) => {
    navigate(`/episodes?search=${encodeURIComponent(data.searchInput)}`);
  });

  const changeCategory = (newState: string[]) => {
    setCategory(newState);
  };
  const changeSort = (newState: OrderDirection[]) => {
    setSorting(newState);
  };
  const formClasses = {
    form: "flex flex-col w-80 md:flex-row md:w-[625px] md:h-14 xl:w-[794px]",
    input:
      "w-full py-4 px-5 mb-3 border-solid border-2px border-2 border-opacity-40 border-formBorder rounded-lg text-primary font-text md:w-4/5 md:mr-5 md:mb-0",
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const { loading, data } = useQuery(GET_EPISODES, {
    variables: {
      orderBy: [
        {
          // TODO: This needs to be a state variable based on the sorting dropdown
          publishedAt: sorting[0],
        },
      ],
      where: {
        category: {
          // TODO: This needs to be a state variable based on the category dropdown
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
    <div className="flex flex-col max-w-[1280px] mx-4 md:mx-5">
      <div
        className={cx(
          "w-full flex flex-col justify-between items-center pb-8 gap-5",
          "md:flex-row md:items-start md:gap-0",
        )}
      >
        <h2 className="font-title text-primary text-3xl">
          Explore our episodes
        </h2>
        <div className="font-text flex md:flex-row gap-4 sm:flex-col">
          <Menu
            title={"Category"}
            list={CategoryList}
            changeMenu={changeCategory}
          />
          <Menu title={"Sort"} list={SortList} changeMenu={changeSort} />
        </div>
      </div>

      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <div
          className={`grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1`}
        >
          {data?.episodes?.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))}
        </div>
      )}

      <Link to="/episodes" className="mt-10 mx-auto">
        <Button>Show All Episodes</Button>
      </Link>

      <div className="mt-4 mb-8">
        <Form className={formClasses.form} onSubmit={onSubmit}>
          <Form.SearchBar
            className={formClasses.input}
            inputId="searchInput"
            name="searchInput"
            register={register}
            rules={searchInputRules}
          />
          <Button type="submit">Search</Button>
        </Form>
      </div>
    </div>
  );
};
