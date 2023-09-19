import styles from '~/tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import { RootLayout } from '~/RootLayout';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
];

export default function App() {
    return (
        <html lang="en" className='h-full bg-neutral-950 text-base antialiased'>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <title>devSanAntonio</title>
                <Meta />
                <Links />
            </head>
            <body className='flex min-h-full flex-col'>
                <RootLayout>
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </RootLayout>
            </body>
        </html>
    );
}