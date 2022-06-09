import { NextPage } from 'next';
import Link from 'next/link';

import posts from '@.contents/posts.json';
import { config } from '@site.config';
import { PostItem } from '@src/types';
import { ScrollableMembers } from '@src/components/ScrollableMembers';
import { PostList } from '@src/components/PostList';
import { PageSEO } from '@src/components/PageSEO';
import { ContentWrapper, UndoWrapForScroll } from '@src/components/ContentWrapper';

const Page: NextPage = () => {
  return (
    <>
      <PageSEO
        title={config.topMeta.title}
        description={config.topMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">{config.topMeta.title}</h1>
          {!!config.topMeta.description && <p className="home-hero__description">{config.topMeta.description}</p>}
        </ContentWrapper>
      </section>

      <section className="home-blogs">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Blogs</h2>
          </div>

          <div className="home-blogs-container">
            <ul>
              <li>
                <Link href="/creators">
                  <a className="home-section-link">GENDA Creators Blog</a>
                </Link>
              </li>
            </ul>

          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
