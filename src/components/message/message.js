import React from 'react';

import './message.scss';

const Message = ({ content, from }) => {
    const classNames = from === 'me' ? 'message sent' : 'message';
    return (
        <div className={classNames}>
            <div>{content}</div>
        </div>
    );
};

export default Message;
