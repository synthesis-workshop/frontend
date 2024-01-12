import cx from "classnames";
import dayjs from "dayjs";
import React from "react";
import { Button } from "../button";
import { Download } from "../../__generated__/graphql";

type DownloadItemProps = Download & {
  className?: string;
};

export const DownloadItem: React.FC<DownloadItemProps> = ({
  title,
  lastUpdated,
  fileDownload,
  className,
}) => {
  return (
    <div className={cx("flex justify-between items-center", className)}>
      <div>
        <div className="mb-2 font-text text-2xl text-primary tracking-tight font-medium">
          {title}
        </div>
        <div className="font-text text-base text-primary/80 tracking-tight font-normal">
          Last Updated: {dayjs(lastUpdated).format("D MMM, YYYY")}
        </div>
      </div>
      {fileDownload?.url && (
        <a className="max-w-lg max-md:w-full" href={fileDownload.url} download>
          <Button className="max-md:w-full" variant="primary">
            Download ↓
          </Button>
        </a>
      )}
    </div>
  );
};
