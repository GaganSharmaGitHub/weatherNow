import React from 'react'
function Weather(props) {
    console.log(props)
    return (
        <div className='weather'>
        <span className='cityName'>{props.weather.name}, </span>
        <span className='countryName'>{props.weather.sys.country}</span>
        <div className='temperature'>
            <div className='temperatureMain'>{props.weather.main.temp}°C</div>
            <div className='temperatureMax'>{props.weather.main.temp_max}°C</div>
            <div className='temperaturMine'>{props.weather.main.temp_min}°C</div>
            <div className='temperatureFeelsLike'>{props.weather.main.feels_like}°C</div>
        </div>
        <div className='wind'>
            <div className='windSpeed'>{props.weather.wind.speed}</div>
            <div className='windDeg'>{props.weather.wind.deg}°</div>
        <div className='coord'>
            <div className='coordLon'>{props.weather.coord.lon}</div>
            <div className='coordY'>{props.weather.coord.lat} </div>
        </div>
        </div>
        <ul className='weatherCondition'>
            {props.weather.weather.map(item=><li key={item.id}>
                <img alt={item.main} src={'http://openweathermap.org/img/wn/'+item.icon+'.png'}/> 
                <span className='weatherConditionMain'>{item.main}</span>
                <span className='weatherConditionDes'>{item.description}</span>
            </li>)}
        </ul>
        <div className='visibility'>{props.weather.visibility}</div>

        </div>
    )
}
export default Weather