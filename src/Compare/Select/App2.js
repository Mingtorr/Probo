import React, { useState } from 'react';
import './App2.css';
import Searchbar from './Searchbar';
// import 'react-router-dom';

function App2() {

  const [select, setSelect] = useState("펌핑감이 좋은")
  //버튼색 바꾸고 싶어잉const [color, setColor] = useState('true')



  const pumping = (e) => {
    setSelect('펌핑감이 좋은');
  }
  const andcls = (e) => {
    setSelect('뭉친 근육');
  }
  const gay = (e) => {
    setSelect('게이너');
  }
  const bcaa = (e) => {
    setSelect('BCAA');
  }
  const wpi = (e) => {
    setSelect('WPI 보충제');
  }
  const zn = (e) => {
    setSelect('아연 보충제');
  }
  const booster = (e) => {
    setSelect('부스터');
  }
  const creatin = (e) => {
    setSelect('크레아틴');
  }
  const glu = (e) => {
    setSelect('글루타민');
  }
  const power = (e) => {
    setSelect('파워젤 보충제');
  }

  return (
    <div>
      <div className="World">
        <div className="Half">
          <div className="Fix">고객님 선택하신</div>

          {/* useState */}
          <div className="Select" >{select}</div>
          
          <div className="Div">
            <button className="Button" onClick={pumping}>펌핑감이 좋은</button>
            <button className="Button" onClick={andcls}>뭉친 근육</button>
            <button className="Button" onClick={gay}>게이너</button>
            <button className="Button" onClick={bcaa}>BCAA</button>
            <button className="Button" onClick={wpi}>WPI 보충제</button>
            <button className="Button" onClick={zn}>아연 보충제</button>
            <button className="Button" onClick={booster}>부스터</button>
            <button className="Button" onClick={creatin}>크레아틴</button>
            <button className="Button" onClick={glu}>글루타민</button>
            <button className="Button" onClick={power}>파워젤 보충제</button>
          </div>
        </div>

        

          <Searchbar/>
        
    

      </div>

     
    </div>
    
  );
}

export default App2;
