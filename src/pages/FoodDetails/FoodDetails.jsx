import { Link } from "react-router-dom";

const FoodDetails = () => {
    return (
        <section className="h-96 bg-blue-200">
            <h2 className="text-4xl">Food Details</h2>
            <button className="btn btn-primary btn-sm"><Link to='/order-now'>Order Now</Link></button>
        </section>
    );
};

export default FoodDetails;