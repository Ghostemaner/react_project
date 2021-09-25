export const authors = {
    person: 'Guest',
    bot: "BOT"
}

export const scrollToBottom = () => {
    const div = document.getElementById("mess-list");
    if(div) {
        div.scrollTop = div.scrollHeight - div.clientHeight;
    }
    
}

export const WEATHER_API = 'http://dataservice.accuweather.com/currentconditions/v1/294021?apikey=ny16VNhVTi8CBN1f0LWXqHEQ9XWoaD8Q&language=ru-ru'

export const WEATHER_ICON_PATH = 'https://www.accuweather.com/images/weathericons/'

