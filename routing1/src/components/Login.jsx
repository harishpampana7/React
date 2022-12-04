import { usContext, useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
    const [form, setForm] = useState({});
    const {handelToken} = usContext(AuthContext);

    // const location = useLocation();
    // console.log(location);

    const navigate = useNavigate();

    const handelChange = ({ target: {name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };
    return (
        <div>
            <input
                type="text"
                onChange={handelChange}
                name="email"
                placeholder="Enter Email"
            />

            <input
                type="text"
                onChange={handelChange}
                name="password"
                placeholder="Enter Password"
            />

            <button 
                onClick={() => {
                    try {
                        fetch("reqres.in/api/login", {
                            method:"POST",
                            body: JSON.stringify({status:false}),
                        });
                        handelToken("12345546");
                        navigate(-1); 
                    }catch{
                        //
                    }
                   

            }}>
                Sign in</button>

        </div>
    )
}