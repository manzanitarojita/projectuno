import React from 'react';

import Navigation from '../components/Navigation';

import styles from './main.css';

const MainLayout = (props) => {
    return (
        <div className={ styles.main }>
            <div className={ styles.header }>
                <Navigation />
            </div>
            <div className={ styles.content }>
                { props.children }
            </div>
        </div>
    );
};

export default MainLayout;
