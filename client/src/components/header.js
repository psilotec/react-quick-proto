import React from 'react';

const Header = () => {
    return (
      <div className='App'>
        <div className="ui top fixed menu">
          <div className="item">
            Quick Proto
          </div>
          <a className="item">About</a>
          <a className="item">Projects</a>
          <div className="right menu">
            <a className="item">Create New Project</a>
          </div>
        </div>
      </div>
    );
};

export default Header;