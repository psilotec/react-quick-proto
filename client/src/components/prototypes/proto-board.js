import React from 'react';

import ComponentBtn from './component-btn';

const ProtoBoard = ({renderGridlines}) => {

    return (
        <div className={renderGridlines()}>
                <ComponentBtn />
                <ComponentBtn />
                <ComponentBtn />
        </div>
    );
};

export default ProtoBoard;