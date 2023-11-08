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
                axiosSecure.post("/token", { email: res.user.email })
            })
            .catch(err => console.error(err))
    }
    return (
        <section className="max-w-sm">
            <div className="divider">or</div>
            <button onClick={handleGoogleLogin} className="border rounded-md w-full py-2">Login with google</button>
        </section>
    );
};

export default SocialLogin;