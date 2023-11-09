import Lottie from "lottie-react";
import Stack from "../assets/stack.json";
import { Link } from "react-router-dom";

const ErrorLayout = () => {
    return (
        <div>
            <div className="w-96 mx-auto">
                <Lottie animationData={Stack}></Lottie>
            </div>
            <div className="flex items-center justify-center gap-x-2">
                <h2 className="text-3xl font-bold text-center">Are you lost? </h2>
                <Link to="/" className="font-bold"><button className="btn btn-primary">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorLayout;