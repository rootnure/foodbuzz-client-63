import { Link } from "react-router-dom";
import TopFood from "./TopFood";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";

const TopFoods = () => {

    const [topFoods, setTopFoods] = useState([]);
    const axiosSecure = useAxios();

    useEffect(() => {
        axiosSecure.get("/top-foods?foodCount=6")
            .then(response => setTopFoods(response.data))
    }, [axiosSecure])

    return (
        <section className='min-h-[720px]'>
            <h2 className="text-4xl text-center mt-32 mb-12 font-bold divider">Top Foods</h2>
            <div className="grid grid-cols-3 gap-x-4">
                {
                    topFoods.map(topFood => <TopFood key={topFood._id} topFood={topFood}></TopFood>)
                }
            </div>
            <div className="flex justify-center my-12">
                <Link to="/allFood"><button className="btn btn-primary w-[200px]">See All</button></Link>
            </div>
        </section>
    );
};

export default TopFoods;