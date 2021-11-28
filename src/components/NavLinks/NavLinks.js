import styles from "./NavLinks.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBlog, faHome} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

const NavLinks = () => {
    return (
        <React.Fragment>
            <div>
                <div className={styles.aboutContainer}>
                    <Link to="/about">
                        <FontAwesomeIcon className={styles.about} icon={faAddressCard} size="2x"/>
                    </Link>
                </div>
            </div>
            <div className={styles.homeContainer}>
                <Link to="/">
                    <FontAwesomeIcon className={styles.home} icon={faHome} size="2x"/>
                </Link>
            </div>
            <div>
                <div className={styles.blogContainer}>
                    <Link to="/blog">
                        <FontAwesomeIcon className={styles.blog} icon={faBlog} size="2x"/>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavLinks;