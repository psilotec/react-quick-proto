import React, { Component } from 'react';

import ComponentBtn from './component-btn';

class ProtoMain extends Component {
    render() {
        return (
            <div className="proto-main flex">
                <h2>Proto Main</h2>
                <ComponentBtn />
            </div>
        );
    }
}

export default ProtoMain;