import {Col, Row} from "react-bootstrap";
import classes from "./MobileProfile.module.scss";
import profilePic from "../../../resources/images/me.png";
import React from "react";
import MediaQuery from 'react-responsive';
import {faFacebookSquare, faLinkedin, faGithubSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                    <div className={classes.iconsContainer}>
                        <a href="https://www.facebook.com/lyaegel" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                className={`${classes.facebookIcon} ${classes.icons}`}
                                icon={faFacebookSquare}
                                size="3x"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/luke-y-7b720a119/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                className={`${classes.linkedInIcon} ${classes.icons}`}
                                icon={faLinkedin}
                                size="3x"
                            />
                        </a>
                        <a href="https://github.com/lyaegel88" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                className={`${classes.githubIcon} ${classes.icons}`}
                                icon={faGithubSquare}
                                size="3x"
                            />
                        </a>
                        <a href="https://www.youtube.com/channel/UCJack1E0CO_5WMB01wB4XSA" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                className={`${classes.youtubeIcon} ${classes.icons}`}
                                icon={faYoutubeSquare}
                                size="3x"
                            />
                        </a>
                    </div>
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