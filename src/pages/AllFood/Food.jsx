import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Food = ({ food }) => {
    console.log(food);
    const { _id, food_name, food_img, category, price, quantity } = food;

    return (
        <div className="min-h-20">
            <div className="card card-compact rounded-lg shadow-lg border-t'">
                <figure className="h-80 py-6">
                    <img src={food_img} alt={'Image of ' + food_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <p>Category: {category}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full"><Link to={`/food/details/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired
}

export default Food;