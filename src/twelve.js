import {useEffect, useRef, useState} from "react"
function Twelve(){
    
    const collegeIdRef=useRef(null);
    const passwordRef=useRef(null);
    const [loginMessage,setMessage]=useState('');

    useEffect(())

    const formSubmitted=(event)=>{
        event.preventDefault();
        
    }
    return(
        
        <div>
            <form onSubmit={"formSubmitted"}>
            <label>collegeId</label>
            <input type="text" ref={collegeIdRef}/>
            <button className="btn btn-dark btn sm">Submit</button>

             <label>password</label>
            <input type="password" ref={passwordRef}/>

            

            </form>
        </div>
        
    );
    
}

export default Twelve;