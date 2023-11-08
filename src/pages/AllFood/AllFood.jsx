import { useState } from "react";
import Food from "./Food";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(9);
    const [dataCount, setDataCount] = useState(0);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/all-food?page=${page}&limit=${limit}`).then(response => {
            setFoods(response.data.result);
            setDataCount(response.data.dataCount);
        })
    }, [page, limit]);

    useEffect(() => {
        const numberOfPage = Math.ceil(dataCount / 9);
        setPages([...Array(numberOfPage).keys()]);
    }, [dataCount]);

    const handlePageChange = pageNo => {
        if (pageNo >= 0 && pageNo <= pages.length - 1) {
            setPage(pageNo);
        }
        setLimit(9);
        window.location(0, 0);
    }

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
        <>
            <Helmet>
                <title>Foodbuzz | All Foods</title>
            </Helmet>
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
                        <button onClick={() => handlePageChange(0)} className="btn btn-sm join-item"><MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft></button>
                        <button onClick={() => handlePageChange(page - 1)} className="btn btn-sm join-item"><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
                        {
                            pages.map(pageNo =>
                                <button key={pageNo} onClick={() => handlePageChange(pageNo)} className="btn btn-sm join-item">{pageNo + 1}</button>)
                        }
                        <button onClick={() => handlePageChange(page + 1)} className="btn btn-sm join-item"><MdKeyboardArrowRight></MdKeyboardArrowRight></button>
                        <button onClick={() => handlePageChange(pages.length - 1)} className="btn btn-sm join-item"><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AllFood;