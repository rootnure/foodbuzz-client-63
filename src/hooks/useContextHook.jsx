import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useContextHook = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useContextHook;