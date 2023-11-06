import { useState } from "react";
import Food from "./Food";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        axios.get('/allFood.json').then(response => setFoods(response.data))
    }, [])

    const handleSearchFood = e => {
        e.preventDefault();
        let searchText;
        try {
            searchText = e.target.searchText.value;
        } catch (err) {
            searchText = e.target.value;
        }
        console.log(searchText);
    }

    return (
        <div className="min-h-screen">
            {/* search area */}
            <section className="h-40 flex items-center justify-center">
                <form onSubmit={handleSearchFood} className="relative w-4/12 flex">
                    <input onChange={handleSearchFood} type="text" name="searchText" placeholder="Search by food name" className="input input-bordered w-full pr-32" />
                    <button type="submit" className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
                    <button type="reset" title="Reset" className="btn absolute top-0 bottom-0 right-20 rounded-none border-t-2 border-b-2 border-gray-300">X</button>
                </form>
            </section>
            {/* search results (show all by default) */}
            <section className="grid grid-cols-3 gap-3">
                {
                    foods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </section>
            <section className="flex justify-center my-6">
                <div className="join join-horizontal">
                    <button className="btn btn-sm join-item"><MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft></button>
                    <button className="btn btn-sm join-item"><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
                    <button className="btn btn-sm join-item">1</button>
                    <button className="btn btn-sm join-item">2</button>
                    <button className="btn btn-sm join-item">3</button>
                    <button className="btn btn-sm join-item">4</button>
                    <button className="btn btn-sm join-item"><MdKeyboardArrowRight></MdKeyboardArrowRight></button>
                    <button className="btn btn-sm join-item"><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></button>
                </div>
            </section>
        </div>
    );
};

export default AllFood;