import React from 'react';

const Header = () => {
    return (
      <div className='App'>
        <div className="ui top fixed menu">
          <div className="item">
            Logo
          </div>
          <a className="item">Features</a>
          <a className="item">Testimonials</a>
          <a className="item">Sign-in</a>
        </div>
      </div>
    );
};

export default Header;