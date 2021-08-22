export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE'

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message
    }
})