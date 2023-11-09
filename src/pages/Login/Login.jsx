import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { Helmet } from "react-helmet-async";
import useContextHook from "../../hooks/useContextHook";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
// import axios from "axios";

const Login = () => {
    const { passwordLogin } = useContextHook();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();

    const [passVisible, setPassVisible] = useState(false);

    const handleUserLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        passwordLogin(email, password)
            .then((res) => {
                toast.success("login successfully");
                navigate(location.state || "/");
                axiosSecure.post("/jwt", { email: res.user.email })
                // axios.post("http://localhost:5000/api/v1/jwt", { email: res.user.email, with })
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <Helmet>
                <title>Foodbuzz | Login</title>
            </Helmet>
            <section className="min-h-96">
                <div className="hero min-h-[calc(100vh-150px)]">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left bg-green-200 px-6 py-2 rounded-lg h-[500px] flex flex-col justify-center items-center w-96 gap-y-6 shadow-2xl">
                            <p className="font-bold text-3xl">Welcome Back</p>
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="font-bold mt-4">Login to explore more from us</p>
                        </div>
                        <div className="card flex-shrink-0 w-96 min-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleUserLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={passVisible ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div onClick={(e) => setPassVisible(e.target.checked)} className="flex gap-1 mt-3">
                                    <input type="checkbox" id="showPassword" />
                                    <label htmlFor="showPassword">Show Password</label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="px-6 mb-6">
                                <p>Don&apos;t have an account? <Link to='/register' className="font-bold">Register</Link></p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;