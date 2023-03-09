import { useReducer } from 'react';

import reducer from '../reducer';

const initialMessages = [
    { id: 1, content: 'Hello there!', from: 'me' },
    { id: 2, content: 'How are you doing?', from: 'Steven' },
    { id: 3, content: 'Pretty Good', from: 'me' },
];

const useChatReducer = () => useReducer(reducer, { messages: initialMessages });

export default useChatReducer;
