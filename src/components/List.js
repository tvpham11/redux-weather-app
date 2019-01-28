import React, { Component } from 'react';
import { connect } from 'react-redux';

import '.App.css';

import { toggleFavoritedCity } from './models/actions/toggleFavoritedCity';
import { removeCity } from './models/actions/removeCity';

class List extends Component {
  state = { favorited: false }

  favoritedCity(event, city) {
    event.preventDefault();
    const { toggleCity } = this.props;

    this.setState({ favorited: !this.state.favorited })
    toggleCity(city.id);
  }

  deleteCity(event, city) {
    event.preventDefault();
    const { deleteCity } = this.props;

    deleteCity(city.id);
  }

  citiesList() {
    const { cities } = this.props;
    console.log(cities);
    return cities.map((city) =>
      <li key = { city.id } >
          { city.name }
      </li>
    )
  }

  render() {
    return (
      <div>
        <p>Most recently searched cities:</p>
        <hr />
        <ul>
          { this.citiesList() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities
})

const mapDispatchToProps = {
  toggleFavoritedCity, removeCity
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
