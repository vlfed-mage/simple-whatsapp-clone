import React, { useState } from 'react';

import './app.scss';

import Massage from '../massage';
import Input from '../input';

const initialMessages = [
    { id: 1, content: 'Hello there!', from: 'me' },
    { id: 2, content: 'How are you doing?', from: 'Steven' },
    { id: 3, content: 'Pretty Good', from: 'me' },
];

const App = () => {
    const [massages, setMassages] = useState(initialMessages);
    const [currentMassage, setCurrentMassage] = useState('');

    return (
        <div className='app-wrapper'>
            <div className='app-container'>
                {massages.map(({ id, ...massage }) => (
                    <Massage key={id} {...massage} />
                ))}
            </div>
            <Input
                value={currentMassage}
                onEnter={content => {
                    setCurrentMassage('');
                    setMassages([
                        ...massages,
                        { id: massages.length + 1, content, from: 'me' },
                    ]);
                }}
                onChange={content => setCurrentMassage(content)}
            />
        </div>
    );
};

export default App;
