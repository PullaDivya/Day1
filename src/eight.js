import React from "react";

class Eight extends React.Component{
    name="Reactjs";
    count=0;
   

    constructor(){
        super();
        this.state={
            number:1
        };
        console.log("constructor is called");

    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentWillUnmount(){
        console.log("will unmounted");
    }
    componentDidUpdate = ()=>{
        console.log("will be updated");
    }
    funcEightBtnClick(){
        console.log("button clicked");
        console.log(this.count+1);
        this.setState({number: this.state.number+1});
        

    }


    render(){
        return(
            <div>

        <h2>This is class component {this.name}{this.state.number}</h2>
            <button  className="btn btn-primary" onClick={this.funcEightBtnClick}>click me</button>

        </div>

        );
    }
}
export default Eight;