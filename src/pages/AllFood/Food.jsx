import { Link } from "react-router-dom";

const Food = () => {
    return (
        <div className="h-20 bg-green-200">
            <h4>Single Food Item</h4>
            <button className="btn btn-primary btn-sm"><Link to='/food/details'>Details</Link></button>
        </div>
    );
};

export default Food;