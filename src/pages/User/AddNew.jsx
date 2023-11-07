import { Helmet } from "react-helmet-async";
import SectionHeading from "../../Shared/SectionHeading";
import { useState } from "react";
import useContextHook from "../../hooks/useContextHook";

const AddNew = () => {
    const { user } = useContextHook();
    const [imageUrl, setImageUrl] = useState('');

    const handleAddFoodItem = e => {
        e.preventDefault();
        if (!imageUrl) {
            alert("image filed cannot be empty");
            return;
        }
        const form = e.target;
        const formDataToPost = {
            food_name: form.foodName.value,
            food_img: imageUrl,
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
        console.log(formDataToPost);
    }

    const formFields = [
        { type: "text", name: "foodName", defaultValue: null, label: "Food Name", isReadOnly: false },
        { type: "text", name: "category", defaultValue: null, label: "Category", placeholder: "i.e.: Fast Food", isReadOnly: false },
        { type: "number", name: "quantity", defaultValue: null, label: "Quantity", isReadOnly: false },
        { type: "number", name: "price", defaultValue: null, label: "Price", isReadOnly: false },
        { type: "text", name: "origin", defaultValue: null, label: "Origin", placeholder: "i.e.: Mexico", isReadOnly: false },
        { type: "text", name: "addedBy", defaultValue: `${user.displayName} (${user.email})`, label: "Added By", isReadOnly: true },
        { type: "text", name: "shortDesc", defaultValue: null, label: "Short Description", placeholder: "A short description of the food item ( ingredients, making procedure, etc. )", isReadOnly: false }
    ]

    return (
        <>
            <Helmet>
                <title>Foodbuzz | Add New</title>
            </Helmet>
            <section>
                <SectionHeading>Add New Food</SectionHeading>
                <div className="grid grid-cols-4 gap-4">
                    {/* Image box and url */}
                    <div>
                        <figure className="border rounded h-80 mb-4 flex items-center justify-center">
                            {imageUrl ? <img src={imageUrl} alt="Incorrect image link. Enter a direct image URL." className="w-full" /> : <p className="text-center">Preview box <br />Add image link in the input box below</p>}
                        </figure>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image (Direct Link)</span>
                            </label>
                            <input
                                type="url"
                                className="border w-full rounded-lg p-3"
                                placeholder="Image (Direct Link)"
                                onChange={e => setImageUrl(e.target.value)} />
                        </div>
                    </div>
                    {/* other data input fields */}
                    <div className="col-span-3">
                        <div className="card flex-shrink-0">
                            <form onSubmit={handleAddFoodItem} className="card-body p-0">
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
                                                        <textarea name={name} placeholder={placeholder || label} className="input input-bordered pt-2 h-24" required ></textarea> :
                                                        <input type={type} name={name} placeholder={placeholder || label} className="input input-bordered" required />
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Item</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddNew;