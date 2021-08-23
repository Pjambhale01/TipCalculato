import React from 'react'

class Chaild_A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name} =this.props
        // console.log(this.props)
        return(
            <div>
                {/* <p>Chaild_A</p> */}
                {this.props.name}
            </div>
        )
    }
}
export default Chaild_A