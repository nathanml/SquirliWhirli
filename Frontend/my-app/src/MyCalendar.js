import React, {Component} from 'react';
import Calendar from "react-calendar"

export default class MyCalendar extends Component{
    state = {
        date: new Date(),
    }


onChange = date => this.setState({date})

render(){
    return(
        <div>
            <MyCalendar
                onChange = {this.onChange}
                showWeekNumbers
                value = {this.state.date}
               />
        </div>
        )
    }
}