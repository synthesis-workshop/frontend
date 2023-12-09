import { useQuery } from "@apollo/client";
import { DownloadItem } from "../../components";
import { GET_DOWNLOADS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import { ExpandableSection } from "../../components";

export const Downloads: React.FC = () => {
    const { loading, data } = useQuery(GET_DOWNLOADS, {
        variables: {
            orderBy: [{ lastUpdated: OrderDirection.Desc }]
        }
    })

    const downloads = data?.downloads?.map((download) => (
        <DownloadItem key={download.id} title={download.title} lastUpdated={download.lastUpdated.slice(0, 10)} fileDownload={download.fileDownload} className="border-b-[1px] border-[#3A3C4666] pb-6 mb-6 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0" />
    ))

    if (loading) {
        return (
        <div>...Loading</div>
    )
}

    return (
        <section className="my-[100px] mx-10 max-w-[1200px] min-w-[311px] w-full">
            <h2 className="mb-9 font-title text-3xl text-primary">Downloads</h2>
            <div className="w-full">
                <ExpandableSection preview={downloads.slice(0, 3)} className="w-full">
                    {downloads.slice(3)}
                </ExpandableSection>
            </div>
        </section>
    )
}