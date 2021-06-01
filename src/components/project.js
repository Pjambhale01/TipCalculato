import React from 'react'
import axios from 'axios'

class PersonalList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            temp:''
        }

    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            this.setState({list:res.data})
        })
    }
    halclick=(e)=>{
        axios.post('https://jsonplaceholder.typicode.com/users').then(res => {
            this.setState({list:[...this.state.list,{name:this.state.temp,email:this.state.temp}],temp:''})
        })     
    }
    render() {
        console.log(this.state.list)
        return (
            <div>  
                <input type = 'text' value={this.state.temp} onChange={(e)=>{this.setState({temp:e.target.value})}}></input>
                <button onClick={()=>this.halclick()}>click</button>
                <ul>{this.state.list.map(i => <li>{i.name}{i.email}</li>)}</ul>
            </div>
        )
    }
}
export default PersonalList