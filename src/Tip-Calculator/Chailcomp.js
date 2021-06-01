import React from 'react'

class ChaildComponent extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                {this.props.listOfitem.map((item=><li>{item}</li>))}
            </div>
        )
    }
};
export default ChaildComponent