import { WEATHER_API } from "../global/global";

export const SHOW_WEATHER = 'WEATHER::SHOW_WEATHER'
export const SHOW_STATUS_ERROR = 'WEATHER::SHOW_STATUS_ERROR'
export const SHOW_STATUS_LOADING = 'WEATHER::SHOW_STATUS_LOADING'
export const SHOW_STATUS_IDLE = "WEATHER::SHOW_STATUS_IDLE"

export const setStatusError = () => ({ type: SHOW_STATUS_ERROR})

export const setStatusLoading = () => ({ type: SHOW_STATUS_LOADING })

export const setStatusIdle = () => ({ type: SHOW_STATUS_IDLE })

export const showWeather = (newWeather) => ({
    type: SHOW_WEATHER,
    payload: {
        newWeather,
    }
})

export const fetchWeather = () => {
    return (dispatch, getState) => {
        dispatch(setStatusLoading())

        fetch(WEATHER_API)
            .then((response) => {
                if(!response.ok || response.status !== 200) {
                    throw Error(`it ain't work`)
                }
                
                return response.json()
            })
            .then((responseJson) => {
                dispatch(showWeather(responseJson))
                dispatch(setStatusIdle())
            })
            .catch((error) => {
                console.error('Error', error)

                dispatch(setStatusError())
            })
    }
}
