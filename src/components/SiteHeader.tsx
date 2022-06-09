import Link from 'next/link';
import { config } from '@site.config';

import { ContentWrapper } from '@src/components/ContentWrapper';
import { getTitleFromPathname, getPathFromPathname, getLogoTextFromPathname } from '@src/utils/helper';

export const SiteHeader: React.FC = () => (
  <header className="site-header">
    <ContentWrapper>
      <div className="site-header__inner">
        <Link href={getPathFromPathname()} passHref>
          <a className="site-header__logo-link">
            <img src="/logo.png" alt={getTitleFromPathname()} className="site-header__logo-img" />
            <span className="site-header__logo-text">
              GENDA
              <br />
              {getLogoTextFromPathname()}
            </span>
          </a>
        </Link>
        <div className="site-header__links">
          {config.headerLinks.map((link, i) => {
            const key = `header-link-${i}`;
            if (link.href.startsWith('/')) {
              return (
                <Link key={key} href={link.href} passHref>
                  <a className="site-header__link" target="_blank">
                    {link.title}
                  </a>
                </Link>
              );
            }
            return (
              <a key={key} href={link.href} className="site-header__link" target="_blank">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  </header>
);
