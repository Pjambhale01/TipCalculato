import React from 'react'

class Subjectname extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            marks:[],
            tempSub: '',
            tempMrk: 0,
            error: false,
            percent: 0


        }
    }
    Addsubject = () => {
        if (this.state.studentList.length === 5) {
            this.setState({ error: true })
        } else {
            this.setState({
                studentList:[...this.state.studentList,{ subject: this.state.tempSub, mark: this.state.tempMrk }], subject: ''
            })
        }

    }
    Percentage = () => {
        this.setState({
            marks:[...this.state.marks,this.state.tempMrk],
            //percent:[this.state.percent,this.state.tempMrk]
        })
        // if (this.state.percent.length === 5) {
        //     this.setState({ error: true })
        // } else {
        //     this.setState({
        //         percent:[...this.state.percent,{mks:this.state.marks}]
        //     })
        // }

    }
    render() {
        return (
            <div>

                <div style={{ float: 'left' }}>
                    Subject:
                <br></br>
                    <input type='text' value={this.state.tempSub} onChange={(val) => { this.setState({ tempSub: val.target.value }) }} />
                    {/* <p>{this.state.tempSub}</p>  */}
                </div>
                <div style={{ float: 'left', marginLeft: '50px' }} >
                    Marks:
                    <br></br>
                    <input type="text" value={this.state.tempMrk} onChange={(val) => { this.setState({ tempMrk: val.target.value }) }} />
                    {/* <p>{this.state.tempMrk}</p>  */}
                    <button onClick={() => { this.Addsubject() }}>Addsubject</button>
                </div>
                <div style={{ clear: 'both', marginTop: '20px', color: 'red' }}>
                    {this.state.error ? <div>Error.More than five</div> : ''}
                </div>
                <div style={{ clear: 'both', marginTop: '20px' }}>
                    <p style={{ marginTop: '20px' }} >{this.state.studentList.map((item) => {
                        return <li>-{`${item.subject}  Subject Score is ${item.mark}`}</li>
                    })}</p>
                </div>
                <button onClick={() => { this.Percentage() }}>Percent</button>
                {/* <p>{this.state.percent.map((item) => {
                    return item.mks
                }).reduce((sum,value)=>{return sum+value},0)}</p> */}
                <p>{(this.state.marks.map((item)=>{
                    return  item 
                }).reduce((sum,value)=>{return sum+value},0))/500}</p>
            </div>
        )
    }
}
export default Subjectname