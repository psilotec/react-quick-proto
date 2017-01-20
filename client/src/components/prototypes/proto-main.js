import React, { Component } from 'react';

import ComponentBtn from './component-btn';
import ToggleGridlines from './toggle-gridlines';

class ProtoMain extends Component {
    constructor(props) {
        super(props);

        // State to keep track of grid lines checkbox and the classname for root element of this component
        this.state = {
            checked: false,
        };

        // Binding so handleToggle method has access to setState
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({checked: !this.state.checked});
    }

    renderGridlines() {
        if (this.state.checked) {
            return "proto-main-flex gridlines";
        }
        return "proto-main-flex";
    }
    render() {        
        return (
            <div className={this.renderGridlines()}>
                <ToggleGridlines handleToggle={this.handleToggle}/>

                <h2>Project Name</h2>
                
                <ComponentBtn />
                <ComponentBtn />
                <ComponentBtn />
            </div>
        );
    }   
}

export default ProtoMain;