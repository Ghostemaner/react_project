import { authors, scrollToBottom } from "../global/global"

export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE'


export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const sendMessageThunk = (chatId, message) => {
    

    return (dispatch, getState) => {
        dispatch (sendMessage(chatId, message))
        
        const data = new Date();

        const getTime = () => {
            return data.getHours() + ":" + data.getMinutes();
        }
        
        

        let call = setTimeout(() => {
            dispatch(sendMessage(
                chatId, 
                {
                    id: `message${Date.now()}`,
                    author: authors.bot,
                    text: 'Your message has been sent',
                    messageTime: getTime()
                })
            )

            clearTimeout(call)
           if(chatId) {
            scrollToBottom()
           }
        }, 1500);

    }
}