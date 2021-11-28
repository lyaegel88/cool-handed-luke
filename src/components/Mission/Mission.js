import styles from "./Mission.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Mission = () => {
    return (
        <div className={styles.mission}>
                <span className={styles.missionText}>I make software with LOVE
                    <FontAwesomeIcon
                        style={{color: "red", padding: "5px"}}
                        icon={faHeart}
                    />
                    <br/>and that makes ALL the difference.</span>
        </div>
    )
}

export default Mission;