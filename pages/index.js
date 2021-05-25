import Head from "next/head";
import Layout, { siteTitle } from "../components/parallax-layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Counter from "../components/someReactCounter";
import Link from "next/link";
import Date from "../components/date";
import { GridLayout, Article } from "../components/grid-layout";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
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
            <div>
                <GridLayout>
                    <Article
                        imageBG={"rgb(220,100,100)"}
                    >
                        some content i don't care about. Doesn't even have a Majoor image!
                    </Article>
                    <Article
                        image={"/images/MartinMajoor--Pic.jpg"}
                        imageBG={"rgba(100, 149, 237,0.6)"}
                    >
                        Blablabla blubb
                    </Article>
                    <Article 
                      image={"/images/MartinMajoor--Pic.jpg"}
                      imageBG={"rgba(100, 233, 237,0.6)"}>
                        some content3
                    </Article>
                    <Article image={"/images/MartinMajoor--Pic.jpg"}>
                        some content4
                    </Article>
                </GridLayout>
            </div>
        </Layout>
    );
}
