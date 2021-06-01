import React from 'react'
import './Indes.css'

class Tempapp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: ['', '', '', '', '', '', '', '', ''],
            toggale:false,
            winer:''

        }
    }
    handlesquear = (index) => {
        var arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],[2,4,6]]
        this.setState({
            a:[...this.state.a.slice(0,index),this.state.toggale?'x':'o',...this.state.a.slice(index+1)],toggale:!this.state.toggale
        },()=>{
            arr.forEach((item,index)=>{
                if(this.state.a[item[1]]!=''&&this.state.a[item[0]]==this.state.a[item[1]] && this.state.a[item[1]]==this.state.a[item[2]]){
                   // console.log('Winner is',this.state.a[item[0]])
                    this.setState({
                        winer:this.state.a[item[0]]
                        
                    })
                }else{
                    this.setState({
                         
                    })
                }
                 
            })
        })
    
    }
    
    render() {
       
        return (
            <div>
                <table>
                    <tr>
                        <td className={"squear"} onClick={() => this.handlesquear(0)}>{this.state.a[0]}</td>
                        <td className={"squear"} onClick={() => this.handlesquear(1)}>{this.state.a[1]}</td>
                        <td className={"squear"} onClick={() => this.handlesquear(2)}>{this.state.a[2]}</td>

                    </tr>
                    <tr>
                        <td className={"squear"} onClick={() => this.handlesquear(3)}>{this.state.a[3]}</td>
                        <td className={"squear"} onClick={() => this.handlesquear(4)}>{this.state.a[4]}</td>
                        <td className={"squear"} onClick={() => this.handlesquear(5)}>{this.state.a[5]}</td>
                    </tr>
                    <tr>
                        <td className={"squear"} onClick={() => this.handlesquear(6)}>{this.state.a[6]}</td>
                        <td className={"squear"} onClick={() => this.handlesquear(7)}>{this.state.a[7]}</td>
                        <td className={"squear"} onClick={() => this.handlesquear(8)}>{this.state.a[8]}</td>
                    </tr>
                </table>
                   <h1>Winner is :{this.state.winer}</h1>
            </div>
        )
    }


}
export default Tempapp