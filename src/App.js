import React, {useState} from 'react';
import styles from './App.module.scss';
import PowerGlobe from "./components/PowerGlobe/PowerGlobe";
import NavLinks from "./components/NavLinks/NavLinks";

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


            <div>
                <h2 style={{color: "white"}}>Hello Test</h2>
            </div>
        </div>
    )
}

export default App;
