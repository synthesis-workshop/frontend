import { Button } from "../button";
import { Card } from "../card";
import { Publication } from "../../__generated__/graphql";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import dayjs from "dayjs";

export const PublicationCard = ({
  title,
  description,
  publishedDate,
  publisher,
  link,
  doi,
  author,
}: Publication) => {
  return (
    <Card variant="light">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-8 max-w-[688px]">
            <h2 className="text-card-title font-normal leading-8 mb-3 tracking-[.48px]">
              {title}
            </h2>
            <DocumentRenderer document={description?.document} />
          </div>
          <div className="md:hidden">
            <a href={link || "#"} target="_blank">
              <Button className="w-full whitespace-nowrap">
                Read the Full Article ↗
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-primary/80 mb-4 w-full">
          <p className="overflow-wrap-break-word">
            By: {author}
          </p>
          {!publishedDate ? null : (
            <>
              <span className="hidden md:inline-block">|</span>
              <p className="hidden md:inline-block">
                Published:{" "}
                {dayjs(publishedDate, "YYYY-DD-MM").format("D MMMM YYYY")}
              </p>
            </>
          )}
          <span className="hidden md:inline-block">|</span>
          <p className="overflow-wrap-break-word">In: {publisher}</p>
          <span className="hidden md:inline-block">|</span>
          <p className="overflow-wrap-break-word">DOI: {doi}</p>
        </div>
        <div className="md:hidden">
          <a href={link || "#"} target="_blank">
            <Button className="w-full whitespace-nowrap">
              Read the Full Article ↗
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};

