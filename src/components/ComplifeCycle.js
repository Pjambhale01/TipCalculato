import React from 'react';
import Childcomplife from './Childcomplife'
class complifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:3,
            
        }
    }
    increase=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
   
    render(){
       // console.log(this.state.count)
        return(
            <div>
                
                <p>this is a parent</p>
                <Childcomplife counter={this.state.count}/>
                <button onClick={()=>{this.increase()}}>increas/counter</button>
               
            </div>
        )
    }
}
export default complifeCycle