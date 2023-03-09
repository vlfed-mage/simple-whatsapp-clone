import React from 'react';

import ChatContext from './chat-context';
import useChatReducer from '../hooks/use-chat-reducer';

const ChatProvider = ({ children }) => {
    const { Provider } = ChatContext;
    const [state, dispatch] = useChatReducer();

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default ChatProvider;
