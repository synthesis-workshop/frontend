import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Button, PublicationCard } from "../../components";
import { GET_PUBLICATIONS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Publications: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const { data } = useQuery(GET_PUBLICATIONS, {
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
    <div className="flex flex-col w-full max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
      <h2 className="font-title text-primary text-3xl mb-8">
        Our Publications
      </h2>
      <div className="flex flex-col items-center mb-10">
        {showContent ? (
          <div className="grid grid-cols-1 gap-5 w-full">
            {data?.publications?.map((publication) => (
              <PublicationCard key={publication.id} {...publication} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 w-full">
            <Skeleton height={200} borderRadius={12} />
          </div>
        )}
        <Link to="/publications" className="mt-10 mx-auto">
          <Button variant="primary">More Publications</Button>
        </Link>
      </div>
    </div>
  );
};
