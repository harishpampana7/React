import { AuthContext } from "../context/AuthContext";
import {useParams, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

export const UserDetails = () => {
    const { userid } =useParams();
    const [user, setUser] = useState({});

    

    useEffect(() => {
        fetch(`https://reqres.in/api/user/${userid}`)
        .then((d) => d.json())
        .then((d) => {
            setUser(d.data);
        });
    }, [userid]);

    
    return (
        <div>
            <img src={user.avatar} alt="test" />
            <div>
                {user.first_name} {user.last_name}
            </div>
            <div>
                Contact: {user.email}
            </div>
        </div>
    )
};