import {Col, Row} from "react-bootstrap";
import classes from "./MobileProfile.module.scss";
import profilePic from "../../../resources/images/IMG_2283.HEIC";
import React from "react";
import MediaQuery from 'react-responsive';

const MobileProfile = () => {
    return (
        <MediaQuery maxWidth={1229}>
            <Row>
                <Col xs={12}  className="align-self-center">
                    <div className={classes.NameCircle}>
                        <span className={classes.NameFont}>Luke <br/>Yaegel</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="align-self-center">
                    <div className={classes.ProfileCircle}>
                        <img src={profilePic} alt={'profile'} className={classes.ProfileImg}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="align-self-center">
                    <div className={classes.TitleCircle}>
                        <span className={classes.TitleFont}>Software Developer</span>
                    </div>
                </Col>
            </Row>
        </MediaQuery>
    )
}

export default MobileProfile;