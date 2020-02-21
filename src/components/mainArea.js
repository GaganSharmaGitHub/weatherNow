import React, { Component } from 'react'
import Weather from './weather'
import CityForm from './cityForm'
export default class MainArea extends Component {
    constructor(){
        super()
        this.state={
        g:"Londo",
         weather:{},
         citySet: false
        }
        this.updateWeather=this.updateWeather.bind(this)
        //this.changeLocation=this.changeLocation.bind(this)
    }
    cityNotFound(){
        console.log("citynof")
    }
  componentDidMount(){
      
  }
    updateWeather(x){
  
        this.setState(()=>({g:x}))
        console.log(this.state.g)
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+x+'&units=metric&appid=829747148cd13f93fc7229560a610117'
  
    fetch(url)
  .then((resp) => resp.json())
  .then(data => {
    if(data.message!=='city not found')  {
    this.setState(()=>({weather: data,citySet:true}))
    
    }
    else{
        this.cityNotFound()
    }
    console.log(this.state)
    })
  
}  
    render() {
        return (
            <div className='mainArea'>
                {this.state.citySet?<Weather weather={this.state.weather} />:
                <CityForm updateWeather={this.updateWeather}></CityForm>}
            </div>
        )
    }
}
