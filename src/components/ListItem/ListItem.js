import './ListItem.module.scss'
import {useState} from "react";

const ListItem = props => {
    const [style, setStyle] = useState();

    const handleMouseEnter = () => {
        setStyle(props.effect)
    }

    const handleMouseLeave = () => {
        setStyle("")
    }

    return (
        <li
            className={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a href={props.path}>{props.children}</a>
        </li>
    )
}

export default ListItem;