import React from 'react'
function Weather(props) {
    console.log(props)
    return (
        <div className='weather'>
        <br></br>
        <div className='location'>
        <span className='cityName'><i class='fas fa-location-arrow'></i>  {props.weather.name}, </span>
        <span className='countryName'>{props.weather.sys.country}</span>
        </div>
        <div className='temperature'>
        <h2>
        <i class="fa fa-thermometer-full"></i> Temperature:
        </h2>
            <div className='temperatureMain'>Now:<br></br>{props.weather.main.temp}°C</div>
            <div className='temperatureMax'>Max:<br></br>{props.weather.main.temp_max}°C</div>
            <div className='temperaturMine'>Min:<br></br>{props.weather.main.temp_min}°C</div>
            <div className='temperatureFeelsLike'>Feels like:<br></br>{props.weather.main.feels_like}°C</div>
        </div>
        <div className='wind'>
        <h2>
        <i class='fas fa-wind'></i>Wind:
        </h2>
            <div className='windSpeed'>Speed:<br></br>{props.weather.wind.speed}</div>
            <div className='windDeg'>Angle:<br></br>{props.weather.wind.deg}°</div>
            </div>
        <div className='coord'>
        <h2>
        <i class='fas fa-crosshairs'></i>Location:
        </h2>
            <div className='coordLon'>Longitude:<br></br>{props.weather.coord.lon}</div>
            <div className='coordY'>Latitude:<br></br>{props.weather.coord.lat} </div>
        </div>
        <div className='visibility'>
        <h2>
        <i class='fa fa-low-vision'></i>Visibility:
        </h2>
        <div>{props.weather.visibility}</div>
        </div>
        
        <ul className='weatherCondition'>
            {props.weather.weather.map(item=><li key={item.id}>
                <img alt={item.main} src={'http://openweathermap.org/img/wn/'+item.icon+'.png'}/> 
                <div>
                <span className='weatherConditionMain'>{item.main}</span>
                <span className='weatherConditionDes'>{item.description}</span>
                </div>

            </li>)}
        </ul>

        </div>
    )
}
export default Weather