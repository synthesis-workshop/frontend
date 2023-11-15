import { DownloadItem } from "./DownloadItem";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DownloadItem> = {
    component: DownloadItem
};
export default meta;

type Story = StoryObj<typeof DownloadItem>;

export const Primary: Story = {
    render: () => <DownloadItem title="Title goes here" lastUpdated={2023} fileDownload={{
        url: "example"
    }}/>
}