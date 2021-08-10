import { CHANGE_PROFILE_NAME } from '../actions/profile'
import { CHANGE_SHOW_INFO } from '../actions/profile'

const initialState = {
    name: 'Guest Guestov',
    age: 25,
    country: "Russian Federation",
    city: "Moscow",
    showInfo: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PROFILE_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }
        case CHANGE_SHOW_INFO: {
            return {
                ...state,
                showInfo: !state.showInfo,
            }
        }
        default:
            return state
    }
}