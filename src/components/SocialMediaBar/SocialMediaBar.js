import styles from "./SocialMediaBar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faGithubSquare, faLinkedin, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const SocialMediaBar = () => {
    return (
        <div className={styles.socialMediaContainer}>
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
            <a href="https://www.facebook.com/lyaegel" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    className={styles.socialMediaIcons}
                    icon={faFacebookSquare}
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
            )
}
export default SocialMediaBar;