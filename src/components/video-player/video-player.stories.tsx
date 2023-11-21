import type { Meta, StoryObj } from "@storybook/react";

import { VideoPlayer } from "./video-player";

const meta: Meta<typeof VideoPlayer> = {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
};

export default meta;

type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  args: {
    url: "https://www.youtube.com/watch?v=Hpz9gA_1oLM",
    controls: true,
    light: true,
    width: "500px",
    height: "300px",
  },
};
