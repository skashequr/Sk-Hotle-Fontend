import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRoutes = ({children}) => {
    const {user , lodder} = useContext(AuthContext);
    const location = useLocation()
    if (lodder) {
        return <div className="flex justify-center items-center mt-36"><span className="loading loading-ring text-[#543E93]  h-80 w-80 loading-xs"></span></div>
    }
    if (user) {      
        return children     
    }
    return <Navigate state={location.pathname} to="/login" replace={true} />

};

export default PrivetRoutes;