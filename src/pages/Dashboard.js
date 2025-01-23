// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase-config.js"; // Path to your Firebase config

const db = getFirestore(app);

function Dashboard() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const cropsCollection = collection(db, "https://crop-monitoring-system-d5907-default-rtdb.firebaseio.com/"); // Replace 'crops' with your Firestore collection name
        const cropSnapshot = await getDocs(cropsCollection);
        const cropList = cropSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCrops(cropList);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  return (
    <div className="dashboard">
      <h1>Crop Monitoring Dashboard</h1>
      {loading && <p>Loading data...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && crops.length === 0 && <p>No data available</p>}
      {!loading && crops.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Soil Moisture</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => (
              <tr key={crop.id}>
                <td>{crop.name}</td>
                <td>{crop.temperature}°C</td>
                <td>{crop.humidity}%</td>
                <td>{crop.soilMoisture}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
