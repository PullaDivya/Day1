import React from 'react';

function Seven(){
    const names=["name1","name2","name3","name4","name5"];
    const namesList=names.map((names,index) => <li key={index}>{names}</li>);
        return(
            <div>
                <ul>{namesList}
                </ul>
               
            </div>


        );
    
}
export default Seven;