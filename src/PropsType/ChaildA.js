import React from 'react'
import PropTypes from 'prop-types'
class ChaildA extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name ,StudentDetails} =this.props
        console.log(this.props,"My Props")
        console.log(this.props)
        return(
            <div>
                <label>Name:</label>
                <h3>{name}</h3>
                <lable>Student Information</lable>
                <div>
                    {StudentDetails.map(item=> <div>
                        <div>Subject:{item.sub}</div>
                        <div>Marks:{item.Mark}</div>
                    </div>)}
                    {/* {StudentDetails.map(item=>{
                            <div>
                             <div>Subject:{item.Sub} </div>
                             <div>Marks:{item.Mark}</div>
                            </div>
                    })*/}
                </div> 
            </div>
        )
    }
};

ChaildA.defaultProps={
    name:'',
    StudentDetails:[]
}
  
ChaildA.propTypes ={
    name:PropTypes.string,
    StudentDetails:PropTypes.array
}

export default ChaildA