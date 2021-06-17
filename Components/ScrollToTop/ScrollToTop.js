import { useEffect, useState } from "react";
import styles from './ScrollToTop.module.css'


export default function ScrollToTop()
{
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    });
    
    return (
        <div>
            {isVisible && (
            <div
                onClick={scrollToTop}
                id={styles.go_up}
            >
            <button>^</button>
            </div>
            )}
        </div>
    )
}