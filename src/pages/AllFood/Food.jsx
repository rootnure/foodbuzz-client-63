import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Food = ({ food }) => {
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
                        <Link to={`/food/details/${_id}`} className='w-full'><button className="btn btn-primary w-full">Details</button></Link>
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