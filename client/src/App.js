import React, { Component } from 'react';
import '../styles/style.scss';

import Header from './components/header';
import ProtoMain from './components/prototypes/proto-main';

class App extends Component {
  render() {
    return (
      <div className="app-flex">
        <Header />
        <ProtoMain />
      </div>
    );
  }
}

export default App;
