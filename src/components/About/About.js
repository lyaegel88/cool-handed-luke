import React, {useState} from 'react';
import style from './About.module.scss';
import PageBorder from "../PageBorder/PageBorder";
import birthdayPhoto from "../../resources/images/mom_dad_chan_mickey.jpg"
import poolPhoto from "../../resources/images/luke_pool_table.jpg"
import dogsPhoto from "../../resources/images/dogs.jpg"
import TextBox from "../TextBox/TextBox";
import styles from "../../resources/scss/textbox.module.scss";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

const About = () => {
    const [loaded, setLoaded] = useState(false);
    const [loadedSecond, setLoadedSecond] = useState(false);
    const [loadedThird, setLoadedThird] = useState(false);

    const topPageText = <span>Welcome!<br/>
        I'm Luke, a Software Engineer.<br/>
        I'm also a Father, Husband and owner of a few fur babies.
    </span>
    const bottomPageText = <span>Visit the sites below for more details on my career.<br/>
    <SocialMediaBar/>
    </span>

    return (
        <React.Fragment>
            <TextBox text={topPageText} containerStyle={styles.aboutContainer} textStyle={styles.aboutText}/>
            <PageBorder>
                <div className={style.aboutContainer}>
                    <div className={style.photos}>
                        {!loaded && <div className={style.loadingBox}><div className={style.loader}>Loading...</div></div>}
                        <img  src={poolPhoto} alt="Luke at the pool table" onLoad={() => setLoaded(true)}/>
                    </div>
                    <div className={style.photos}>
                        {!loadedSecond && <div className={style.loadingBox}><div className={style.loader}>Loading...</div></div>}
                        <img src={birthdayPhoto} alt="Mom, Dad, Chandler and Mickey" onLoad={() => setLoadedSecond(true)}/>
                    </div>
                    <div className={style.photos}>
                        {!loadedThird && <div className={style.loadingBox}><div className={style.loader}>Loading...</div></div>}
                        <img src={dogsPhoto} alt="Yaegel Family Dogs" onLoad={() => setLoadedThird(true)}/>
                    </div>
                </div>
            </PageBorder>
            <TextBox text={bottomPageText} containerStyle={styles.aboutContainer} textStyle={styles.aboutText}/>
            <br/>
        </React.Fragment>
    )
}

export default About;