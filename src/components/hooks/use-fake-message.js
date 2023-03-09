import { useEffect } from 'react';

import { useChat } from './index';

const useFakeMessage = ({ message, from = 'Test', timeout = 5000 }) => {
    const { dispatch } = useChat();
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'ADD_MESSAGE', message, from });
        }, timeout);
    }, [dispatch, message, from, timeout]);
};

export default useFakeMessage;
