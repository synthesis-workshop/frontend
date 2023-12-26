import { Button } from "../button";
import { Card } from "../card";
import { Publication } from "../../__generated__/graphql";
import { DocumentRenderer } from "@keystone-6/document-renderer";


export const PublicationCard = ({ title, description, publishedDate, publisher, link, doi, author }: Publication) => {
  
  return (
    <Card variant="light">
      <div className="flex justify-between">
        <div className="max-w-[680px]">
          <h2 className="text-2xl font-medium mb-3">{title}</h2>
          <DocumentRenderer document={description?.document} />
        </div>
        <a href={link || "#"} target="_blank" className="hidden lg:block">
          <Button className="w-max">Read the Full Article ↗</Button>
        </a>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-primary/80">
        <p>By: {author}</p>
        <span>|</span>
        <p>Published: {publishedDate}</p>
        <span>|</span>
        <p>In: {publisher}</p>
        <span>|</span>
        <p>DOI: {doi}</p>
      </div>
      <a
        href={link || "#"}
        target="_blank"
        className="lg:hidden mt-5 m-auto sm:mr-0 sm:ml-auto"
      >
        <Button>Read the Full Article ↗</Button>
      </a>
    </Card>
  );
};