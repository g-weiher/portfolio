import Head from "next/head";
import Image from "next/image"
import styles from "./styles.module.scss";
import SideMenu from "../side-menu";
import cn from 'classnames'

const name = "Georg Weiher";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
    
            <div id="scroll-container" className={styles.container}>
                <div id="scroll-anchor"></div>
                <SideMenu>
                    <a href="#">about me</a>
                    <a href="#">coding</a>
                    <a href="#">illustration</a>
                    <a href="#">sketchbook</a>
                    <a href="#">contact</a>
                </SideMenu>
                <div className={cn([styles.parallaxLayer],[styles.background],[styles.hero])}>
                    <Image className={styles.image} src="/images/MartinMajoor--Pic.jpg" layout="fill" priority/>
                </div>
                <div className={cn([styles.parallaxLayer],[styles.middleground],[styles.heading])}>
                    <h1><span className={styles.dot}>.</span>Georg Weiher</h1>
                    <h3>
                        I am a subheading with a little bit more text and stuff
                    </h3>
                </div>
                <h1 className={cn([styles.parallaxLayer],[styles.foreground],[styles.logo])}>I am Logo</h1>
                <div className={cn([styles.parallaxLayer],[styles.foreground],[styles.contentWrapper])}>
                    <div id="scroll-anchor-bottom"></div>
                    <main className={styles.mainContent}>{children}</main>
                </div>
            </div>
            <footer className={styles.footer}>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
            </footer>
        </div>
    );
}
