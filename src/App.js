import React from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '2a0f33fbf7b1f8aa1b6d8e746d3eff7f';

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch  (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);

    const weatherData = await api_call.json();
    console.log(weatherData);

    this.setState({
      city: weatherData.name,
      country: weatherData.sys.country,
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      description: weatherData.weather[0].description,
      error: undefined
    });
    
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          humidity = {this.state.humidity}
          description = {this.state.description}
        />
      </div>
    );
  }
}

export default App;