import {Col, Row} from "react-bootstrap";
import classes from "./DesktopProfile.module.scss";
import profilePic from "../../../resources/images/IMG_2283.HEIC";
import React from "react";
import MediaQuery from 'react-responsive';

const DesktopProfile = () => {
    return (
        <MediaQuery minWidth={1230}>
            <Row className="h-75">
                <Col xs={4}  className="align-self-center">
                    <div className={classes.NameCircle}>
                        <h1 className={classes.NameFont}>Luke <br/>Yaegel</h1>
                    </div>
                </Col>
                <Col xs={4} className="align-self-center">
                    <div className={classes.ProfileCircle}>
                        <img src={profilePic} alt={'profile'} className={classes.ProfileImg}/>
                    </div>
                </Col>
                <Col xs={4} className="align-self-center">
                    <div className={classes.TitleCircle}>
                        <h1 className={classes.TitleFont}>Software Developer</h1>
                    </div>
                </Col>
            </Row>
        </MediaQuery>
    )
}

export default DesktopProfile;