import React from 'react';
import { Button } from '../button';

interface DownloadItemProps {
    title: string,
    lastUpdated: number,
    fileDownload: {
        url: string,
    }
}

export const DownloadItem: React.FC<DownloadItemProps> = ({title, lastUpdated, fileDownload}) => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <div className='mb-2 font-text text-2xl text-primary tracking-tight font-medium'>{title}</div>
                <div className='font-text text-base opacity-80 text-primary tracking-tight font-normal'>Last Updated: {lastUpdated}</div>
            </div>
            <a href={fileDownload.url} download>
            <Button variant="primary" size='default' className='h-[52px]'>Download ↓</Button>
            </a>
        </div>
    )
};