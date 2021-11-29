import {Col, Row} from "react-bootstrap";
import classes from "./DesktopProfile.module.scss";
import profilePic from "../../../resources/images/me.png";
import React, {useState} from "react";
import MediaQuery from 'react-responsive';

const DesktopProfile = () => {
    const [loaded, setLoaded] = useState(false);
    const profilePicStyle = loaded ? {} : {display: 'none'}

    return (
        <MediaQuery minWidth={1230}>
            <Row className="h-75">
                <Col xs={4}  className="align-self-center">
                    <div className={classes.NameCircle}>
                        <h1 className={classes.NameFont}>Luke <br/>Yaegel</h1>
                    </div>
                </Col>
                <Col xs={4} className="align-self-center">
                    {!loaded && <div className={classes.loader}>Loading...</div>}
                    <div className={classes.ProfileCircle} style={profilePicStyle}>
                        <img
                            src={profilePic}
                            alt={'profile'}
                            className={classes.ProfileImg}
                            onLoad={() => setLoaded(true)}
                        />
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