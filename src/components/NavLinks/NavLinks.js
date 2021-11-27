import styles from "./NavLinks.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBlog, faHome} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const NavLinks = () => {
    return (
        <React.Fragment>
            <div>
                <div className={styles.aboutContainer}>
                    <FontAwesomeIcon className={styles.about} icon={faAddressCard} size="2x"/>
                </div>
            </div>
            <div className={styles.homeContainer}>
                <FontAwesomeIcon className={styles.home} icon={faHome} size="2x"/>
            </div>
            <div>
                <div className={styles.blogContainer}>
                    <FontAwesomeIcon className={styles.blog} icon={faBlog} size="2x"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavLinks;