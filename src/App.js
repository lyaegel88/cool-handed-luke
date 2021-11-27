import React from 'react';
import styles from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import {faHome, faBlog, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const App = () => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.navContainer}>
                <div className={styles.navLinks}>
                    <div className={styles.leftContainer}>
                       {/*Add logo/media icons/some media here later*/}
                    </div>
                </div>
                <div className={styles.navLinks}>
                    <Navbar/>
                    <div className={styles.navIcons}>
                        <div>
                            <div className={styles.aboutContainer}>
                                <FontAwesomeIcon className={styles.about} icon={faAddressCard} size="2x"/>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon className={styles.home} icon={faHome} size="2x"/>
                        </div>
                        <div>
                            <div className={styles.blogContainer}>
                                <FontAwesomeIcon className={styles.blog} icon={faBlog} size="2x"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navLinks}>
                    {/*Add something here later?*/}
                </div>
            </div>


            <div>
                <h2 style={{color: "white"}}>Hello Test</h2>
            </div>
        </div>
    )
}

export default App;
