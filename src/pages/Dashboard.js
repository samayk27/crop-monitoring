import React, { useEffect, useState } from "react";
import SensorDataCard from "../components/SensorDataCard";
import Chart from "../components/Chart";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-endpoint/sensors")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Crop Monitoring Dashboard</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.map((sensor, index) => (
          <SensorDataCard key={index} sensor={sensor} />
        ))}
      </div>
      <Chart data={data} />
    </div>
  );
}

export default Dashboard;
