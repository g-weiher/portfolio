import styles from "./styles.module.css";
import MenuButton from "./components/MenuButton";
import ArrowButton from "./components/arrowButton";
import { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPositionCustom";

const SideMenu = ({children}) => {
    const [isScrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    useScrollPosition(
        ({currPos}) => {
            console.log(currPos);
            console.log(isScrolled);
          const isShow = currPos.y < -100;
          if (isShow !== isScrolled) setScrolled(isShow);
        },
        [isScrolled],
        false,
        false,
        300
    )
    const onToggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <header className={styles.header}>
            <div id="sideMenu" className={styles.sidebar}>
                <div>
                    <MenuButton onClick={()=> onToggleMenu()}/>   
                    {isScrolled ? <ArrowButton up/> : <ArrowButton up hidden/>}
                </div>
                {!isScrolled ? <ArrowButton down/> : <ArrowButton down hidden/>}
            </div>
            <div className={`${styles.drawer} ${showMenu ? styles.active: ""}`}>
                <nav>
                    {children}
                </nav>
                
            </div>

        </header>
    )
}
export default SideMenu;