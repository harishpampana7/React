import { useEffect } from "react";
import { useState } from "react"


export const Timer = () => {
    const [counter, setCounter] = useState(10);
    useEffect(() => {
        const id = setInterval(() => {
            setCounter((p) => {
                if( p === 0){
                    clearInterval(id);
                    return 0;
                }
                return p-1;
            })
        },1000);

        return () => {
            //unmounting
            console.log("Unmounting");
            clearInterval(id);
        };
    },[]);
    return <div>Count is : {counter} </div>
};