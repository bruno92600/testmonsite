import React from 'react';
import Footer from '../components/Footer';
import HeaderCV from '../components/HeaderCV';
import MeteoMain from '../components/MeteoMain';
import SliderImage from '../components/SliderImage';
import '../styles/Meteo.css'

const Meteo = () => {
    return (
        <div>
            <HeaderCV />
            <MeteoMain />
            <SliderImage />
            <Footer />
        </div>
    );
};

export default Meteo;