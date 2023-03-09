import React, { useState } from 'react';

import './app.scss';

import Message from '../message';
import Input from '../input';
import { useFakeConvo, useScrollToBottom } from '../hooks';

const initialMessages = [
    { id: 1, content: 'Hello there!', from: 'me' },
    { id: 2, content: 'How are you doing?', from: 'Steven' },
    { id: 3, content: 'Pretty Good', from: 'me' },
];

const App = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [currentMessage, setCurrentMessage] = useState('');

    useFakeConvo(setMessages);

    const scrollRef = useScrollToBottom(messages);

    return (
        <div className='app-wrapper'>
            <div className='app-container' ref={ref => (scrollRef.current = ref)}>
                {messages.map(({ id, ...message }) => (
                    <Message key={id} {...message} />
                ))}
            </div>
            <Input
                value={currentMessage}
                onEnter={content => {
                    setCurrentMessage('');
                    setMessages([
                        ...messages,
                        { id: messages.length + 1, content, from: 'me' },
                    ]);
                }}
                onChange={content => setCurrentMessage(content)}
            />
        </div>
    );
};

export default App;
