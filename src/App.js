import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import GasStation from "./components/GasStation";
import Location from "./components/Location";

const GET_GAS_STATIONS = gql`
  query GasStations($lat: String!, $lng: String!) {
    gasStations(lat: $lat, lng: $lng) {
      location {
        lat
        lng
        number
        street
        city
        district
        state
        zipCode
      }
      gasStations {
        name
        address
        lat
        lng
      }
    }
  }
`;

class App extends Component {
  state = { lat: null, lng: null };

  searchGasStations = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({
          lat: latitude.toString(),
          lng: longitude.toString()
        })
    );
  };

  render() {
    const { lat, lng } = this.state;
    return (
      <div className="App container">
        <h3 className="center">Encontre postos de gasolina próximos</h3>
        <div className="center" style={{ marginBottom: 36 }}>
          <button onClick={this.searchGasStations} className="btn-large">
            Buscar <i className="material-icons right">my_location</i>
          </button>
        </div>
        {lat && lng ? (
          <Query query={GET_GAS_STATIONS} variables={{ lat, lng }}>
            {({ loading, error, data }) => {
              if (loading)
                return (
                  <div className="container" style={{ marginTop: 72 }}>
                    <div className="progress ">
                      <div className="indeterminate" />
                    </div>
                  </div>
                );

              if (error) return `Error!: ${error}`;

              const {
                gasStations: { location, gasStations }
              } = data;
              return (
                <div>
                  <Location location={location} />
                  <h3>Postos de gasolina abertos</h3>
                  {gasStations.map(gasStation => (
                    <GasStation key={gasStation.lat} gasStation={gasStation} />
                  ))}
                </div>
              );
            }}
          </Query>
        ) : null}
      </div>
    );
  }
}

export default App;
