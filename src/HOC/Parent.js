import React from 'react'
import CrazyChaild,{ChaildA, PinkChaild ,Redchaild} from './ChaildA'
//import ChaildB from './ChaildB'
class Parent extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                 <h1>Parent</h1>
                <CrazyChaild/>
                <PinkChaild/>
                <Redchaild/>
                <ChaildA/>
            </div>
        )
    }
}
export default Parent