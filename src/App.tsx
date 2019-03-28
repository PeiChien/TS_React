import React from 'react';
import {NavBar} from './components/NavBar';
import {MainParts} from './components/MainParts';
import {MyInfo} from './components/MyInfo';
import {Footer} from './components/Footer';
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <MainParts></MainParts>
        <MyInfo></MyInfo>
        <Footer></Footer>
      </div>
    );
  }
}

export {App};