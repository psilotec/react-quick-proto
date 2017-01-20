import React, { Component } from 'react';

import ComponentBtn from './component-btn';
import ToggleGridlines from './toggle-gridlines';

class ProtoMain extends Component {
    constructor(props) {
        super(props);

        // State to keep track of grid lines checkbox
        this.state = {
            checked: false,
            gridlines: ""
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
                <ToggleGridlines checked={this.state.checked} handleChange={this.handleChange} />

                <h2>Project Name</h2>
                
                <ComponentBtn />
                <ComponentBtn />
                <ComponentBtn />
            </div>
        );
    }   
}

export default ProtoMain;