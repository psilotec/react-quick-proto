import React from 'react';

const ComponentBtn = () => {
    return (
        <div className="component-btn">
            <div className="ui icon buttons">
            <button className="ui teal button">
                <i className="caret black left icon"></i>
            </button>
            <button className="ui teal button">
                App
            </button>
            <button className="ui teal button">
                <i className="caret black right icon"></i>
            </button>
            </div>
        </div>
    );
};

export default ComponentBtn;