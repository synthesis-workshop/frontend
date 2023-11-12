import React from "react";
import ReactPlayer from "react-player";

interface Props {
    className?: string;
    url: string;
    width: string;
    height: string;
    controls: boolean;
    light: boolean;
}

export const VideoPlayer = ({className, url, width, height, controls, light}: Props) => {
    return <ReactPlayer className={className} url={url} controls={controls} light={light} width={width} height={height}
    />
};