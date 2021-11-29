import styles from "./Navigation.module.scss";
import PowerGlobe from "../PowerGlobe/PowerGlobe";
import NavLinks from "../NavLinks/NavLinks";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faLinkedin, faGithubSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"

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
                <div className={styles.socialMediaContainer}>
                    <a href="https://www.facebook.com/lyaegel" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            className={styles.socialMediaIcons}
                            icon={faFacebookSquare}
                            size="2x"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/luke-y-7b720a119/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            className={styles.socialMediaIcons}
                            icon={faLinkedin}
                            size="2x"
                        />
                    </a>
                    <a href="https://github.com/lyaegel88" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            className={styles.socialMediaIcons}
                            icon={faGithubSquare}
                            size="2x"
                        />
                    </a>
                    <a href="https://www.youtube.com/channel/UCJack1E0CO_5WMB01wB4XSA" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            className={styles.socialMediaIcons}
                            icon={faYoutubeSquare}
                            size="2x"
                        />
                    </a>
                </div>
                {/*Add something here later?*/}
            </div>
        </div>
    )
}

export default Navigation;