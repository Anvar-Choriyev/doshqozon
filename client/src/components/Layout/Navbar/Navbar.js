import styles from "./Navbar.module.scss"
import ArrowBtn from "../../../assets/icons/ArrowBtn"
import Vector from "../../../assets/icons/Vector";
import Bell from "../../../assets/icons/Bell";
import Time from "../../../assets/icons/Time";
import Search from "../../../assets/icons/Search";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.menuText}>
                <div className={styles.arrowBtn}>
                    <ArrowBtn/>
                </div>
                <p className={`subtitle ${styles.menuTitle}`}>Taomnoma</p>
                <Vector/>
                <p className="subtitle">Kategoriyalar</p>
            </div>
            <div className={styles.menuControl}>
                <Bell/>
                <Time/>
                <div className={styles.search}>
                    <Search/>
                    <input className="main-text" type="text" placeholder={"Search..."} />
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;