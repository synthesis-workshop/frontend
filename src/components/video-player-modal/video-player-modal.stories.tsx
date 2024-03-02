import type { Meta, StoryObj } from "@storybook/react";
import { VideoPlayerModal } from "./video-player-modal";

const meta: Meta<typeof VideoPlayerModal> = {
  component: VideoPlayerModal,
  title: "Components/VideoPlayerModal",
};

export default meta;

type PubStory = StoryObj<typeof VideoPlayerModal>;

export const Default: PubStory = {};
