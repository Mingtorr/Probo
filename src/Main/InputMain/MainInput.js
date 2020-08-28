import React from 'react';
import './MainInput.css';

class InputMain extends React.Component{
    render(){
        return(
            <div className="main_input">
                <input placeholder="                                          보충제 종류/가격/성분"/>
                <div className="maininput_text">
                    <p id="main_title">국내최고의 보충제비교사이트</p>
                    <hr/>
                    <p id="main_textp">국내의 모든 보충제를 비교분석 해드립니다.</p>
                    <p id="main_textp2">너무 어렵고 알기 힘들었던 보충제 쉽게 고를수있다!</p>
                </div>
            </div>
        )
    }
}

export default InputMain;