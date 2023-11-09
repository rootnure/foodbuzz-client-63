import { useState } from "react";
import Food from "./Food";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hooks/useAxios";
import FramerMotionLoading from "../../Shared/FramerMotionLoading";

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(9);
    const [dataCount, setDataCount] = useState(0);
    const [pages, setPages] = useState([]);
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get(`/all-foods?page=${page}&limit=${limit}`).then(response => {
            setFoods(response.data.result);
            setDataCount(response.data.dataCount);
        })
    }, [page, limit, axiosSecure]);

    useEffect(() => {
        const numberOfPage = Math.ceil(dataCount / limit);
        setPages([...Array(numberOfPage).keys()]);
    }, [dataCount, limit]);

    useEffect(() => {
        if (page === 0 || page === pages.length - 1) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [page, pages]);

    const handlePageChange = pageNo => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        setLimit(limit);
        if (pageNo >= 0 && pageNo <= pages.length - 1) {
            setPage(pageNo);
        }
    }

    const handleSearchFood = e => {
        e.preventDefault();
        let searchText;
        try {
            searchText = e.target.searchText.value;
        } catch (err) {
            searchText = e.target.value;
        }
        axiosSecure.get(`/all-searched-foods?page=${page}&limit=${limit}&searchText=${searchText}`)
            .then(res => {
                setFoods(res.data.result);
                setDataCount(res.data.dataCount);
            })
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
                    </form>
                </section>
                {/* search results (show all by default) */}
                <section className="grid grid-cols-3 gap-5 min-h-96">
                    {
                        foods.length > 0 ?
                            foods.map(food => <Food key={food._id} food={food}></Food>) :
                            <div className="h-[550px] flex justify-center items-center col-span-3">
                                <FramerMotionLoading></FramerMotionLoading>
                            </div>
                    }
                </section>
                {/* pagination buttons */}
                <section className="flex justify-center my-6">
                    <div className="join join-horizontal">
                        <button
                            onClick={() => handlePageChange(0)}
                            className="btn btn-sm join-item"
                            title="Go to first page"
                            disabled={page === 0}><MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft></button>
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            className="btn btn-sm join-item"
                            title="Go to previous page"
                            disabled={page === 0}><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
                        {
                            pages.map(pageNo =>
                                <button key={pageNo} onClick={() => handlePageChange(pageNo)} className={`btn btn-sm join-item ${page === pageNo ? "active-page" : ""}`}>{pageNo + 1}</button>)
                        }
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="btn btn-sm join-item"
                            title="Go to next page"
                            disabled={page >= pages.length - 1}><MdKeyboardArrowRight></MdKeyboardArrowRight></button>
                        <button
                            onClick={() => handlePageChange(pages.length - 1)}
                            className="btn btn-sm join-item"
                            title="Go to last page"
                            disabled={page >= pages.length - 1}><MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight></button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AllFood;