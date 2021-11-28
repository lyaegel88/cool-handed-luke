import styles from "./PageBorder.module.scss";
import React from "react";

const PageBorder = props => {
    return (
        <div className={styles.border}>{props.children}</div>
    )
}

export default PageBorder;