
import React from 'react'
//import ChaildA from './ChaildA'

const HocSetColor =(color)=> (WrappedComponent)=>{
   return class extends React.Component{
       constructor(props){
           super(props)
           this.state={
               backColor:{
                   color:color
               }
              
           }
       }
       render(){
           return <WrappedComponent backColor={this.state.backColor}/>
           
       }
   }
}
export  default HocSetColor 
