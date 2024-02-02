import React from "react";
import { Button, PublicationCard } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_PUBLICATIONS } from "../../graphql";
import { useMediaQuery } from "react-responsive";
import { OrderDirection } from "../../__generated__/graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PublicationsPage: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const { data, fetchMore } = useQuery(GET_PUBLICATIONS, {
    variables: {
      orderBy: [
        {
          publishedDate: OrderDirection.Desc,
        },
      ],
      take: isTablet ? 3 : 10,
      skip: 0,
    },
  });

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-black/[.06] w-full h-screen pt-28">
      <div className="mx-auto w-[343px] md:w-11/12 max-w-[1280px]">
        <h2 className="font-title text-[32px] mb-10 mt-10">Our Publications</h2>
        <div className="items-center mb-10">
          <div className="grid grid-cols-1 gap-5">
            {showContent ? (
              data?.publications?.map((publication) => (
                <PublicationCard key={publication.id} {...publication} />
              ))
            ) : (
              <>
                <Skeleton height={150} />
                <Skeleton height={150} />
              </>
            )}
          </div>
          {data?.publicationsCount &&
            data.publications &&
            data.publicationsCount > data.publications.length && (
              <Button
                className="mt-10"
                variant="primary"
                onClick={() => {
                  fetchMore({
                    variables: {
                      skip: data?.publications?.length,
                    },
                  });
                }}
              >
                Load More
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};
