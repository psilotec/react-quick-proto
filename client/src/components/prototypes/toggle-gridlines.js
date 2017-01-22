import React from 'react';

const ToggleGridlines = ({checked, handleToggle}) => {

    return (
        <div className="toggle-gridlines">
            <div className="ui toggle checkbox">
                <input type="checkbox" name="public" value={checked} onClick={handleToggle} />
                <label>Show grid lines</label>
            </div>
        </div>
    );
};

export default ToggleGridlines;