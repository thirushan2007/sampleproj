import React from "react";

class Homie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Name'
        }
        console.log("constructor executed")
    }
    componentDidMount(){
        console.log("componentDidMount executed")
    }
    render(){
        return (<div>
            {console.log("render executed")}
            {this.state.name} 
            <br></br>
            <button onClick={()=>{
                this.setState({
                    name: "Thirushan"
                    })
                    }}>Update</button>
        </div>)
    }
    }

export default Homie;