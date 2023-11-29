import { DownloadItem } from "../../components"

export const Downloads: React.FC = () => {
    return (
        <section className="my-[100px] w-[1200px]">
            <h2 className="mb-9 font-title text-3xl text-primary">Downloads</h2>
            <div className="p-10 bg-white">
                <DownloadItem title="Here" lastUpdated="12-12-2022" fileDownload={{url: "string"}}  />
            </div>
        </section>
    )
}