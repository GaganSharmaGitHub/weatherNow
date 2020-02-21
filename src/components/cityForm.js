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
            
        <form onSubmit={this.handleSubmit} className='cityForm'>
        <input value={this.state.value} onChange={this.handleChange}></input>
        <button>Search</button>
    </form>
        )
    }
}
