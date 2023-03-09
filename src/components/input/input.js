import React from 'react';

import './input.scss';
import { useChat } from '../hooks';

const Input = () => {
    const { state, dispatch } = useChat();
    return (
        <textarea
            className='input'
            value={state.currentMessage}
            onKeyUp={e =>
                e.key === 'Enter'
                    ? dispatch({ type: 'ADD_MESSAGE', message: e.target.value })
                    : null
            }
            onChange={e => dispatch({ type: 'SET_CURRENT_MESSAGE', message: e.target.value })}
        />
    );
};

export default Input;
