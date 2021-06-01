
import React from 'react'
//import ListTemplate from './ListTemplate'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['Samsung', 'Apple'],
            temp: ''
        }
    }
    deletItem = (index) => {
        this.setState({ list: [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)] })
    }

    handleclick = () => {
        this.setState({ list: [...this.state.list, this.state.temp], temp: '' })
    }


    render() {
        return (
            <div>
                <h4>inside the dashboard Component</h4>
                <h1>Add faviort Mobile</h1>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li>{item}<button onClick={() => { this.deletItem(index) }}>Delet</button></li>
                    })}
                </ul>
                <input type='text' value={this.state.temp} onChange={(val) => { this.setState({ temp: val.target.value }) }}></input>
                <button onClick={() => { this.handleclick() }}>Additem</button>

            </div>
        )
    }
}
class NextLayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['mango', 'Apples'],
            tempItem: ''
        }
    }

    handleclick = () => {
        this.setState({ list: [...this.state.list, this.state.tempItem], tempItem: '' })
    }


    render() {
        return (
            <div>
                <h2>Add your favroit Fruit</h2>
                <ul>
                    {this.state.list.map(item => <li>{item}</li>)}
                </ul>
                <input type='text' value={this.state.tempItem} onChange={(evt) => { this.setState({ tempItem: evt.target.value }) }}></input>
                <button onClick={() => { this.handleclick() }}>Additem</button>
            </div>
        )
    }
}
class AnotherOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['One', 'Two', 'Three', 'Four'],
            temp:''
        }
    }
    deletItem=(index)=>{
        this.setState({list:[...this.state.list.slice(0,index),...this.state.list.slice(index+1)]})
    }
    

    AddItem = ()=>{
        this.setState({list:[...this.state.list,this.state.temp],temp:''})
    }


    render() {
        return (
            <div>
                <p>Parmeshwar Jambhale</p>
                <ul>
                    {this.state.list.map((item,index) => {
                        return <li>{item} <button onClick={()=>{this.deletItem(index)}}>delet</button></li>
                    })}
                </ul>
                <input type="text"value={this.state.temp} onChange={(val)=>{this.setState({temp:val.target.value})}}></input>
                <button onClick={()=>{this.AddItem()}}>AddNumbers</button>
            </div>
        )
    }
}

export { NextLayer, AnotherOne }
export default Dashboard