import React from 'react'
class update extends React.Component {
        constructor() {
            super();
            this.state = { sayings: "" };
        }
        update(e) {
            this.setState({ sayings: this.refs.anything.value });
        }
        render() {
            return (
                <div>
                    <input/>
                    Mukul Says <input type="text" ref="anything"
                        onChange={this.update.bind(this)} />
                    <br />
                    <em>{this.state.sayings}</em>
                </div>
            );
        }
    }
export default update