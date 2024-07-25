import { useState } from "react"
import Form from "./form";
import Reg from "./rgister";
import Nav from "./navigation";

function On(){
    const [isLogin,setIsLogin]=useState(true);
    const showLogin=()=>{setIsLogin(true)}
    const showRegister=()=>{setIsLogin(false)}

    return(
        <div>
            <Nav/>
            <button onClick={showLogin}>Login</button>
            <button onClick={showRegister}>Register</button>
        {isLogin  ? <Form/> : <Reg/>}
            
        </div>
    )
}
export default On;