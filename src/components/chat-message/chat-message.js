import React from 'react';

import { useChat } from '../hooks';
import Message from '../message';

const ChatMessage = ({ message }) => {
    const { state, dispatch } = useChat();
    const { id } = message;

    return (
        <Message
            message={message}
            isHighlighted={id === state.highlightedMessageId}
            onQuoteClicked={() => dispatch({ type: 'QUOTE_MESSAGE', id })}
        />
    );
};

export default ChatMessage;
