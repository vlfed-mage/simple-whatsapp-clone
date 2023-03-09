import { useEffect, useRef } from 'react';
import { useChat } from './index';

const useScrollToBottom = () => {
    const { state } = useChat();
    const scrollContainer = useRef();

    useEffect(() => {
        if (!scrollContainer?.current) return;
        console.log('test');

        scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
    }, [state.messages]);

    return scrollContainer;
};

export default useScrollToBottom;
