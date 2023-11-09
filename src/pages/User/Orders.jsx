import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hooks/useAxios";
import useContextHook from "../../hooks/useContextHook";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import emptyCart from "../../assets/cart.json"

const Orders = () => {
    const axiosSecure = useAxios();
    const { user } = useContextHook();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/order-history?email=${user.email}`)
            .then(res => setOrders(res.data))
    }, [axiosSecure, user]);

    const handleDeleteOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-order?id=${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            axiosSecure.get(`/order-history?email=${user.email}`)
                                .then(res => setOrders(res.data));
                            toast.success("Order delete successfully");
                        } else {
                            toast.info("Something went wrong. Try again.");
                        }
                    })
            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Foodbuzz | My Orders</title>
            </Helmet>
            <section>
                {orders.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-center text-base">
                                    <th>Order Info</th>
                                    <th>Made By</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {
                                    orders.map(food =>
                                        <tr key={food._id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="h-40 max-w-60">
                                                            <img src={food.food_img} alt={food.food_name} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-2xl">{food.food_name}</h3>
                                                        <p className="text-base">Price: <span className="font-semibold text-lg">{food.price}tk.</span></p>
                                                        <p className="text-base">Quantity Purchase: <span className="font-semibold text-lg">{food.purchase_quantity}</span></p>
                                                        <p className="text-base">Purchase on: <span className="font-semibold text-lg">{food.buying_date}</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-lg">
                                                {food?.made_by?.author || "No Data Available"}
                                                <br />
                                                <span className="badge badge-ghost">{food?.made_by?.email || "No Data"}</span>
                                            </td>
                                            <th className="text-center">
                                                <button onClick={() => handleDeleteOrder(food._id)} className="btn btn-sm btn-error">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div> :
                    <div className="w-96 mx-auto text-center">
                        <Lottie animationData={emptyCart}></Lottie>
                        <h2 className="text-5xl font-bold">No order yet...</h2>
                    </div>
                }
            </section>
        </>
    );
};

export default Orders;