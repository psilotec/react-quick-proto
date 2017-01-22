import React, { Component } from 'react';

import ToggleGridlines from './toggle-gridlines';
import ProtoBoard from './proto-board';

class ProtoMain extends Component {
    constructor(props) {
        super(props);

        // State to keep track of gridlines checkbox
        this.state = {
            checked: false,
        };

        // Binding so child methods have access to setState
        this.handleToggle = this.handleToggle.bind(this);
        this.renderGridlines = this.renderGridlines.bind(this);
    }
    
    // Method to toggle checked
    handleToggle() {
        this.setState({checked: !this.state.checked});
    }

    // Method to change ProtoBoard className for gridLine styling
    renderGridlines() {
        return (this.state.checked) ? "proto-board-flex gridlines" : "proto-board-flex";
    }
    render() {        
        return (
            <div className="proto-main-flex">
                <h2>Project Name</h2>

                <ToggleGridlines handleToggle={this.handleToggle} />

                <ProtoBoard renderGridlines={this.renderGridlines} />
            </div>
        );
    }   
}

export default ProtoMain;