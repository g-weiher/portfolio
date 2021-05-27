import Head from "next/head";
import Layout, { siteTitle } from "../components/parallax-layout";
import { getSortedPostsData } from "../lib/posts";
import { GridLayout, Article } from "../components/grid-layout";
import styles from "../styles/utils.module.scss";

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
                <section className={styles.section}>
                    <h2 className={styles.heading}>
                        Hello there <span className={styles.dot}>.</span>
                    </h2>
                    <p>
                        Ich bin ein leidenschaftlicher und neugieriger
                        Software-Entwickler mit schneller Auffassungsgabe und
                        einem Auge für Details. Suche nach einer Position als
                        Frontend-Entwickler, um Design-Kenntnisse mit
                        Programmiererfahrung zu kombinieren. Ein Jahr
                        Berufserfahrung als JSF-Entwickler, sowie
                        Informatikstudium und ein Grafikdesignabschluss mit
                        Bestnote. Kürzlich in Javascript basierte Webentwicklung
                        mit Node, React und Express eingestiegen.
                    </p>
                    <p className={styles.lightText}>
                        blablabla
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim.
                    </p>
                    <br/>
                    <p>
                        Ich bin ein leidenschaftlicher und neugieriger
                        Software-Entwickler mit schneller Auffassungsgabe und
                        einem Auge für Details. Suche nach einer Position als
                        Frontend-Entwickler, um Design-Kenntnisse mit
                        Programmiererfahrung zu kombinieren. Ein Jahr
                        Berufserfahrung als JSF-Entwickler, sowie
                        Informatikstudium und ein Grafikdesignabschluss mit
                        Bestnote. Kürzlich in Javascript basierte Webentwicklung
                        mit Node, React und Express eingestiegen.
                        <light>blabla</light>
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>
                        Some other blabla <span className={styles.dot}>.</span>
                    </h2>
                    <p>
                        Ich bin ein leidenschaftlicher und neugieriger
                        Software-Entwickler mit schneller Auffassungsgabe und
                        einem Auge für Details. Suche nach einer Position als
                        Frontend-Entwickler, um Design-Kenntnisse mit
                        Programmiererfahrung zu kombinieren. Ein Jahr
                        Berufserfahrung als JSF-Entwickler, sowie
                        Informatikstudium und ein Grafikdesignabschluss mit
                        Bestnote. Kürzlich in Javascript basierte Webentwicklung
                        mit Node, React und Express eingestiegen.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim.
                    </p>
                </section>
                <GridLayout>
                    <Article imageBG={"rgb(220,100,100)"}>
                        some content i don't care about. Doesn't even have a
                        Majoor image!
                    </Article>
                    <Article
                        image={"/images/MartinMajoor--Pic.jpg"}
                        imageBG={"rgba(100, 149, 237,0.6)"}
                    >
                        Blablabla blubb
                    </Article>
                    <Article
                        image={"/images/MartinMajoor--Pic.jpg"}
                        imageBG={"rgba(100, 233, 237,0.6)"}
                    >
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
