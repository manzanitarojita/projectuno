import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SubMenu from '../../components/SubMenu';
import CompaniesService from '../../app/bi/services/companies';

import AddForm from './forms/add';

import styles from './styles/companies.css';

class Companies extends Component {
    state = {
        list: CompaniesService.get(),
        hasAddForm: false
    };
    
    handleAddCompany = () => {
        this.setState({
            hasAddForm: !this.state.hasAddForm
        })
    };
    
    handleCloseCompany = () => {
        this.setState({
            list: CompaniesService.get(),
            hasAddForm: false
        });
    };
    
    renderAddForm() {
        return (
            <AddForm
                companiesService={CompaniesService}
                handleClose={this.handleCloseCompany}/>
        );
    }
    
    renderList() {
        const { list } = this.state;
        
        const html = list.map((item, ind) => {
            return (
                <div
                    key={`company__${ind}`}
                    className={styles.item}>
                    <div className={styles.name}>
                        {item.Name}
                    </div>
                    <div className={styles.inn}>
                        {item.INN}
                    </div>
                    <div className={styles.action}>
                        <Link to={`/document/${item.Id}`}>
                            doc
                        </Link>
                    </div>
                </div>
            );
        });
        
        return (
            <div className={styles.list}>
                {html}
            </div>
        );
    }
    
    renderEmpty() {
        return (
            <div className={styles.empty}>
                List of companies empty
            </div>
        );
    }
    
    render() {
        const { list, hasAddForm } = this.state;
        
        let html = null;
        if (hasAddForm) {
            html = this.renderAddForm();
        } else if (list.length) {
            html = this.renderList();
        } else {
            html = this.renderEmpty();
        }
        
        return (
            <div className={styles.wrap}>
                <SubMenu>
                    <a onClick={ this.handleAddCompany }>
                        Add company
                    </a>
                </SubMenu>
                {html}
            </div>
        );
    }
}

export default Companies;
