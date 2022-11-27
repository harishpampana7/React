

export const TodoItem = ({ title , status, id, handelToggle }) => {
    console.log("Id from ", title, "is", id);
    // console.log(status);
    return (
        <>
            <div>

                {title} - {status === true ? "Done" : "Not Done" }
               
                <button onClick={() => handelToggle(id)}>Mark as done</button>
            </div>
        </>
    );
    
};