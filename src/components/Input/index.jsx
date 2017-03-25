import React, { Component, PropTypes } from 'react';

import styles from './styles/input.css';

const hasValue = (value) => {
    if (typeof value === 'number') {
        return Boolean(value.toString().length);
    }
    
    return Boolean(value);
};

class Input extends Component {
    static propTypes = {
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
        handleOnChange: PropTypes.func.isRequired
    };
    
    state = {
        hasValue: hasValue(this.props.value),
        focus: false
    };
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            hasValue: hasValue(nextProps.value)
        });
    }
    
    handleOnBlur = () => {
        this.setState({
            focus: false
        });
    };
    
    handleOnFocus = () => {
        this.setState({
            focus: true
        });
    };
    
    handleOnChange = (e) => {
        this.props.handleOnChange(e);
    };
    
    render() {
        const { value, label } = this.props;
        const { hasValue, focus } = this.state;
        
        const hasValueClass = hasValue ? styles['has-value'] : '';
        const onFocusClass = focus ? styles.active : '';
        
        return (
            <div
                className={`${styles.wrap} ${hasValueClass} ${onFocusClass}`}>
                <label
                    className={styles.label}>
                    {label}
                </label>
                <input
                    type='text'
                    className={styles.input}
                    value={value}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                    onFocus={this.handleOnFocus}/>
                <div>
                    <hr className={styles.default}/>
                    <hr className={styles.full}/>
                </div>
            </div>
        );
    }
}

export default Input;
