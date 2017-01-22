import React from 'react';

import ComponentBtn from './component-btn';

const ProtoBoard = ({renderGridlines}) => {

    return (
        <div className="ui fluid container segment">
        <div className={renderGridlines()}>
                <ComponentBtn />
                <ComponentBtn />
                <ComponentBtn />
        </div>
        </div>
    );
};

export default ProtoBoard;