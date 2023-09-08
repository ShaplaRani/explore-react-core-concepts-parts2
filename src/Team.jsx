import { useState } from "react"

export default function Team(){
    const [count , setCount] = useState(11)
    function handleAdd(){
        const newCount = count + 1;
        setCount(newCount)
    }
    function handleReduce(){
        
        setCount(count - 1)
    }
    return(
        <div style={{border:'2px dashed green',padding:'10px',margin:'12px'}}>
            <h3>Players: {count}</h3>
            <button onClick={handleAdd} className="btn"> Add </button>
            <button onClick={handleReduce} className="btn"> Reduce </button>
        </div>
    )
}