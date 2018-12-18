import React from "react";

const GasStation = ({ gasStation }) => (
  <div className="card" key={gasStation.lat}>
    <div className="card-content">
      <span className="card-title">
        <i className="material-icons left">local_gas_station</i>
        {gasStation.name}
      </span>
      <p>
        lat : {gasStation.lat}, lng: {gasStation.lng}
      </p>
      <a
        href={`https://maps.google.com/?q=${gasStation.address}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {gasStation.address}
      </a>
    </div>
  </div>
);

export default GasStation;
