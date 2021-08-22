import { ADD_CHAT, REMOVE_CHAT } from "../actions/chats";



const initialState = {
  
}

export default function chatsReducer(state = initialState, action){
    switch (action.type) {
        case REMOVE_CHAT: {
            delete state[action.payload.chatId]
            
            return {
                ...state
            }
        }
        case ADD_CHAT: {
          return {
            ...state,
            [action.payload.id]: action.payload
          }
        }
        default:
            return state
    }
}
   
