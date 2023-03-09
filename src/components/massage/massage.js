import React from 'react';

import './massage.scss';

const Massage = ({ content, from }) => {
    const classNames = from === 'me' ? 'massage sent' : 'massage';
    return (
        <div className={classNames}>
            <div>{content}</div>
        </div>
    );
};

export default Massage;
