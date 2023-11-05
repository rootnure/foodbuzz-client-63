import Banner from './Banner';
import TopFood from './TopFood';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopFood></TopFood>
            <div className="h-96 bg-green-200">Extra section 1</div>
            <div className="h-96 bg-cyan-200">Extra section 2</div>
        </>
    );
};

export default Home;