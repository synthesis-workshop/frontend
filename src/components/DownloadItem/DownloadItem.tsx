import React from 'react';

interface DownloadItemProps {
    title: string,
    lastUpdated: number,
    fileDownload: {
        storage: string;
    }
}

export const DownloadItem: React.FC<DownloadItemProps> = (data) => {
    return (
        <div className='flex justify-between'>
            <div>
                <div className='mb-2 font-text text-2xl text-primary tracking-tight font-medium'>Title{data.title}</div>
                <div className='font-text text-base opacity-80 text-primary tracking-tight font-normal'>Last Updated: {data.lastUpdated}</div>
            </div>
            <button className='font-text text-lg'>Download</button>
        </div>
    )
}