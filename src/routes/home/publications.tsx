import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Loading, Button, PublicationCard } from "../../components";
import { GET_PUBLICATIONS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";

export const Publications: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const { loading, data } = useQuery(GET_PUBLICATIONS, {
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
    <div className="flex flex-col max-w-[1200px] w-full">
      <h2 className="font-title text-primary text-3xl mb-8">
        Our Publications
      </h2>
      <div className="flex flex-col items-center mb-10">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-5 w-full px-4">
            {data?.publications?.map((publication) => (
              <PublicationCard key={publication.id} {...publication} />
            ))}
          </div>
        )}
        <Link to="/publications" className="mt-10 mx-auto">
          <Button variant="primary">More Publications</Button>
        </Link>
      </div>
    </div>
  );
};
