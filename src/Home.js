import { createContext, useState } from "react";
import On from "./onboard";
import { Link } from 'react-router-dom';
export const UserContext=createContext();
function Home(){
    const [isLogin,setLogin]=useState(false);
    return(
        <UserContext.Provider value={{isLogin,setLogin}}>
        <div>
            {isLogin ?
            <div>
                <h1>SVES Commerce</h1>
                <Link to="/Ass3">View products</Link>
            </div>
            : <On/>}
        </div>
        </UserContext.Provider>
    )
}
export default Home;