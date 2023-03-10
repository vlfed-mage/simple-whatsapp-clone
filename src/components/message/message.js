import React from 'react';

import './message.scss';

import { useChat } from '../hooks';

const Message = ({ content, from, id }) => {
    console.log(content, from, id);
    const { state, dispatch } = useChat();
    const classNames = from === 'me' ? 'message sent' : 'message';

    return (
        <div className={classNames}>
            <div className={id === state.highlightedMessageId ? 'highlighted' : null}>
                {content}
            </div>
            <span onClick={() => dispatch({ type: 'QUOTE_MESSAGE', id })}>Quote</span>
        </div>
    );
};

export default Message;
