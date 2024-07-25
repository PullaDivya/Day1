import akki from "./akki.jpeg";
function Card(props){
    return(
        <div>
            <img src={akki}  width="100" style={{border:'10px solid #FF0000',borderRadius:'50px'}}  />
            <h1>{props.program}</h1>
            <h2>{props.col}</h2>
            <h2>{props.user.name}</h2>
            <h2>{props.user.branch}</h2>
            <h2>{props.user.year}</h2>
            <button type="button" class="btn btn-primary">connect</button>
            <div class="container">
  <h2>Basic Card</h2>
  <div class="card">
    <div class="card-body">Basic card</div>
  </div>
</div>


        </div>
    );
}
export default Card;