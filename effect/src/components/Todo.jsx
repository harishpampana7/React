import { useEffect, useState } from "react";
// import { useEffect } from "react/cjs/react.development";

export const Todo =() => {
    const [text, setText ] = useState("");
    const [todo, setTodo ] = useState([]);
    const [page, setPage ] = useState(1);

    console.log(page.length);
    useEffect(() => {
        getTodo();
    }, [page]);

    const getTodo = () => {        // in
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`) 
        .then((d) => d.json())
        
        .then((res) => {
            // console.log(res);
            setTodo(res);
        });
    }

    const addTodo = () => {     // out
        const payload = {
            title: text,
            status: false,
        };
        fetch(`http://localhost:3001/todos`,{
            method: "POST",
            body: JSON.stringify(payload),
            headers:{
                "content-type": "application/json",
            },
        }).then(() => {
            getTodo();
            setText("")
        })
         // setTodos([...todos, text]);
    };

    console.log(todo.length);
     

    return (
        <div>
            <input 
                // value={text}
                type="text" 
                placeholder="Enter Todo" 
                onChange={(e) => setText(e.target.value)} 
            />
            <button onClick={addTodo}>Add Todo</button>

            {todo.map((e, i) => (
                <div key={i}>{e.title}</div>
            ))}

    {/* pagination */}
            <button disabled={page === 1} onClick={() => setPage(page-1)}>Prev</button>
            <button  onClick={() => setPage(page+1)}>Next</button>
        </div>
    );
};