import PropTypes from 'prop-types';

const TopFood = ({ topFood }) => {
    console.log(topFood);
    const { _id, food_img, food_name, food_category, price } = topFood;
    const handleViewDetail = id => {
        console.log(id);
    }
    return (
        <>
            <div className="card card-compact bg-base-100 relative group h-[525px] rounded-none hover:rounded-lg">
                <figure className="h-80 group-hover:h-80 absolute top-24 left-0 right-0 group-hover:top-0 transition-all duration-150 rounded-t-lg">
                    <img src={food_img} alt={food_name} className="w-full group-hover:rounded-t-lg" />
                </figure>
                <div className="card-body absolute top-40 group-hover:top-80 transition-all duration-150 invisible group-hover:visible">
                    <h2 className="card-title">{food_name}</h2>
                    <h2 className="card-title">Category: {food_category}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleViewDetail(_id)} className="btn btn-primary">Buy Now</button>
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