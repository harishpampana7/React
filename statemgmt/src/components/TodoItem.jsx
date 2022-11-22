export const TodoItem = ({ title , status, id,  }) => {
    console.log("Id from ", title, "is", id);
    return (
        <>
            <div>
                {title} - {status ? "Done" : "Not Done" }
                <button onClick={() => handelToggle(id)}>Mark as done</button>
            </div>
        </>
    );
};