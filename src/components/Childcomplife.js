import React from 'react';
class Childcomplife extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //mycount: this.props.counter ,
           
        }

    }
    

    render() {
    //  console.log('counter'+ this.state.userList)
        return (
            <div>
                <p>this is a child</p>
             <div> Counter:{this.props.counter}</div>
               
            </div>
        )
    }
}
export default Childcomplife