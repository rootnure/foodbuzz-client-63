import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";

const FoodDetails = () => {
    const { id } = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    const [topFoods, setTopFoods] = useState([]);
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get(`/single-food/${id}`).then(response => {
            setFoodDetails(response.data);
        })
    }, [id, axiosSecure])

    useEffect(() => {
        axiosSecure.get('/top-foods?foodCount=15')
            .then(res => setTopFoods(res.data))
    }, [axiosSecure]);

    const { _id, food_name, food_img, category, price, quantity, made_by, origin, short_desc } = foodDetails;

    return (
        <>
            <Helmet>
                <title>{`Foodbuzz | ${food_name}`}</title>
            </Helmet>
            <section className="my-12">
                <div className="divider my-16 text-3xl font-bold">Food Details</div>
                <div className="grid grid-cols-2 gap-6 relative">
                    <h2 className="text-3xl text-orange-600 font-exo-2 font-semibold md:hidden text-center py-4 sticky top-0 bg-white z-[99]">{name}</h2>
                    <div className="card card-compact">
                        <figure className="h-[450px] p-4">
                            <img src={food_img} alt={food_name} className="max-h-full" />
                        </figure>
                    </div>
                    <div className="h-full flex items-center">
                        <div className="md:col-span-2 space-y-4 px-6">
                            <h2 className="text-5xl font-bold mb-6 hidden md:block">{food_name}</h2>
                            <div className="flex flex-wrap gap-2.5">
                                <p className="px-3 py-0.5 rounded-full bg-green-200 flex gap-1 text-black"><span>Price: </span><span className="font-semibold flex items-center">{price}tk.</span></p>
                                <p className="px-3 py-0.5 rounded-full bg-green-200 flex gap-1 text-black"><span>Category: </span><span className="font-semibold">{category}</span></p>
                            </div>
                            <div className="space-y-3">
                                <p>Available Quantity: <span className="font-bold">{quantity}</span></p>
                                <p>Made by: <span className="font-bold">{made_by?.author} <span className="font-normal text-sm">({made_by?.email})</span></span></p>
                                <p>Food Origin: <span className="font-bold">{origin}</span></p>
                            </div>
                            <div>
                                <p className="mt-2">{short_desc}</p>
                            </div>
                            <Link to={`/order-now/${_id}`}><button className="mt-6 btn btn-primary">Order Now</button></Link>
                        </div>
                    </div>
                </div>
                {/* top items marquee */}
                <div className="divider my-12 text-2xl font-bold">More to choose from</div>
                <Marquee>
                    {
                        topFoods.map(food => <div key={food._id}>
                            <Link to={`/food/details/${food._id}`} title={food.food_name}><img src={food.food_img} className="h-40 mr-4" /></Link>
                        </div>)
                    }
                </Marquee>
            </section>
        </>
    );
};

export default FoodDetails;