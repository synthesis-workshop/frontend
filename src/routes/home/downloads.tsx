import React from "react";
import { useQuery } from "@apollo/client";
import { DownloadItem } from "../../components";
import { GET_DOWNLOADS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import { ExpandableSection } from "../../components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Downloads: React.FC = () => {
  const { data } = useQuery(GET_DOWNLOADS, {
    variables: {
      orderBy: [{ lastUpdated: OrderDirection.Desc }],
    },
  });

  // Get download item array
  const downloads = data?.downloads?.map((download) => (
    <DownloadItem
      key={download.id}
      className="flex-col gap-5 max-md:items-start md:flex-row border-b-[1px] border-primary/40 pb-6 mb-6 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0"
      {...download}
    />
  ));

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      className="flex flex-col w-full sm:max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent"
      id="downloads"
    >
      <h2 className="mb-9 font-title text-3xl text-primary">Downloads</h2>

      {showContent && downloads ? (
        <div className="w-full">
          <ExpandableSection
            expandText="More Downloads"
            collapseText="Fewer Downloads"
            preview={downloads.slice(0, 3)}
            className="w-full"
          >
            {downloads.length > 3 && downloads.slice(3)}
          </ExpandableSection>
        </div>
      ) : (
        <Skeleton height={100} borderRadius={12} />
      )}
    </section>
  );
};
