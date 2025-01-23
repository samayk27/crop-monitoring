// components/SensorDataCard.js
import React from "react";

function SensorDataCard({ sensor }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <h3>{sensor.name}</h3>
      <p>Value: {sensor.value}</p>
      <p>Last Updated: {new Date(sensor.timestamp).toLocaleString()}</p>
    </div>
  );
}

export default SensorDataCard;
