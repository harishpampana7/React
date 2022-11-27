import { useEffect, useState } from "react"


export const Form = () => {
    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState(10);
    console.log("Before Useeffect");

    useEffect(() => {
        console.log("First Effect");
    });

    useEffect(() => {
        console.log("Second Effect");
    }, [counter]);

    useEffect(() => {
        console.log("Third Effect");
    }, [counter, age]);

    console.log(" After Useeffect");

    return (
        <div>
            <h3>Counter: { counter }</h3>
            <button onClick={() => {
                setCounter(counter+1);
            }}>Add 1</button>
        </div>
    );
};