import React from 'react'
import ChaildA from './ChaildA'
class Myparent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'Parmeshwar',
            subjectDetails:[
                {Sub:'Math',Mark:88},
                {Sub:'eng',Mark:78},
                {Sub:'phy',Mark:68},
                {Sub:'chem',Mark:87},
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Student Information</h1>
                <ChaildA name={this.state.name} StudentDetails={this.state.subjectDetails}/>
                <ChaildA/>
            </div>
        )
    }
}
export default Myparent