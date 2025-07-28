import Layout from '../layout/Layout';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../components/Header.css';
import { getAllButterflies } from '../services/ButterflyServices';
import ButterflyCard from '../components/ButterflyCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Home.css'; // Asegúrate de tener este archivo

const Home = () => {
    const [butterflies, setButterflies] = useState([]);

    useEffect(() => {
        const fetchButterflyData = async () => {
            try {
                const bfData = await getAllButterflies();
                const limitedData = bfData.slice(0, 10);
                setButterflies(limitedData);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchButterflyData();
    }, []);

    return (
        <>
            <Header />

            <div className="card-carousel-wrapper">
                <h2 className="carousel-title">Descubre las Mariposas de Oceanía</h2>

                <p className='card-carousel-p'>Explora algunas de las especies más fascinantes que habitan este rincón del planeta. Conoce su historia, colores y características únicas que las convierten en verdaderas joyas aladas.
                </p>

                <div className="card-carousel-section">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        // loop={butterflies.length > 3}
                        // autoplay={{ delay: 3000, disableOnInteraction: false }}
                        // spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {butterflies.map((butterfly) => (
                            <SwiperSlide key={butterfly.id}>
                                <ButterflyCard butterfly={butterfly} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Home;
