import cx from "classnames";
import React from "react";
import { Button } from "../button";

interface DownloadItemProps {
  title: string;
  lastUpdated: string;
  fileDownload: {
    url: string;
  };
  className?: string;
}

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
          Last Updated: {lastUpdated}
        </div>
      </div>
      <a href={fileDownload.url} download>
        <Button variant="primary">Download ↓</Button>
      </a>
    </div>
  );
};
