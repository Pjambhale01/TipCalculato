import React from 'react'

class ListTemplate extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <ul>
                    {this.state.list.map(item => <li>{item}</li>)}
                </ul>
                <input>AddKeys</input>
            </div>
        )
    }
}
export default ListTemplate

