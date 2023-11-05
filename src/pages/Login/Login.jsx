import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
    return (
        <section className="h-96 bg-yellow-100">
            <h2>Login Page</h2>
            <p>Don&apos;t have an account? <Link to='/register' className="font-bold">Register</Link></p>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Login;