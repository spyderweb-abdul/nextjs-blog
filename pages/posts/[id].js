import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }){
    // Fetches necessary data for the post with id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }){
    //A react component to render the page
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
 );
}

export async function getStaticPaths(){
 // This rturns an array of possible values for id
 const paths = getAllPostIds();
 return {
    paths,
    fallback: false,
 };
}