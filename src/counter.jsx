import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    const handleAdd = () =>{
       const newCount = count+1;
       setCount(newCount);
    }
    const handleRemove = () =>{
       const newCount = count-1;
       setCount(newCount);
    }
    return(
        <div style={{border:'2px solid red', padding:'10px'}}>
         <h3>Count : {count}</h3>
         <div>
         <button onClick={handleAdd} className="btn">Add</button>
         <button onClick={handleRemove} className="btn">Remove</button>
         </div>
        </div>
    );
}