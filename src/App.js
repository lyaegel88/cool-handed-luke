import React from 'react';
import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import {faHome, faBlog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const App = () => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.navContainer}>
                <div className={styles.navLinks}>
                    <div className={styles.leftContainer}>
                        <div className={`${styles.hideForMobile} ${styles.leftContainerLinks}`}>
                            <span className={styles.home}><FontAwesomeIcon icon={faHome} size="2x"/></span>
                        </div>
                        <div className={styles.leftContainerLinks}>
                            <span className={styles.home}><FontAwesomeIcon icon={faHome} size="2x"/></span>
                        </div>

                    </div>
                </div>
                <div className={styles.powerBox}>
                    <Navbar/>
                </div>
                <div className={styles.navLinks}>
                    <span className={styles.blog}><FontAwesomeIcon icon={faBlog} size="2x"/></span>
                </div>
            </div>


            <div>
                <h2>Hello Test</h2>
            </div>
        </div>
    )
}

export default App;
