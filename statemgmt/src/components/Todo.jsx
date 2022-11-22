import { useState } from "react";
import { TodoInput } from "./Todoinput"
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {

    const [list,setList] = useState([]);

    const handelClick = (data) => {
        console.log("Data in parent", data);
        const payload = {
            title: data,
            status: false,
            id: nanoid(7),
        };
        setList([...list, payload]); //data(payload)
    };

    const handelToggle = (id) => {
        //Delete this ID from main list
        //hint: list.filter()
        
    }

    return (
        <>
            {/* <TodoInput getData={handelClick}/>
            {list.map((e) => (
                 <TodoItem title={e} />
            ))} */}
            {/* <TodoList list={list} */}

            <TodoInput getData={handelClick}/>
            {list.map((e) => (
                 <TodoItem key={e.id} {...e} />
            ))}
        </>
    );
};