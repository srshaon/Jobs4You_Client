import './Home.css';

import React from 'react';
import About from '../About/About';
import TopCompanies from '../TopCompanies/TopCompanies';
import Resources from '../Resources/Resources';

const Home = () => {
    return (
        <div>
            <TopCompanies></TopCompanies>
            <About></About>
            <Resources></Resources>
        </div>
    );
};

export default Home;