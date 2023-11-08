import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useContextHook from "../../hooks/useContextHook";
import moment from "moment/moment";
import useAxios from "../../hooks/useAxios";

const OrderNow = () => {
    const { id } = useParams();
    const { user } = useContextHook();
    const [foodDetails, setFoodDetails] = useState({});
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get(`/single-food/${id}`).then(response => {
            setFoodDetails(response.data);
        })
    }, [id, axiosSecure])
    const { _id, food_name, food_img, price, quantity, made_by } = foodDetails;

    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;
        if (parseInt(form.quantity.value) > quantity) {
            alert('cannot buy more than available quantity');
            return;
        }
        const orderSummary = {
            food_id: _id,
            food_name,
            price,
            quantity: form.quantity.value,
            customer_name: user.displayName,
            customer_email: user.email,
            buying_date: getUTCTime()
        }
        console.log(orderSummary);
    }

    const formFields = [
        { type: "number", name: "quantity", label: "Quantity", placeholder: `Available quantity: ${quantity}`, isReadOnly: false, defaultValue: null },
        { type: "text", name: "name", label: "Name", isReadOnly: true, defaultValue: user.displayName },
        { type: "email", name: "email", label: "Email", isReadOnly: true, defaultValue: user.email },
        { type: "date", name: "date", label: "Purchase Date", isReadOnly: false, defaultValue: moment().format("YYYY-MM-DD") },
    ]

    return (
        <section className="min-h-screen">
            <div>
                <figure>
                    <img src={food_img} alt="" />
                </figure>
                <div>
                    <h2 className="text-5xl">{food_name}</h2>
                    <p>Price: {price}</p>
                </div>
            </div>
            <form onSubmit={handlePurchase} className="card-body">
                <div className="grid grid-cols-2 gap-4">
                    {
                        formFields.map(field => {
                            const { name, label, type, placeholder, defaultValue, isReadOnly } = field;
                            return <div key={name} className="form-control">
                                <label className="label">
                                    <span className="label-text">{label}</span>
                                </label>
                                <input
                                    className="input input-bordered flex items-center"
                                    type={type}
                                    name={name}
                                    max={type === 'number' ? quantity : null}
                                    min={type === 'number' ? 1 : null}
                                    placeholder={placeholder || label}
                                    defaultValue={defaultValue}
                                    required
                                    disabled={isReadOnly} />
                            </div>
                        })
                    }
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" disabled={user.email === made_by?.email}>{user.email === made_by?.email ? "Can not buy own food" : "Buy Now"}</button>
                </div>
            </form>
        </section>
    );
};

const getUTCTime = () => {
    return moment().parseZone(moment().format()).utc().format();
}

export default OrderNow;