import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";

const Register = () => {
    return (
        <section className="h-96 bg-yellow-100">
            <h2>Register Page</h2>
            <p>Already have an account? <Link to='/login' className="font-bold">Login</Link></p>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Register;