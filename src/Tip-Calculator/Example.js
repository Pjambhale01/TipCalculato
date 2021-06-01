import React from 'react'
//import ChaildComponent from './Chailcomp'
class ExampleOne extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:['cell','Mobile'],
            temp:''

        }
    }
    Deletitem=(index)=>{
        this.setState({list:[...this.state.list.slice(0,index),...this.state.list.slice(index+1)]

        })
    }
    Addname=()=>{
        this.setState({
            list:[...this.state.list,this.state.temp],temp:''
        })
    }
    render(){
        return (
            <div>
             <p>{this.state.list.map((item,index)=>{
                 return <li>{item}<button onClick={()=>{this.Deletitem(index)}}>delet</button></li>
             })}</p>
              <div>
              <input type="text" value={this.state.temp} onChange={(val)=>{this.setState({temp:val.target.value})}}></input>
              <button onClick={()=>{this.Addname()}} >Additem</button>
              </div>
            </div>
        )
    }
}

export default ExampleOne