import { useRef } from "react";

export const Scroll = () => {
    const inputRef = useRef(null);
    const Box4Ref = useRef(null);

    return (
        <>
            <button 
                onClick={() => {
                Box4Ref.current.scrollIntoView({
                behavior: "smooth",
                });
            }}
            >
                Box 4
            </button>

            <div 
                ref={inputRef} 
                style={{
                height: "400px",
                width:"200px",
                background:"coral",
            }}>1</div>

            <div
                style={{
                height: "400px",
                width:"200px",
                background:"red",
            }}>2</div>

            <div
                style={{
                height: "400px",
                width:"200px",
                background:"coral",
            }}>3</div>

            <div
                ref={Box4Ref} 
                style={{
                height: "400px",
                width:"200px",
                background:"blue",
            }}>4</div>

            <button 
                onClick={() => {
                inputRef.current.scrollIntoView({
                behavior: "smooth",
                });
            }}
            >
                Scroll to top
            </button>
        </>
    );
}

// export default Scroll