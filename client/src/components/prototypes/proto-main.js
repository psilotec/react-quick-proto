import React, { Component } from 'react';

import ComponentBtn from './component-btn';

class ProtoMain extends Component {
    constructor(props) {
        super(props);

        // State to keep track of grid lines checkbox
        this.state = {
            checked: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({checked: !this.state.checked});
    }
    render() {
        console.log(this.state.checked);
        return (
            <div className="proto-main-flex">
                <div className="ui toggle checkbox" onClick={this.handleChange} >
                    <input type="checkbox" name="public" value={this.state.checked} />
                    <label>Show grid lines</label>
                </div>

                <h2>Project Name</h2>
                
                <ComponentBtn />
                <ComponentBtn />
                <ComponentBtn />
            </div>
        );
    }   
}

export default ProtoMain;