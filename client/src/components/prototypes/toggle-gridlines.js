import React from 'react';

const ToggleGridlines = ({checked, handleChange}) => {

    return (
        <div className="toggle-gridlines">
            <div className="ui toggle checkbox" onClick={handleChange} >
                <input type="checkbox" name="public" value={checked} />
                <label>Show grid lines</label>
            </div>
        </div>
    );
};

export default ToggleGridlines;
