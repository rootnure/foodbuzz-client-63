import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { Helmet } from "react-helmet-async";
import useContextHook from "../../hooks/useContextHook";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
    const { createUser, updateUserInfo } = useContextHook();
    const navigate = useNavigate();

    const [passVisible, setPassVisible] = useState(false);

    const handleUserSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.userName.value;
        const userPhoto = form.userPhoto.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(() => {
                updateUserInfo(name, userPhoto)
                    .then(() => {
                        toast.success('Registered successfully.');
                        navigate('/');
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }

    const signUpFormFields = [
        { type: "text", name: "userName", label: "Full Name" },
        { type: "url", name: "userPhoto", label: "Image (Direct Link)" },
        { type: "email", name: "email", label: "Email" },
        { type: "password", name: "password", label: "Password" },
    ]
    return (
        <>
            <Helmet>
                <title>Foodbuzz | Register</title>
            </Helmet>
            <section className="min-h-96">
                <div className="hero min-h-[calc(100vh-100px)]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left bg-green-200 px-6 py-2 rounded-lg h-[685px] flex flex-col justify-center items-center gap-y-6 w-96">
                            <p className="font-bold text-3xl">Welcome Friend</p>
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="font-bold text-center mt-4">Register a new account to stay connect with us</p>
                        </div>
                        <div className="card flex-shrink-0 w-96 min-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleUserSignUp} className="card-body">
                                {
                                    signUpFormFields.map(field =>
                                        <div key={field.name} className="form-control relative">
                                            <label className="label">
                                                <span className="label-text">{field.label}</span>
                                            </label>
                                            <input type={passVisible ? "text" : field.type} name={field.name} placeholder={field.label} className="input input-bordered" required />
                                        </div>
                                    )
                                }
                                <div onClick={(e) => setPassVisible(e.target.checked)} className="flex gap-1 mt-3">
                                    <input type="checkbox" id="showPassword" />
                                    <label htmlFor="showPassword">Show Password</label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className="px-6 mb-6">
                                <p>Already have an account? <Link to='/login' className="font-bold">Login</Link></p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;