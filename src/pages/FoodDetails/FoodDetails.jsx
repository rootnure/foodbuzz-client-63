import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const FoodDetails = () => {
    const { id } = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get(`/single-food/${id}`).then(response => {
            setFoodDetails(response.data);
        })
    }, [id, axiosSecure])
    const { _id, food_name, food_img, category, price, quantity, made_by, origin, short_desc } = foodDetails;

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
                        <p>Made by: {made_by?.author}</p>
                        <p>Origin: {origin}</p>
                        <p className="py-4">{short_desc}</p>
                        <Link to={`/order-now/${_id}`}><button className="btn btn-primary btn-sm">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;