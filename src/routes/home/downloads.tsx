import { useQuery } from "@apollo/client";
import { DownloadItem } from "../../components";
import { GET_DOWNLOADS } from "../../graphql";

export const Downloads: React.FC = () => {
    const { loading, data } = useQuery(GET_DOWNLOADS);

    if (loading) {
        return (
        <div>...Loading</div>
    )
}

    return (
        <section className="my-[100px] w-[1200px]">
            <h2 className="mb-9 font-title text-3xl text-primary">Downloads</h2>
            <div className="p-10 bg-white">
                {data?.downloads?.map((download) => (
                    <DownloadItem title={download.title} lastUpdated={download.lastUpdated} fileDownload={download.fileDownload} className="border-b-[1px] border-[#3A3C4666] pb-6 mb-6 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0" />
                ))}
            </div>
        </section>
    )
}