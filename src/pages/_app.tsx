import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

export default function Application({Component, pageProps}: AppProps)
{
    return <>
        <Head>
            <title>ACME - Binding Redirects Generator</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <link rel="icon" href="/logo.png" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
        </Head>
        <Component {...pageProps} />
    </>;
}