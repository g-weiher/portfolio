import styles from "./menu-button.module.css";

const ArrowButton = ({className, up, hidden}) => {
    /*const onScroll = (top) => {
        document.body.scrollIntoView({behavior: "smooth", block: top ? "start" :"end", inline: "nearest"});
    }*/
    const onScroll = (top) => {
        const anchor = top ? document.getElementById("scroll-anchor") : document.getElementById("scroll-anchor-bottom")
        anchor.scrollIntoView({behavior: "smooth", block: "start" , inline: "nearest"});
    }
    return (
        <div onClick={()=> onScroll(up)} className={`${styles.arrowButton} ${up ? styles.up : ""} ${hidden? styles.hidden: ""}`}>
            <div></div>
        </div>
    )
}
export default ArrowButton;