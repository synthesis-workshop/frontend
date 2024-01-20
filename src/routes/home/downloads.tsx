import { useQuery } from "@apollo/client";
import { DownloadItem, Loading } from "../../components";
import { GET_DOWNLOADS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import { ExpandableSection } from "../../components";

export const Downloads: React.FC = () => {
  const { loading, data } = useQuery(GET_DOWNLOADS, {
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

  return (
    <section
      className="my-[100px] mx-10 max-w-[1200px] min-w-[311px] flex flex-col w-11/12"
      id="downloads"
    >
      <h2 className="mb-9 font-title text-3xl text-primary">Downloads</h2>

      {loading || !downloads ? (
        <div className="my-4 mx-auto">
          <Loading />
        </div>
      ) : (
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
      )}
    </section>
  );
};
