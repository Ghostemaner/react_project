import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../actions/weather";
import { WEATHER_REQUEST_STATUS } from "../../reducers/weather";
import { WEATHER_API } from "../../global/global";
import { WEATHER_ICON_PATH } from "../../global/global";


export default function Weather() {

    // const fetchData = () => {
    //     fetch(WEATHER_API)
    //     .then((response) => {
    //         console.log(response)

    //         return response.json()
    //     })
    //     .then((responseJson) => {
    //         console.log({responseJson})
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
       
    // }
    const dispatch = useDispatch()

    const { status, weather } = useSelector((state) => state.weather)
    

    React.useEffect(() => {
        dispatch(fetchWeather())
    }, [])

    console.log(weather[0])

    

    if (status === WEATHER_REQUEST_STATUS.LOADING) {
        return <div>Loading...</div>
    }

    return (
        <div className='weather-block'>
        {status !== WEATHER_REQUEST_STATUS.ERROR ? <p><img className='weather-icon' src={WEATHER_ICON_PATH+weather[0].WeatherIcon+'.svg'}/><br/>{weather[0].Temperature.Metric.Value}&deg;C <br/>{weather[0].WeatherText}</p> : <p>ERROR!</p>}
        </div>
)
}