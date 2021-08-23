import React from 'react'
import { ContextAPI } from './Context'
import HOCSelector from './Parent'
import {useContext} from 'react'

const Edit = (props)=>{
    const data = useContext(ContextAPI)
    console.log(data,'jxbkbj')
      return(
          
          <div>
           {data.user.map((i)=><li>{i.name}</li>)}
          </div>
      )
}


export default Edit