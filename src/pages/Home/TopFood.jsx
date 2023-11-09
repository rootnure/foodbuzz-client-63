import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopFood = ({ topFood }) => {
    const { _id, food_img, food_name, category, price, sell_count } = topFood;
    return (
        <>
            <div className="card hover:border-2 card-compact bg-base-100 relative group min-h-[500px] max-h-max rounded-none hover:rounded-lg">
                <figure className="h-80 group-hover:h-60 absolute top-24 left-0 right-0 group-hover:top-0 transition-all duration-150 group-hover:rounded-t-lg">
                    <img src={food_img} alt={food_name} className="min-h-full min-w-full group-hover:rounded-t-lg" />
                </figure>
                <div className="card-body absolute top-40 group-hover:top-60 transition-all duration-150 invisible group-hover:visible w-full">
                    <h2 className="card-title font-bold text-3xl">{food_name}</h2>
                    <p className='py-1.5'>Category: <span className='px-3 py-1 font-bold rounded-full bg-green-200 w-fit'>{category}</span></p>
                    <p>Price: <span className='font-bold text-xl text-green-600'>{price}tk.</span></p>
                    <p className='py-2'>Sell Count: {sell_count}</p>
                    <div className="card-actions w-full">
                        <Link to={`/food/details/${_id}`} className='w-full'><button className="btn btn-primary w-full">Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

TopFood.propTypes = {
    topFood: PropTypes.object.isRequired
}

export default TopFood;