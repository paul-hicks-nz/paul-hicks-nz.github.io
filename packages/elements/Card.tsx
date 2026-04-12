import type { JSX } from 'react';

export function Card({ className, children }: { className: string, children: JSX.Element | JSX.Element[] }): JSX.Element {
    return (
        <div className={`${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4
         bg-gray-400 text-black dark:bg-gray-800 dark:text-gray-300
         border-2 rounded-lg border-gray-300 dark:border-black`}>
            {children}
        </div>
    );
}

export function CardHeader({ title, children }: { title: string, children?: JSX.Element | JSX.Element[] }): JSX.Element {
    return (
        <div>
            <h1 className='col-span-1 text-2xl font-bold'>{title}</h1>
            {children}
        </div>
    );
}

export function CardContent({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
    return (
        <div className='md:col-span-2 lg:col-span-4 grid-cols-subgrid md:grid-cols-3'>
            {children}
        </div>
    );
}
