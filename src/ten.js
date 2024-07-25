import { useEffect, useState } from "react";

function Ten(){
    //const count=0;
    const [count,setCount]=useState(1);

    useEffect(()=>{
        //setCount(5);
        console.log("use effect is called");
    },[]);
    const btnUpdatCount =()=>{
        setCount(count+1);
    }
    const btnUpdateCount =()=>{
        setCount(count-1);
    }
    const btnaddtocard =()=>{
        setCount(1);
    }

    
    return(
        <div>
            {(count == 0)}?
            <button  className="btn btn-dark" onClick={btnaddtocard}>Add to card</button>
            


        
        <div style={{display:'flex'}}>
            
            <button  className="btn btn-dark" onClick={btnUpdatCount}>+</button>
            <h1>{count}</h1>
            <button  className="btn btn-dark" onClick={btnUpdateCount}>-</button>

        </div>
        </div>
    )

}
export default Ten;