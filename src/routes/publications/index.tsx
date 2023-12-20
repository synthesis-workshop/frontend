import React from "react";
import {Loading, Button, PublicationCard} from "../../components";
import {useQuery} from "@apollo/client";
import {GET_PUBLICATIONS} from "../../graphql";
import { useMediaQuery } from "react-responsive";
import { OrderDirection } from "../../__generated__/graphql";


export const PublicationsPage: React.FC = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
    const { loading, data, fetchMore } = useQuery(GET_PUBLICATIONS, {
        variables: {
            orderBy: [
              {
                publishedDate: OrderDirection.Desc
              }
            ],
            take: isTablet ? 3 : 10,
            skip: 0
        }
    });
    

    return (
      <div className="bg-grey mx-auto w-[343px] md:w-11/12 max-w-[1280px] flex flex-col items-center mt-10">
      <div>
        <h2 className="font-title text-[32px] mb-3">Our Publications</h2>
        <div className="flex flex-col items-center">
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.publications?.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
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
