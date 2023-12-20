import { Button } from "../button";
import { Card } from "../card";
import { PropsWithChildren } from "react";
import type { Publication } from "../../__generated__/graphql";

interface Props {
  publication: Publication;
}

export const PublicationCard = ({
  publication
}: PropsWithChildren<Props>) => {
  return (
    <Card variant="light">
      <div className="flex justify-between">
        <div className="max-w-[680px]">
          <h2 className="text-2xl font-medium mb-3">{publication.title}</h2>
          <p className="text-primary mb-8">{publication.description?.document}</p>
        </div>
        <a href={publication.link} target="_blank" className="hidden lg:block">
          <Button>Read the Full Article ↗</Button>
        </a>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-primary/80">
        <p>By: {publication.author}</p>
        <span>|</span>
        <p>Published: {publication.publishedDate}</p>
        <span>|</span>
        <p>In: {publication.publisher}</p>
        <span>|</span>
        <p>DOI: {publication.doi}</p>
      </div>
      <a
        ref={publication.link}
        target="_blank"
        className="lg:hidden mt-5 m-auto sm:mr-0 sm:ml-auto"
      >
        <Button>Read the Full Article ↗</Button>
      </a>
    </Card>
  );
};
