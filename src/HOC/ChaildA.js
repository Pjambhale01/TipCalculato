import React from 'react'
import ChaildB from './ChaildB'
import HocSetColor from './HOC'

class ChaildA extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props ,'consts')
        return(
            <div>
                <h1 style={this.props.backColor}>This is  my Chaild A component</h1>
            </div>
        )
    }
}
const Redchaild = HocSetColor("red")(ChaildA)
const PinkChaild = HocSetColor("pink")(ChaildA)
export {PinkChaild ,Redchaild,ChaildA }
export default HocSetColor("green")(ChaildA)