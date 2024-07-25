import React from 'react';
import Five from './five';

function Arr(){
    const branches=["IT","CSE","ECE","EEE","AIML"];
    const branchList=branches.map((branches,index) => <li key={index}>{branches}</li>);
        return(
            <div>
                <h1>List of Branches</h1>
                <ul>{branchList}
                </ul>
                <Five/>
            </div>


        )
    
}
export default Arr;