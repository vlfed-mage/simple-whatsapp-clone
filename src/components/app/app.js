import React from 'react';

import './app.scss';

import Message from '../message';
import Input from '../input';
import { useChat, useFakeConvo, useScrollToBottom } from '../hooks';
import { ChatProvider } from '../chat-context';

const App = () => {
    const { state } = useChat();

    useFakeConvo();

    const scrollRef = useScrollToBottom();

    return (
        <div className='app-wrapper'>
            <div className='app-container' ref={ref => (scrollRef.current = ref)}>
                {state.messages.map(message => (
                    <Message key={message.id} {...message} />
                ))}
            </div>
            <Input />
        </div>
    );
};

const AppContainer = () => {
    return (
        <ChatProvider>
            <App />
        </ChatProvider>
    );
};

export default AppContainer;
