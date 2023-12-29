import type { LinksFunction } from '@remix-run/node';
import { RootLayout } from '~/RootLayout';
import {
    Links,
    LiveReload,
    Meta,
    MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import '~/tailwind.css';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
];

export const meta: MetaFunction = () => [
    { title: 'San Antonio Designers, Developers and Engineers' },
    {
        name: 'description',
        content:
            'San Antonio is rich in culture and creativity so is our tech stack. We are a group of designers, developers and engineers that are passionate about our craft and our city. We are here to share our knowledge and experiences with each other and the community.',
    },
];

export default function App() {
    return (
        <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <title>San Antonio Designers Developers and Engineers</title>
                <Meta />
                <Links />
            </head>
            <body className="flex min-h-full flex-col">
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
