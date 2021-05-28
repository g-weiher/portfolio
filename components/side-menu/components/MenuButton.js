import styles from "./menu-button.module.scss";

const MenuButton = ({className, onClick, open}) => {
    return (
        <div onClick={onClick} className={`${styles.menuButton} ${open ? styles.open : ""} ${className || ""}`}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        </div>
    )
}
export default MenuButton;