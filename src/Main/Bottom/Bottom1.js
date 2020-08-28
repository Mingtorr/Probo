import React from 'react';
import './Bottom1.css';

class Bottom1 extends React.Component{
    render(){
        return(
            <div className="Bottom_board">
                {/* <div className="Bottom1_board">
                    <div className="b1_left">
                        <p>지금 당장 멤버쉽 등록하세요.</p>
                        <p>지금 등록하시면 30% 할인 기회.</p>
                        <p>놓치고 울지 말기.</p>
                        <button className="b1_left_bt">결제하기</button>
                    </div>
                    <div className="b1_right">
                        <p>멘트 뭐 넣어야할지 모르겠다. 이거 같이 생각해보장</p>
                        <p>이 멍청이들아 다들 휴가가서 좋겠다 지들끼리만 가고 좀 빡치네</p>
                        <p>썅 오늘 짜장면 옷에 흘렸네</p>
                    </div>
                </div> */}
                {/* <hr id="hr1"/> */}
                <div className="Bottom2_board">
                    <div className="b2_left">
                        C 2020 WeSix, Inc. All rights reserved
                    </div>
                    <div className="b2_right">
                        <div className="b2_1">회사소개</div>
                        <div className="b2_2">개인정보 처리방침</div>
                        <div className="b2_4">고객센터</div>
                    </div>
                </div>
                <hr id="hr2"/>
                <div className="Bottom3_board">
                    <div className="probo_board">
                        ProBo
                    </div>
                    <div className="contact">
                        <div className="contact1">
                            (우)51140 국립창원대학교 경남 창원시 의창구 창원대학로 20 국립창원대학교
                        </div>
                        <div className="contact2">
                            TEL 010-9945-8425
                        </div>
                        <div className="contact3">
                            Copyright (c) By Changwon National University. All right reserved
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom1;