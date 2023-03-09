import { useEffect } from 'react';

const useFakeMessage = ({ setMessages, message, from = 'Test', timeout = 5000 }) => {
    useEffect(() => {
        setTimeout(() => {
            setMessages(m => [...m, { id: m.length + 1, content: message, from }]);
        }, timeout);
    }, [setMessages, message, from, timeout]);
};

export default useFakeMessage;
