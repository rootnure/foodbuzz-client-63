import { Helmet } from "react-helmet-async";

const MyFoods = () => {
    return (
        <>
            <Helmet>
                <title>Foodbuzz | My Foods</title>
            </Helmet>
            <section>
                my added food items
            </section>
        </>
    );
};

export default MyFoods;