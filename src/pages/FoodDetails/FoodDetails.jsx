import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const FoodDetails = () => {
    const params = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    useEffect(() => {
        axios.get('/allFood.json').then(response => {
            setFoodDetails(response.data.find(food => food._id + '' === params.id));
        })
    }, [params])
    const { _id, food_name, food_img, category, price, quantity, made_by, short_desc } = foodDetails;

    return (
        <section className="min-h-96">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <figure>
                        <img src={food_img} className="max-w-sm rounded-lg shadow-2xl border-t" />
                    </figure>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold">{food_name}</h1>
                        <p>Category: {category}</p>
                        <p>Price: {price}</p>
                        <p>Available Quantity: {quantity}</p>
                        <p>Made by: {made_by}</p>
                        <p className="py-4">{short_desc}</p>
                        <button className="btn btn-primary btn-sm"><Link to={`/order-now/${_id}`}>Order Now</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;