import axios from "axios";
import { useEffect } from "react";
import useContextHook from "./useContextHook";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
    baseURL: "https://63-foodbuzz-server.vercel.app/api/v1",
    withCredentials: true
})

const useAxios = () => {
    const { logOut } = useContextHook();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            if (err.response.status === 401 || err.response.status === 403) {
                logOut()
                    .then(() => {
                        toast.error("Logged out due to internal problem");
                        toast.info("Please login again");
                        navigate('/login');
                    })
                axiosSecure.post("/logout");
            }
        })
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxios;