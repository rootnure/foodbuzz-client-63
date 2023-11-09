import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Food = ({ food }) => {
    const { _id, food_name, food_img, category, price, quantity, sell_count } = food;

    return (
        <div className="min-h-20">
            <div className="card card-compact rounded-lg shadow-lg border-t'">
                <figure className="h-72">
                    <img src={food_img} alt={'Image of ' + food_name} className='min-h-full min-w-full' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{food_name}</h2>
                    <p className='px-3 py-1.5 bg-green-200 w-fit rounded-full'>Category: <span className='font-bold'>{category}</span></p>
                    <p>Price: <span className='font-bold text-lg'>{price}tk.</span></p>
                    <p>Quantity: {quantity - sell_count}</p>
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