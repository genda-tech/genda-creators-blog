import { AppProps } from 'next/app';
import Head from 'next/head';
import { config } from '@site.config';
import { gaTrackingId, pageview } from '@src/utils/gtag';
import { SiteHeader } from '@src/components/SiteHeader';
import { SiteFooter } from '@src/components/SiteFooter';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '@src/styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    if (!gaTrackingId) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon shortcut" type="image/png" href={`${config.siteRoot}/logo.png`} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
