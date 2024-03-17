// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import './globals.css'
import NavbarComponent from "@/app/components/navbarComponent";
import FooterComponent from "@/app/components/footerComponent";

export const metadata = {
    title: 'ISTAD CLONE',
    description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={metadata.description}/>
            <title>{metadata.title}</title>
            <link rel="icon" href="https://istad.co/resources/img/CSTAD_120.png"/>
            <ColorSchemeScript/>
        </head>
        <body className="min-h-screen">
        <MantineProvider>
            <NavbarComponent/>
            {children}
            <FooterComponent/>
        </MantineProvider>
        </body>
        </html>);
}