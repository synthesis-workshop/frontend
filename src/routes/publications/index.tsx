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
    <div className="w-full pt-28">
      <div className="mx-auto md:w-11/12 px-4 xl:max-w-xlPageContent flex flex-col">
        <h2 className="font-title text-[32px] text-primary mb-3">
          Our Publications
        </h2>
        <div className="flex flex-col gap-5 items-center mb-10 w-full">
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
