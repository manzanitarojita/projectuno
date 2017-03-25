import React, { Component, PropTypes } from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from '../styles/form.css';

class AddForm extends Component {
    static propTypes = {
        companiesService: PropTypes.object.isRequired,
        handleClose: PropTypes.func.isRequired
    };
    
    state = {
        Name: '',
        ShortName: '',
        INN: '',
        Type: this.props.companiesService.getCompanyType().DEFAULT,
        
        open: false
    };
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                open: true
            });
        }, 100);
    }
    
    handleChangeInput = (field, value) => {
        this.setState({
            [field]: value
        });
    };
    
    handleConfirm = () => {
        const { companiesService, handleClose } = this.props;
        const { Name, ShortName, INN, Type } = this.state;
        
        companiesService.add({
            Name,
            ShortName,
            INN,
            Type
        });
        handleClose();
    };
    
    render() {
        const { Name, ShortName, INN, open } = this.state;
        
        return (
            <div className={`${styles.wrap} ${open ? styles.active : ''}`}>
                <div className={styles.form}>
                    <div></div>
                    <div>
                        <Input
                            value={Name}
                            label='Company name'
                            handleOnChange={ (e) => this.handleChangeInput('Name', e.target.value) }/>
                    </div>
                    <div>
                        <Input
                            value={ShortName}
                            label='Short company name'
                            handleOnChange={ (e) => this.handleChangeInput('ShortName', e.target.value) }/>
                    </div>
                    <div>
                        <Input
                            value={INN}
                            label='INN'
                            handleOnChange={ (e) => this.handleChangeInput('INN', e.target.value) }/>
                    </div>
                    <div>
                        <Button
                            title='Confirm'
                            handleClick={this.handleConfirm}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddForm;
