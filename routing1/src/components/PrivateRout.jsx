import { Children, useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";




export const PrivateRoute = ({ Children }) => {

    const {token} = useContext(AuthContext);

    if (! token) {
        return <Navigate to={"/login"} />;
    }

    return Children;

} 