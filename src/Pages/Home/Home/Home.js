import React from 'react';
import Banner from '../Banner/Banner';

import BusinessSummery from '../BusinessSumery/BusinessSummery';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Headers/Header';
import OurTools from '../OurTools/OurTools';
import Review from '../Review/Review';
import Branding from './Branding/Branding';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Branding></Branding>
            <OurTools></OurTools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <Contact></Contact>

            <Footer></Footer>

        </div>
    );
};

export default Home;