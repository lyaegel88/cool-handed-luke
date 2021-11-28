import React, {useState} from 'react';
import styles from './App.module.scss';
import PowerGlobe from "./components/PowerGlobe/PowerGlobe";
import NavLinks from "./components/NavLinks/NavLinks";
import {Profile} from "./components/Profile/Profile";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const App = () => {
    const [powerOn, setPowerOn] = useState(true);

    const handlePowerButtonClick = () => {
        setPowerOn(!powerOn);
    }

    return (
        <div className={styles.backdrop}>
            <div className={styles.navContainer}>
                <div className={styles.navLinks}>
                    {/*Add logo/media icons/some media here later*/}
                </div>
                <div className={styles.powerGlobe}>
                    <PowerGlobe
                        handleOnClick={handlePowerButtonClick}
                        power={powerOn}/>
                    {powerOn && <NavLinks />}
                </div>
                <div className={styles.navLinks}>
                    {/*Add something here later?*/}
                </div>
            </div>

            <div className={styles.profile}>
                <Profile />
            </div>
            <div className={styles.mission}>
                <span className={styles.missionText}>I make software with LOVE
                    <FontAwesomeIcon style={{color: "red", padding: "5px"}}
                    icon={faHeart}
                    />
                    <br/>and that makes ALL the difference.</span>
            </div>
        </div>
    )
}

export default App;
