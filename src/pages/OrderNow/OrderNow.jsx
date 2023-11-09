import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useContextHook from "../../hooks/useContextHook";
import moment from "moment/moment";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const OrderNow = () => {
    const { id } = useParams();
    const { user } = useContextHook();
    const navigate = useNavigate();
    const [foodDetails, setFoodDetails] = useState({});
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get(`/single-food/${id}`).then(response => {
            setFoodDetails(response.data);
        })
    }, [id, axiosSecure])
    const { _id, food_name, food_img, price, quantity, made_by, sell_count } = foodDetails || {};

    const [liveQuantity, setLiveQuantity] = useState(quantity - sell_count);

    const handlePurchase = (e) => {
        e.preventDefault();
        axiosSecure.get(`/single-food/${id}`).then(async (res) => {
            const newQuantity = await res.data.quantity - res.data.sell_count;
            setLiveQuantity(newQuantity);
        })
        const form = e.target;
        if (parseInt(form.quantity.value) > liveQuantity) {
            toast.error("Cannot purchase more than available quantity");
            return;
        }
        const orderSummary = {
            food_id: _id,
            food_name,
            food_img,
            price,
            made_by,
            purchase_quantity: parseInt(form.quantity.value),
            customer_name: user.displayName,
            customer_email: user.email,
            buying_date: getUTCTime()
        }
        axiosSecure.post("/order-history", orderSummary)
            .then(res => {
                if (res.data.insertedId) {
                    axiosSecure.patch(`/update-food?id=${_id}`, {
                        sell_count: sell_count + +form.quantity.value,
                        available_quantity: quantity - form.quantity.value
                    })
                    toast.success("Purchase successfully");
                    navigate("/user/my-orders");
                }
            })
    }

    const formFields = [
        { type: "text", name: "name", label: "Buyer Name", isReadOnly: true, defaultValue: user.displayName },
        { type: "email", name: "email", label: "Buyer Email", isReadOnly: true, defaultValue: user.email },
        { type: "number", name: "quantity", label: "Quantity", placeholder: "How many you want to buy?", isReadOnly: false, defaultValue: null },
        { type: "date", name: "date", label: "Purchase Date", isReadOnly: false, defaultValue: moment().format("YYYY-MM-DD") },
    ]

    return (
        <>
            <Helmet>
                <title>Foodbuzz | Order page</title>
            </Helmet>
            <section className="my-12">
                <div className="divider my-16 text-3xl font-bold">Purchase Now</div>
                <div className="grid grid-cols-2 gap-6 relative">
                    <h2 className="text-3xl text-orange-600 font-exo-2 font-semibold md:hidden text-center py-4 sticky top-0 bg-white z-[99]">{name}</h2>
                    <div className="card card-compact">
                        <figure className="h-[450px] p-4">
                            <img src={food_img} alt={food_name} className="max-h-full" />
                        </figure>
                    </div>
                    <div className="h-full flex items-center">
                        <div className="space-y-4 px-6">
                            <h2 className="text-5xl font-bold mb-6 hidden md:block">{food_name}</h2>
                            <div className="flex justify-between text-lg">
                                <p>Price: <span className="font-bold text-xl">{price}tk.</span></p>
                                <p>Available Quantity: <span className="font-bold text-xl">{quantity - sell_count || 0}</span></p>
                            </div>
                            <form onSubmit={handlePurchase} className="grid grid-cols-2 gap-4">
                                {
                                    formFields.map(field => {
                                        const { name, label, type, placeholder, defaultValue, isReadOnly } = field;
                                        return <div key={name} className="form-control">
                                            <label className="label">
                                                <span className="label-text">{label}</span>
                                            </label>
                                            <input
                                                className="input input-bordered flex items-center w-full"
                                                type={type}
                                                name={name}
                                                autoComplete="off"
                                                max={type === 'number' ? quantity : null}
                                                min={type === 'number' ? 1 : null}
                                                placeholder={placeholder || label}
                                                defaultValue={defaultValue}
                                                required
                                                title={placeholder || label}
                                                disabled={isReadOnly} />
                                        </div>
                                    })
                                }
                                <div className="form-control mt-6 col-span-2">
                                    <button className="btn btn-primary" disabled={user.email === made_by?.email || quantity === sell_count}>{quantity === sell_count ? "Item Not Available" : user.email === made_by?.email ?
                                        "Can not buy your own food" :
                                        "Confirm Purchase"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const getUTCTime = () => {
    return moment().parseZone(moment().format()).utc().format();
}

export default OrderNow;