import React, { Component } from 'react';
import './Main.css';
import Appbar from './Appbar/appbar';
import InputMain from './Main/InputMain/MainInput';
import MoreInfo from './Main/MoreInfo/MoreInfo';
import Bottom1 from './Main/Bottom/Bottom1';

class Main extends Component{
  render(){
    return(
    <div>
      <div className="App">
        <Appbar/>
      </div>
      <div className="inputbox">
        <InputMain/>
      </div>
      <div className="bottombox">
       <MoreInfo/>
      </div>
      <div className="bottombox">
       <Bottom1/>
      </div>
    </div>
      )
  }
}

export default Main;