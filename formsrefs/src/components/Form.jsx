import { useState, useRef } from "react";

export const Form = () => {
    const [form, setForm] = useState(null);
    const ref = useRef(null);

    const handelChange = (e) => {
        console.log(ref.current.files);
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handelSubmit}>
            <input 
                onChange={handelChange} 
                name="username" 
                type="text" 
                placeholder="enter name"
            />

            <input
                onChange={handelChange} 
                name="age" 
                type="text" 
                placeholder="enter age"
            />

            <input 
                onChange={handelChange} 
                name="address" 
                type="text" 
                placeholder="enter address"
            />
            <input onChange={handelChange} type="file" />

            <input ref={ref} type="submit" value="submit" />
        </form>
    );
};