import watch from "./watch.jpeg";
function Card(props){
    return(
        <div>
            <img src={watch}  width="100" style={{border:'10px solid #FF0000',borderRadius:'50px'}}  />
            <h1>{props.program}</h1>
            <h2>{props.col}</h2>
            <h2>{props.user.name}</h2>
            <h2>{props.user.branch}</h2>
            <h2>{props.user.year}</h2>
            <button type="button" class="btn btn-primary">Add to cart</button>
            

        </div>
    );
}
export default Card;