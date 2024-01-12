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
    <Card
      variant="light"
      className="w-max sm:w-[343px] md:w-[688px] lg:w-[1200px]"
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="mb-4 md:mb-8 max-w-[688px]">
            <h2 className="text-card-title font-normal leading-8 mb-3 tracking-[.48px]">
              {title}
            </h2>
            <DocumentRenderer document={description?.document} />
          </div>
          <div>
            <a
              href={link || "#"}
              target="_blank"
              className="hidden md:block w-full"
            >
              <Button>Read the Full Article ↗</Button>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-primary/80 mb-4 w-full">
          <p>By: {author}</p>
          <span>|</span>
          {publishedDate && (
            <>
              <p>
                Published:{" "}
                {dayjs(publishedDate, "YYYY-DD-MM").format("D MMMM YYYY")}
              </p>
              <span>|</span>
            </>
          )}
          <p>In: {publisher}</p>
          <span>|</span>
          <p>DOI: {doi}</p>
        </div>
        <div className="md:hidden">
          <a href={link || "#"} target="_blank">
            <Button className="w-full">Read the Full Article ↗</Button>
          </a>
        </div>
      </div>
    </Card>
  );
};
