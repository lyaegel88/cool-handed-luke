import React from 'react';
import PageBorder from "../PageBorder/PageBorder";
import DesktopProfile from "./DesktopProfile/DesktopProfile";
import MobileProfile from "./MobileProfile/MobileProfile";
import TextBox from "../TextBox/TextBox";
import styles from "../../resources/scss/textbox.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
    const text = <span>I make software with LOVE
                    <FontAwesomeIcon
                        style={{color: "red", padding: "5px"}}
                        icon={faHeart}
                    />
                    <br/>and that makes ALL the difference.</span>
    return (
        <React.Fragment>
            <PageBorder>
                <DesktopProfile/>
                <MobileProfile/>
            </PageBorder>
            <TextBox text={text} containerStyle={styles.mission} textStyle={styles.missionText}/>
        </React.Fragment>
    )
}