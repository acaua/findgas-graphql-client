import React from "react";

const Location = ({
  location: { lat, lng, number, street, city, district, state, zipCode }
}) => (
  <div className="row">
    <div className="col s12 l10 offset-l1">
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            <i className="material-icons left">my_location</i>
            Sua localização
            <span className="badge">
              latlng: {lat},{lng}
            </span>
          </span>
          <table className="striped">
            <tbody>
              <tr>
                <td>logradouro</td>
                <td>{street}</td>
              </tr>
              <tr>
                <td>número</td>
                <td>{number}</td>
              </tr>
              <tr>
                <td>bairro</td>
                <td>{district}</td>
              </tr>
              <tr>
                <td>cidade</td>
                <td>{city}</td>
              </tr>
              <tr>
                <td>estado</td>
                <td>{state}</td>
              </tr>
              <tr>
                <td>CEP</td>
                <td>{zipCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Location;
