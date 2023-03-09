import { useEffect } from 'react';

const useFakeMessage = ({ dispatch, message, from = 'Test', timeout = 5000 }) => {
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'ADD_MESSAGE', message, from });
        }, timeout);
    }, [dispatch, message, from, timeout]);
};

export default useFakeMessage;
