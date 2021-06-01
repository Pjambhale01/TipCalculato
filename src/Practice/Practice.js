import React from 'react'

class ExampleOne extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:['Apple','Mango','Banana','Greps','iphone','Samsung','mobile'],
            Selectli:[],
            Item:[],
            checked:true
            
    
          

        }
    }
    remove=(evt)=>{
      
        if(evt.target.value===true){
            this.setState({Selectli:[...this.state.Selectli,evt.target.value]})
        }else{
        // if(evt.target.value===false){
        //     this.setState({
        //         Selectli:[...this.state.Selectli,evt.target.value],Selectli:''
        //     })
        }
        
    }
    Additem =(index)=>{
        this.setState({
            Item:[...this.state.Item,this.state.Selectli],Selectli:''
        })
    }
    render(){
        return(
            <div>
                <div style={{float:'left'}}>
                {this.state.list.map((item)=>{
                    return <li>{item}
                    <input type='checkbox'   value={this.state.checked} onChange={()=>{this.remove()}}>
                    </input></li>
                })}
                <button onClick={()=>{this.Additem()}}>Additem</button>
                </div>
                <div style={{float:'left',marginLeft:'50px'}}>
                 <p>{this.state.Item.map((item)=>{
                    return <li>{item}</li>
                })}</p>
                </div>
                
            </div>
        )
    }
}
export default ExampleOne