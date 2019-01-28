import React, { Component } from 'react';
import { connect } from 'react-redux';

import '.App.css';

import { toggleFavoritedCity } from './models/actions/toggleFavoritedCity';
import { removeCity } from './models/actions/index';

class List extends Component {
  state = { favorited: false }

  favoritedCity(event, city) {
    event.preventDefault();
    const { toggleCity } = this.props;

    this.setState({ favorited: !this.state.favorited })
    toggleCity(city.id);
  }

  removeCity(event, city) {
    event.preventDefault();
    const { removeCity } = this.props;

    removeCity(city.id);
  }

  citiesList() {
    const { cities } = this.props.cities;
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
  toggleFavoritedCity
  , removeCity
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
