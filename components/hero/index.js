import styles from "./styles.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.logo}>
                I am a logo
            </div>
            <div className={styles.title}>
                <h1>
                    <span className={styles.accent}>_</span> hello there stranger
                </h1>
                <h2>
                    i am a subheading with a little bit more text. Hopefully i fit.
                </h2>
            </div>
        </div>
    )
}
export default Hero;