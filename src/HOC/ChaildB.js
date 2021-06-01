import React from 'react'
//import HocSetColor from './HOC'
class ChaildB extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props,"Const")
        return(
            <div>
                <p >This is my Chaild b component</p>
            </div>
        )
    }
}

export default ChaildB