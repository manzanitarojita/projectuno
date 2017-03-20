import React from 'react';

import CompaniesService from '../../app/bi/services/companies';

import styles from './styles/companies.css';

const Companies = () => {
    const list = CompaniesService.get();
    
    if (list.length) {
        return (
            <div></div>
        );
    }
    
    return (
        <div className={styles.wrap}>
            List of companies empty
        </div>
    );
};

export default Companies;
