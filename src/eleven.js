import { useState } from "react";

function Eleven(){
    const [review,setReview]=useState('');
    const [reviewToDisplay,setDisplay]=useState([]);
    
    const addReview=()=>{
        console.log("Adding Review...");

    }
    const inputValueChange=(event)=>{
        console.log("input changed...");
        console.log(event.target.value);
        setReview(event.target.value);

    }
    return (
        <div>
            <input type="text" placeholder="Enter a review" onChange={inputValueChange}/>
            <button className="btn btn-dark btn sm" onClick={addReview}>add review</button>
            <p>{review}</p>
            <p>{reviewToDisplay}</p>

        </div>
    );

}
export default Eleven;