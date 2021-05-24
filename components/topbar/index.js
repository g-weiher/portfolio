import { useEffect, useRef, useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styles from "./topbar.module.css"


const Topbar = ({children}) => {
    const [isScrolled, setScrolled] = useState(false);
    useScrollPosition(
        ({currPos}) => {
            console.log(currPos);
            console.log(isScrolled);
          const isShow = currPos.y < -10;
          if (isShow !== isScrolled) setScrolled(isShow);
        },
        [isScrolled],
        false,
        false,
        300
    )
    return (
        <header className={styles.header}>
            <div key="topbar" className={`${styles.topbarFixed} ${!isScrolled ? styles.hidden : ""}`}>
                {children}
            </div>
            <div key="topbar-top" className={styles.topbarTop}>
                {children}
            </div>
        </header>
    )


}
export default Topbar;