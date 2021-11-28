import React from 'react';
import PageBorder from "../PageBorder/PageBorder";
import Mission from "../Mission/Mission";
import DesktopProfile from "./DesktopProfile/DesktopProfile";
import MobileProfile from "./MobileProfile/MobileProfile";

export const Profile = () => {
    return (
        <React.Fragment>
            <PageBorder>
                <DesktopProfile/>
                <MobileProfile/>
            </PageBorder>
            <Mission/>
        </React.Fragment>
    )
}