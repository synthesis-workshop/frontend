import type { Meta, StoryObj } from "@storybook/react";
import { DownloadItem } from "./download-item";

const meta: Meta<typeof DownloadItem> = {
  component: DownloadItem,
  title: "Components/DownloadItem",
  argTypes: {
    title: {
      control: { type: "text" },
    },
    lastUpdated: {
      control: { type: "text" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DownloadItem>;

export const Default: Story = {
  render: () => (
    <DownloadItem
      title="Title goes here"
      lastUpdated="01-01-2023"
      fileDownload={{
        url: "example",
      }}
    />
  ),
};
