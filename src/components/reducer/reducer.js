const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return { ...state, messages: action.messages };
        case 'ADD_MESSAGE':
            return {
                ...state,
                highlightedMessageId: '',
                currentMessage: action.from === 'me' ? '' : state.currentMessage,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length + 1,
                        content: action.message,
                        from: action.from,
                    },
                ],
            };
        case 'SET_CURRENT_MESSAGE':
            return { ...state, currentMessage: action.message };
        case 'QUOTE_MESSAGE':
            const quotedMessage = state.messages.find(message => message.id === action.id);
            return {
                ...state,
                currentMessage: `"${quotedMessage.content}" `,
                highlightedMessageId: action.id,
            };
        default:
            return state;
    }
};

export default reducer;
