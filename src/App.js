// import PersonalList from './components/project'
//import Myparent from './PropsType/Myparent';
//import Tempapp from './Quiz-Component/Index1'
// import Header from './Todocomponent/Header'
// import HeaderOfCalculator from './Tip-Components/Header'

import { Provider } from "react-redux";
import { BrowserRouter, Route, Router, exact, Switch } from "react-router-dom";
// import Chaild_A from "./Component/Chaild_A";
import Edit from "./Component/Edit";
import HOCSelector from "./Component/Parent";
import update from "./Component/Problem";
import { createStore } from 'redux';
import { reducer } from './Component/Reducer';
import {useContext, useEffect, useState} from 'react'

// import Parent from "./Component/Parent"; 
// import HocSetColor from "./HOC/HOC";
import Home from "./Landing/Home";
import { ContextAPI } from "./Component/Context";
// import Header from './Tip-Components/Header'
const intialValue = {
  name:[]
}
const store = createStore(reducer,intialValue)
function App() {
  const [user,SetUser]=useState()
  console.log(user,'user')
  const data = useContext(ContextAPI)

  useEffect({
    if(data){
      SetUser(user)
    }
  })
  // console.log(data,'inside the App')
  return (
    <div className="App">
      {/* <HeaderOfCalculator/> */}
      {/* <Header/> */}
      {/* <Parent/>
      <Chaild_A/> */}
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/' component={update}/> */}
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route  path='/name' component={HOCSelector}/> */}
          {/* <Route path='/edit' component={Edit}/> */}
          {/* <Route path='/edit' render={(routeProps) => <Edit {...routeProps} {...props} />} /> */}
          {/* <Route path='/Users' render={(routeProps)=><UserSection userInfo={state}{...routeProps}/>}/> */}
        </Switch>

      </BrowserRouter>
      </Provider>
     
    </div>
  )
}
export default App;
