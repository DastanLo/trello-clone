import React from 'react';
import './Alert.css';

const Alert = ({text}) => {
    return (
        <div className="alert__box">
          {text}
        </div>
    );
};

export default Alert;
