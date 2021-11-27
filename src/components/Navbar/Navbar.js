import styles from './Navbar.module.scss'
// import ListItem from "../ListItem/ListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faAddressCard, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff, faHome} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.halfCircle} />
            <FontAwesomeIcon className={styles.icon} icon={faPowerOff} size="3x"/>
        </div>
    )
}

export default Navbar;
