import { Link } from "react-router-dom";
import TopFood from "./TopFood";

const TopFoods = () => {

    const topFoods = [
        { _id: 1, food_img: "https://i.ibb.co/QFvRbs3/image.png", food_name: "Burger", food_category: "Fast Food", price: 289 },
        { _id: 2, food_img: "https://i.ibb.co/QFvRbs3/image.png", food_name: "Pizza", food_category: "Fast Food", price: 289 },
        { _id: 3, food_img: "https://i.ibb.co/QFvRbs3/image.png", food_name: "Swarma", food_category: "Fast Food", price: 289 },
        { _id: 4, food_img: "https://i.ibb.co/QFvRbs3/image.png", food_name: "Fried Rice", food_category: "Fast Food", price: 499 },
        { _id: 5, food_img: "https://i.ibb.co/QFvRbs3/image.png", food_name: "Fried Rice 2", food_category: "Fast Food", price: 499 },
        { _id: 6, food_img: "https://i.ibb.co/QFvRbs3/image.png", food_name: "Fried Rice 3", food_category: "Fast Food", price: 499 },
    ]

    return (
        <section className='min-h-[720px]'>
            <h2 className="text-4xl text-center mt-32 mb-12 font-bold">Top Foods</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    topFoods.map(topFood => <TopFood key={topFood._id} topFood={topFood}></TopFood>)
                }
            </div>
            <div className="flex justify-center my-12">
                <Link to="/allFood"><button className="btn btn-primary">See All</button></Link>
            </div>
        </section>
    );
};

export default TopFoods;