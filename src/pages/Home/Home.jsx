import Banner from './Banner';
import TopFoods from './TopFoods';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <div className="h-96 bg-green-200">Extra section 1</div>
            <div className="h-96 bg-cyan-200">Extra section 2</div>
        </>
    );
};

export default Home;