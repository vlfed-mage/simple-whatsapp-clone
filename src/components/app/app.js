import React from 'react';

import './app.scss';

import { ChatProvider } from '../chat-context';
import { useChat, useFakeConvo, useScrollToBottom } from '../hooks';
import ChatMessage from '../chat-message';
import ChatInput from '../chat-input';

const App = () => {
    const { state } = useChat();

    useFakeConvo();

    const scrollRef = useScrollToBottom();

    return (
        <div className='app-wrapper'>
            <div className='app-container' ref={ref => (scrollRef.current = ref)}>
                {state.messages.map(message => (
                    <ChatMessage key={message.id} message={message} />
                ))}
            </div>
            <ChatInput />
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
