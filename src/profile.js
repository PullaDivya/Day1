import { useContext } from "react";
import { globalContext } from "./App";
import Nav from "./navigation";
function Profile(){
    const {globalUserObject,setGlobalUserObject}=useContext(globalContext)
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext)
    const logoutAction =()=>{setGlobalIsLogin(false);}
    return (
        <div>
            <Nav/>
            <div className="container card"style={{display:'flex',gap:'20px',flexDirection:'column',width:'400px',padding:'20px'}}>
            {globalUserObject.collegeIdValue}
        </div>
        </div>
    );
}
export default Profile;