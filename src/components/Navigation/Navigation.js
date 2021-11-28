import styles from "./Navigation.module.scss";
import PowerGlobe from "../PowerGlobe/PowerGlobe";
import NavLinks from "../NavLinks/NavLinks";
import React, {useState} from "react";

const Navigation = () => {
    const [powerOn, setPowerOn] = useState(true);

    const handlePowerButtonClick = () => {
        setPowerOn(!powerOn);
    }
    return (
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
    )
}

export default Navigation;