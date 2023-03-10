import React from 'react';

import Input from '../input';

import { useChat } from '../hooks';

const ChatInput = () => {
    const { state, dispatch } = useChat();

    return (
        <Input
            value={state.currentMessage}
            onEnter={e => dispatch({ type: 'ADD_MESSAGE', message: e.target.value })}
            onChange={e => dispatch({ type: 'SET_CURRENT_MESSAGE', message: e.target.value })}
        />
    );
};

export default ChatInput;
