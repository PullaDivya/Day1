import { useEffect,useState } from "react"

function Data(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData =async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(res.ok);
           
            const resData= await res.data;
            setData(resData);
        }
        fetchMyData();
      

    },[]);
    return (
        <div>
            Fetching Data...
            
      
    
            
                
        </div>
    );
}
export default Data;
