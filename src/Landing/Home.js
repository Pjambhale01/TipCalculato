import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = (props)=>{
    const {name} = props
    console.log(name)

    return(
        <div>
            <h1>This is home page</h1>
            <Link to='/edit'>Name</Link>
        </div>
    )

}

const mapStatetoProps = state =>({
    name:state.name
})
    
export default connect(mapStatetoProps,Home)
