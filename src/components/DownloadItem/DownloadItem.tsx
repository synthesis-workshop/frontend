import React from 'react';
import { Button } from '../button/index';

interface DownloadItemProps {
    title: string,
    lastUpdated: number,
    // fileDownload: {
    //     storage: string;
    // }
}

export const DownloadItem: React.FC<DownloadItemProps> = ({title, lastUpdated}) => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <div className='mb-2 font-text text-2xl text-primary tracking-tight font-medium'>{title}</div>
                <div className='font-text text-base opacity-80 text-primary tracking-tight font-normal'>Last Updated: {lastUpdated}</div>
            </div>
            <Button variant="primary" size='default' className='h-[52px]'>Download ↓</Button>
        </div>
    )
}