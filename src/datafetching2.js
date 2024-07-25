import { useEffect,useState } from "react";

function Df(){
    const [data,setData]=useState([]);
    useEffect(()=>{
    
        const fetchMyData =async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');

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
export default Df;