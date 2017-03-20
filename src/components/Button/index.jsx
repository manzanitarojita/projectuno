import React, { PropTypes } from 'react';

import styles from './styles/button.css';

const Button = (props) => {
    const { handleClick, title, disabled, className } = props;
    
    const allClass = `${styles.button} ${className}`;
    
    return (
        <button
            className={allClass}
            type='button'
            disabled={disabled}
            onClick={handleClick}>
            { title }
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    handleClick: () => {
    },
    disabled: false,
    className: ''
};

export default Button;