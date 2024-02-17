import React from "react";
import { Loading, Button, PublicationCard } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_PUBLICATIONS } from "../../graphql";
import { useMediaQuery } from "react-responsive";
import { OrderDirection } from "../../__generated__/graphql";

export const PublicationsPage: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const { loading, data, fetchMore } = useQuery(GET_PUBLICATIONS, {
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

  return (
    <div className="w-full pt-28">
      <div className="mx-auto md:w-11/12 px-4 xl:max-w-xlPageContent flex flex-col">
        <h2 className="font-title text-[32px] text-primary mb-3">
          Our Publications
        </h2>
        <div className="flex flex-col gap-5 items-center mb-10 w-full">
          {loading ? (
            <Loading />
          ) : (
            <>
              {data?.publications?.map((publication) => (
                <PublicationCard key={publication.id} {...publication} />
              ))}
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
