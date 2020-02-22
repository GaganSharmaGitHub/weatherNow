import React, { Component } from 'react'

export default class CityForm extends Component {
    constructor(){
        super()
        this.state={
            value:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
       this.props.updateWeather(this.state.value)
    }
    handleChange(e){
        this.setState({value:e.target.value})
        console.log(this.state.value)
    }
    render() {
        return (
        <div className='formContainer'>
        <h2>Enter your city name.....</h2>
        <h3 className='message'>{this.props.message}</h3>
        <br></br>
        <form onSubmit={this.handleSubmit} className='cityForm'>
        <input value={this.state.value} onChange={this.handleChange}></input>
        <button><i className="fa fa-search"></i></button>
    </form>
    </div>
        )
    }
}
