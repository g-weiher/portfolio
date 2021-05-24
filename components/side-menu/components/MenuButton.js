import styles from "./menu-button.module.css";

const MenuButton = ({className, onClick}) => {
    return (
        <div onClick={onClick} className={`${styles.menuButton} ${className || ""}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default MenuButton;