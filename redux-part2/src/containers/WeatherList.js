import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map((weather)=>weather.main.temp);
        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height={220} width={380} data={temps}>
                        <SparklinesLine color='red' />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);