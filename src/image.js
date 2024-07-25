import React from 'react';
import watch from "./watch.jpeg";
import bracelet from "./bracelet.jpeg";
function Img(){
    return (
        <div>
            <h3> Reviews</h3>
            <h2>Divya</h2>
            <img src={watch} alt="this is" ></img>
            <h1>this product is good</h1>

            <h2>Vaishnavi</h2>
            <img src={bracelet} alt="this is" ></img>
            <h1>this product is bad</h1>

        </div>
    );
}
export default Img;