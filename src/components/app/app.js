import React from 'react';

import './app.scss';

import Message from '../message';
import Input from '../input';
import { useFakeConvo, useScrollToBottom } from '../hooks';
import useChatReducer from '../hooks/use-chat-reducer';

const App = () => {
    const [state, dispatch] = useChatReducer();

    useFakeConvo(dispatch);

    const scrollRef = useScrollToBottom(state.messages);

    return (
        <div className='app-wrapper'>
            <div className='app-container' ref={ref => (scrollRef.current = ref)}>
                {state.messages.map(({ id, ...message }) => (
                    <Message key={id} {...message} />
                ))}
            </div>
            <Input
                value={state.currentMessage}
                onEnter={message => dispatch({ type: 'ADD_MESSAGE', message })}
                onChange={message => dispatch({ type: 'SET_CURRENT_MESSAGE', message })}
            />
        </div>
    );
};

export default App;
