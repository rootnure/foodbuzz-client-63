import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import TopFoods from './TopFoods';
import ContactUs from './ContactUs';
import AppComingSoon from './AppComingSoon';
import Instagram from './Instagram';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Foodbuzz | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <Instagram></Instagram>
            <AppComingSoon></AppComingSoon>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;