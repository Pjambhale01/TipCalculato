import React from 'react';
import { render } from 'react-dom';

class CalculateTip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            BillAmount: 0,
            Service: 0,
            custDetails:[], 
            //Service: [''],
            Cust_Name:'',
        }
    }
    AddCust=()=>{
        this.setState({
            custDetails:[...this.state.custDetails,{Name:this.state.Cust_Name,serviceRat:this.state.Service}],Cust_Name:''
        })
    }
    
    render() {
        return (
            <div>
                <p>Tip Calculator</p>
                <div>
                    {/* <p>{this.state.BillAmount}</p>
                    <p>{this.state.Service}</p>
                    <p>{this.state.Cust_Name}</p> */}
                    <p>{this.state.custDetails.map((item)=>{
                        return <li>name:{item.Name }Servicerat:{item.serviceRat*this.state.BillAmount}</li> 
                    })}</p>
                    <p>Bill Amount</p>
                    <input type='text' value={this.state.BillAmount} onChange={(val) => { this.setState({ BillAmount: val.target.value }) }}></input>
                    <select value={this.state.Service} onChange={(val) => { console.log(this.setState({ Service: val.target.value })) }}>
                        <option value='0.20'>excellent (20%)</option>
                        <option value='0.10'>Moderate (10%) </option>
                        <option value='0.05'>bad (5%) </option>
                    </select>
                    <input type='text' placeholder='Custumor Name' value={this.state.Cust_Name} onChange={(val) => { this.setState({ Cust_Name: val.target.value }) }}></input>
                    <button onClick={()=>{this.AddCust()}}>AddCostumer</button>
                   
                </div>
                <p>{this.state.custDetails.map((item)=>{
                    return item.serviceRat * this.state.BillAmount
                }).reduce((sum,value)=>{return sum+value},0)}</p>
                <p>{this.state.custDetails.length}</p>
            </div>
        )
    }
    
}

export default CalculateTip