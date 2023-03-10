import React from 'react';

import './message.scss';

const Message = ({ message, isHighlighted, onQuoteClicked }) => {
    const { from, content } = message;
    const classNames = from === 'me' ? 'message sent' : 'message';

    return (
        <div className={classNames}>
            <div className={isHighlighted ? 'highlighted' : null}>{content}</div>
            {onQuoteClicked ? <span onClick={onQuoteClicked}>Quote</span> : null}
        </div>
    );
};

export default Message;
