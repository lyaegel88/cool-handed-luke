import styles from './PowerGlobe.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff} from '@fortawesome/free-solid-svg-icons'

const PowerGlobe = props => {
    const color = props.power ? styles.colorOn : styles.colorOff;
    return (
        <div className={styles.powerGlobe}>
            <div className={styles.halfCircle} />
            <FontAwesomeIcon
                className={`${styles.icon} ${color}`}
                icon={faPowerOff}
                size="3x"
                onClick={props.handleOnClick}/>
        </div>
    )
}

export default PowerGlobe;
