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
      id="2484a1e2-7d25-4254-b6ac-cf7a8a2b992b"
      title="Title goes here"
      lastUpdated="01-01-2023"
      fileDownload={{
        filename: "foo",
        filesize: 123,
        url: "example",
      }}
    />
  ),
};
