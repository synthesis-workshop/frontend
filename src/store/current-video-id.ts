import { createContext } from "react";

export type CurrentVideoIdContextType = {
  videoId?: string;
  setVideoId?: (id: string) => void;
};

export const CurrentVideoIdContext = createContext<CurrentVideoIdContextType>(
  {},
);
