import { useState } from "react";

export const TodoInput = ({ getData }) => {

    const [text, setText] = useState("");
    const handelChange = (e) => {
        setText(e.target.value);
    };

    const handelClick = () => {
        getData(text);
    };

    return (
        <>
            <input type="text" placeholder="Enter Todo" onChange={handelChange} />
            <button onClick={handelClick}>Add Todo</button>
        </>
    );
};