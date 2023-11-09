import { toast } from "react-toastify";
import useContextHook from "../hooks/useContextHook";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const SocialLogin = () => {
    const { googleSignIn } = useContextHook();
    const axiosSecure = useAxios();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                toast.success('Login successfully');
                navigate('/');
                axiosSecure.post("/jwt", { email: res.user.email })
            })
            .catch(err => console.error(err))
    }
    return (
        <section className="max-w-sm">
            <div className="divider">or</div>
            <button onClick={handleGoogleLogin} className="border rounded-md w-full py-3 flex items-center justify-center gap-x-2">
                <img src="https://i.ibb.co/5GCLvyf/Google-logo.png" alt="Google Logo" className="h-6 w-6" />
                Login with google
            </button>
        </section>
    );
};

export default SocialLogin;