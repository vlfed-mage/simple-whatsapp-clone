import { useEffect, useRef } from 'react';

const useScrollToBottom = messages => {
    const scrollContainer = useRef();

    useEffect(() => {
        if (!scrollContainer?.current) return;
        console.log('test');

        scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
    }, [messages]);

    return scrollContainer;
};

export default useScrollToBottom;
