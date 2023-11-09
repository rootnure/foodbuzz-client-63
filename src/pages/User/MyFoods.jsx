import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hooks/useAxios";
import useContextHook from "../../hooks/useContextHook";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import stack from "../../assets/stack.json";

const MyFoods = () => {
    const { user } = useContextHook();
    const [myFoods, setMyFoods] = useState([]);
    const [modalData, setModalData] = useState({});
    const [foodImg, setFoodImg] = useState('');
    const axiosSecure = useAxios();
    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(`/my-foods?email=${user.email}`)
            .then(response => {
                setMyFoods(response.data)
                setIsDataLoading(false);
            });
    }, [axiosSecure, user])

    const handleOpenUpdateDataModal = (id, imageUrl) => {
        setFoodImg(imageUrl);
        axiosSecure.get(`/single-food/${id}`)
            .then(res => {
                setModalData(res.data);
            });
        document.getElementById('updateDataModal').showModal();
    }

    const handleUpdateFoodDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedInfo = {
            food_name: form.foodName.value,
            food_img: foodImg,
            category: form.category.value,
            price: form.price.value,
            quantity: form.quantity.value,
            made_by: {
                author: user.displayName,
                email: user.email
            },
            origin: form.origin.value,
            short_desc: form.shortDesc.value
        }
        axiosSecure.patch(`/update-food?id=${modalData._id}`, updatedInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Data updated");
                } else if (res.data.matchedCount > 0) {
                    toast.info("No changes been made");
                } else {
                    toast.warn("Something went wrong. Try again.");
                }
                window.location.reload();
            })
    }

    const formFields = [
        { type: "text", name: "foodName", defaultValue: modalData.food_name, label: "Food Name", isReadOnly: false },
        { type: "text", name: "category", defaultValue: modalData.category, label: "Category", placeholder: "i.e.: Fast Food", isReadOnly: false },
        { type: "number", name: "quantity", defaultValue: modalData.quantity, label: "Quantity", isReadOnly: false },
        { type: "number", name: "price", defaultValue: modalData.price, label: "Price (Per Serving)", isReadOnly: false },
        { type: "text", name: "origin", defaultValue: modalData.origin, label: "Origin", placeholder: "i.e.: Mexico", isReadOnly: false },
        { type: "text", name: "addedBy", defaultValue: `${user.displayName} (${user.email})`, label: "Added By", isReadOnly: true },
        { type: "text", name: "shortDesc", defaultValue: modalData.short_desc, label: "Short Description (ingredients, making procedure, etc.)", placeholder: "A short description of the food item ( ingredients, making procedure, etc. )", isReadOnly: false }
    ]

    return (
        <>
            <Helmet>
                <title>Foodbuzz | My Foods</title>
            </Helmet>
            <section>
                <div className="overflow-x-auto">
                    {!isDataLoading ? myFoods.length > 0 ?
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Food Info</th>
                                    <th>Made By</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {
                                    myFoods.map(food =>
                                        <tr key={food._id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="h-40 max-w-60">
                                                            <img src={food.food_img} alt={food.food_name} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-2xl">{food.food_name}</div>
                                                        <div className="text-lg opacity-70">Price: <span className="font-bold text-black">{food.price}tk.</span></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-lg">
                                                {food.made_by.author}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{food.made_by.email}</span>
                                            </td>
                                            <th>
                                                <button onClick={() => handleOpenUpdateDataModal(food._id, food.food_img)} className="btn btn-sm">Update</button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table> :
                        <div className="w-96 mx-auto">
                            <h2 className="text-2xl text-center font-bold">No Product added yet</h2>
                        </div> :
                        <div className="w-96 mx-auto">
                            <Lottie animationData={stack}></Lottie>
                        </div>
                    }
                </div>
                {/* Modal here */}
                <dialog id="updateDataModal" className="modal">
                    <div className="modal-box lg:max-w-[calc(50vw)] pt-16">
                        <div className="card card-compact rounded-none">
                            <figure className="max-w-1/2 w-1/2 mx-auto h-60"><img src={foodImg} alt={modalData.food_name} /></figure>
                            <div className="card-body">
                                <h3 className="text-2xl font-bold text-center">{modalData.food_name}</h3>
                                <div className="form-control px-4">
                                    <label className="label">
                                        <span className="label-text">Food Image (Direct Link)</span>
                                    </label>
                                    <input
                                        type="url"
                                        className="border w-full rounded-lg p-3"
                                        placeholder="Image (Direct Link)"
                                        defaultValue={modalData.food_img}
                                        onChange={e => setFoodImg(e.target.value)}
                                    />
                                </div>
                                <div className="card flex-shrink-0 w-full">
                                    <form onSubmit={handleUpdateFoodDetails} className="card-body">
                                        <div className="grid grid-cols-2 gap-4">
                                            {
                                                formFields.map(field => {
                                                    const { type, name, defaultValue, label, placeholder, isReadOnly } = field;
                                                    return <div key={field.name} className={`form-control ${name === "shortDesc" ? "col-span-2" : ""}`}>
                                                        <label className="label pt-0">
                                                            <span className="label-text">{field.label}</span>
                                                        </label>
                                                        {isReadOnly ?
                                                            <p className="input input-bordered flex items-center" disabled>{defaultValue}</p> :
                                                            name === 'shortDesc' ?
                                                                <textarea
                                                                    name={name}
                                                                    placeholder={placeholder || label}
                                                                    className="input input-bordered pt-2 h-24"
                                                                    defaultValue={defaultValue}
                                                                    required ></textarea> :
                                                                <input
                                                                    type={type}
                                                                    name={name}
                                                                    placeholder={placeholder || label}
                                                                    className="input input-bordered"
                                                                    defaultValue={defaultValue}
                                                                    required />
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </section>
        </>
    );
};

export default MyFoods;