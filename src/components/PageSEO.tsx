import Head from 'next/head';

import { config } from '@site.config';
import { getOgImageFromPathname } from '@src/utils/helper';
import { gaTrackingId } from '@src/utils/gtag';

// types
type Props = {
  title: string;
  path?: string;
  description?: string;
  ogImageUrl?: string;
  noindex?: boolean;
  removeSiteNameFromTitle?: boolean;
};

export const PageSEO: React.FC<Props> = (props) => {
  const { path, title, description, ogImageUrl, noindex, removeSiteNameFromTitle } = props;

  const pageUrl = `${config.siteRoot}${path || ''}`;
  return (
    <Head>
      <title>{removeSiteNameFromTitle ? title : `${title} | ${config.siteMeta.title}`}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site" content={config.siteMeta.title} />
      <meta property="og:image" content={ogImageUrl || `${config.siteRoot}/${getOgImageFromPathname()}`} />
      {!!description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {path && <link rel="canonical" href={pageUrl} />}
      {noindex && <meta name="robots" content="noindex" />}
      {gaTrackingId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
            </>
          )}
    </Head>
  );
};
