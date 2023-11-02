import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Abdul. I am Full Stack Developer and AI Researcher/Engineer. You can contact me on 
          <a href='https://www.twitter.com/@3pleA'> Twitter </a>.
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'> Our Next.js tutorial </a>. )
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    );
}
