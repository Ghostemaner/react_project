import {
    SHOW_WEATHER, 
    SHOW_STATUS_ERROR,
    SHOW_STATUS_LOADING,
    SHOW_STATUS_IDLE,
} from '../actions/weather'

export const WEATHER_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
}

const initialState  = {
    weather: [],
    status: WEATHER_REQUEST_STATUS.IDLE,
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_WEATHER:
            return {
                ...state,
                weather: action.payload.newWeather
            }
        case SHOW_STATUS_LOADING:
            return {
                ...state,
                status: WEATHER_REQUEST_STATUS.LOADING
            }
        case SHOW_STATUS_ERROR:
            return {
                ...state,
                status: WEATHER_REQUEST_STATUS.ERROR
            }
        case SHOW_STATUS_IDLE:
            return {
                ...state,
                status: WEATHER_REQUEST_STATUS.IDLE
            }
        default:
            return state
    }
}