import cx from "classnames";
import { Button } from "../button";

interface Props {
  className?: string;
  title: string;
  attribution: string;
  image: string;
  file: string;
}

export const PosterCard = ({
  attribution,
  className,
  file,
  image,
  title,
}: Props) => {
  return (
    <div className={cx("flex flex-col font-text", className)}>
      <img className="rounded w-full" src={image} alt={title} />
      <div className="my-5 leading-normal">
        <h2 className="text-xl text-white line-clamp-3">{title}</h2>
        <p className="text-white/80 text-sm mt-2 line-clamp-1">
          By {attribution}
        </p>
      </div>
      <a href={file} download target="_blank">
        <Button className="w-full" variant="secondary">
          Download ↓
        </Button>
      </a>
    </div>
  );
};
