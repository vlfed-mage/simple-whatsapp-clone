import React from 'react';

import './input.scss';

const Input = ({ value, onEnter, onChange }) => {
    return (
        <textarea
            className='input'
            value={value}
            onKeyUp={e => (e.key === 'Enter' ? onEnter(e.target.value) : null)}
            onChange={e => onChange(e.target.value)}
        />
    );
};

export default Input;
