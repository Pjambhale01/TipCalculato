import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Chaild_A from './Chaild_A'

const HOCSelector = (WrappedComponent)=>{
    return class HOCSelector  extends React.Component{
        constructor(props){
            super(props)
            this.state={
                name:[]
            }
        }
        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            // .then((res) => res.json())
            .then((res) => this.setState({name:res.data}))
        }
        render(){
            
            return(
                <div> 
                   <WrappedComponent Name={this.state.name}/>    
                </div>
            )
        }
    }
    return HOCSelector
     
}
export default HOCSelector