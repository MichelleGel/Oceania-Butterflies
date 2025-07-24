import Layout from '../layout/Layout';
import React from 'react';
import Header from '../components/Header';  // Ajusta la ruta correcta
import '../components/Header.css';          // Ruta CSS también correcta
import { useState, useEffect } from 'react';
import { getAllButterflies } from '../services/ButterflyServices';
import ButterflyCard from '../components/ButterflyCard';


const Home = () => {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const fetchButterflyData = async () => {
      try {
        const bfData = await getAllButterflies();
        const limitedData = bfData.slice(0, 10);
        setButterflies(limitedData);


        console.log("Mariposas: ", bfData)
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchButterflyData();
  }, []);

  return (

    <>
      <Header />
      <div className="cards-container">
        {butterflies.map((butterfly) => (
          <ButterflyCard key={butterfly.id} butterfly={butterfly} />
        ))}
      </div>



    </>
  );
};

export default Home;
