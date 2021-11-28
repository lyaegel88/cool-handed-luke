import React from 'react';
import classes from './Profile.module.scss';
import profilePic from '../../assets/images/IMG_2283.HEIC'
import {Col, Row} from "react-bootstrap";
import MediaQuery from 'react-responsive';

export const Profile = () => {
    return (
        <React.Fragment>
            <MediaQuery minWidth={1230}>
                <Row className="h-75">
                    <Col xs={4}  className="align-self-center">
                        <div className={classes.NameCircle}>
                            <h1 className={classes.NameFont}>Luke <br></br>Yaegel</h1>
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
            <MediaQuery maxWidth={1229}>
                <Row>
                    <Col xs={12}  className="align-self-center">
                        <div className={classes.NameCircle}>
                            <span className={classes.NameFont}>Luke <br></br>Yaegel</span>
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
        </React.Fragment>
    )
}