import { useState } from "react";
import { TodoInput } from "./Todoinput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [list, setList] = useState([]);

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
    // console.log(id);

    // status === true;
    
    if (list.id === id) {
      list.status = false;
    } else {
      list.status = true;
    }
    setList([...list]);
    console.log(list.status);
  };

  return (
    <>
      {/* <TodoInput getData={handelClick}/>
            {list.map((e) => (
                 <TodoItem title={e} />
            ))} */}
      {/* <TodoList list={list} */}

      <TodoInput getData={handelClick} />
      {list.map((e) => (
        <TodoItem handelToggle={handelToggle} key={e.id} {...e} />
      ))}
    </>
  );
};
