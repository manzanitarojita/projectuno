import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ROUTERS from '../../app/router';

import styles from './styles/nav.css';

class Navigation extends Component {
    constructor() {
        super();
        
        console.log('create menu');
    }
    
    render() {
        console.log('render menu');
        
        const linkHtml = ROUTERS.map((router, index) => (
                <div
                    key={index}
                    className={styles.item}>
                    <Link
                        to={router.path}>
                        {router.name}
                    </Link>
                </div>
            )
        );
        
        return (
            <div className={styles.menu}>
                {linkHtml}
            </div>
        );
    }
}

export default Navigation;
