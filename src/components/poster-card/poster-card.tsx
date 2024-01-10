import cx from "classnames";
import { Button } from "../button";
import { Poster } from "../../__generated__/graphql";

type Props = Poster & {
  className?: string;
};

export const PosterCard = ({
  attribution,
  className,
  file,
  image,
  title,
}: Props) => {
  return (
    <div className={cx("flex flex-col font-text justify-between", className)}>
      {image && (
        <img
          className="rounded w-full"
          src={image.url}
          alt={title ?? "Poster Image"}
        />
      )}
      <div className="my-5 leading-normal">
        <h2 className="text-xl text-white line-clamp-3">{title}</h2>
        <p className="text-white/80 text-sm mt-2 line-clamp-1">
          By {attribution}
        </p>
      </div>
      {file?.url && (
        <a href={file.url} download target="_blank">
          <Button className="w-full" variant="secondary">
            Download ↓
          </Button>
        </a>
      )}
    </div>
  );
};
