import Food from "./Food";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AllFood = () => {
    const foods = [
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 4 },
        { _id: 5 },
    ]

    return (
        <>
            <h2 className="h-28 bg-yellow-200">Search Functionality</h2>
            <section className="grid grid-cols-3 gap-3">
                {
                    foods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </section>
            <section className="flex justify-end">
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
        </>
    );
};

export default AllFood;