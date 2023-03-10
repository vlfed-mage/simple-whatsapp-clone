import React from 'react';

import './input.scss';

const Input = ({ value, onChange, onEnter }) => {
    return (
        <textarea
            className='input'
            value={value}
            onKeyUp={e => (e.key === 'Enter' ? onEnter(e) : null)}
            onChange={onChange}
        />
    );
};

export default Input;
