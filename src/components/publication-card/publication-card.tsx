import { Button } from "../button";
import { Card } from "../card";
import { Publication } from "../../__generated__/graphql";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import dayjs from "dayjs";
import { isEmpty, uniqueId } from "lodash";

export const PublicationCard = ({
  title,
  description,
  publishedDate,
  publisher,
  link,
  doi,
  author,
}: Publication) => {
  const descriptors = [
    author && `By: ${author}`,
    publishedDate &&
      `Published: ${dayjs(publishedDate, "YYYY-DD-MM").format("D MMMM YYYY")}`,
    publisher && `In: ${publisher}`,
    doi && `DOI: ${doi}`,
  ];
  return (
    <Card variant="light" className="w-full">
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
              className="hidden min-w-[264px] md:flex justify-end "
            >
              <Button className="md:px-4 lg:px-8">
                Read the Full Article ↗
              </Button>
            </a>
          </div>
        </div>
        <div className="flex sm:flex-col md:flex-row flex-wrap sm:gap-x-1 md:gap-x-3 sm:gap-y-3 md:gap-y-1 text-primary/80 mb-4 w-full">
          {descriptors
            .map(
              (descriptor) =>
                descriptor && <p key={descriptor}>{descriptor}</p>,
            )
            .filter((descriptor) => !isEmpty(descriptor))
            // Add a pipe between each descriptor
            .reduce((prev, cur) => [
              prev,
              <span className="sm:hidden md:block" key={uniqueId("separator")}>
                |
              </span>,
              cur,
            ])}
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
