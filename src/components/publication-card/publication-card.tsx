import { Button } from "../button";
import { Card } from "../card";

interface PublicationCardProps {
  className?: string;
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  publisher: string;
  doi: string;
  link: string;
}

export const PublicationCard = ({
  className,
  title,
  description,
  author,
  publishedDate,
  publisher,
  doi,
  link,
}: PublicationCardProps) => {
  return (
    <Card variant="light" className={className}>
      <div className="flex justify-between">
        <div className="max-w-[680px]">
          <h2 className="text-2xl font-medium mb-3">{title}</h2>
          <p className="text-primary mb-8">{description}</p>
        </div>
        <a href={link} target="_blank" className="hidden lg:block">
          <Button>Read the Full Article ↗</Button>
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
        href={link}
        target="_blank"
        className="lg:hidden mt-5 m-auto sm:mr-0 sm:ml-auto"
      >
        <Button>Read the Full Article ↗</Button>
      </a>
    </Card>
  );
};
