import React from 'react';

import styles from './styles/sub-menu.css';

const SubMenu = (props) => {
    return (
        <div className={styles.wrap}>
            {props.children}
        </div>
    );
};

export default SubMenu;
