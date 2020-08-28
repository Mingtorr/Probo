import React, { Component } from 'react';
import './Subscribe.css'
import Appbar from './Appbar/appbar';
import aa from './Subscribe/beach.jpg';

class Subscribe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '  ',
            explain: '   ',
            img: aa
        }

        this.a1 = this.a1.bind(this);
        this.a2 = this.a2.bind(this);
        this.a3 = this.a3.bind(this);
        this.a4 = this.a4.bind(this);
        this.a5 = this.a5.bind(this);
        this.a6 = this.a6.bind(this);
        this.a7 = this.a7.bind(this);
        this.a8 = this.a8.bind(this);
        this.a9 = this.a9.bind(this);
    
    }

    a1(e) {
        this.setState({
            title: '펌핑감이 좋은',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a2(e) {
        this.setState({
            title: '뭉친 근육',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a3(e) {
        this.setState({
            title: '게이너',
            explain: '게이너는 체중의 증가를 위해 탄수화물의 비중이 높은 보충제를 말합니다.게이너의 성분 함량을 보면 탄수화물과 단백질의 비율이 대략 3 : 7 또는 2 : 8로 탄수화물이 많습니다. 그래서 칼로리가 아주 높습니다. 제품마다 다르지만 1회 섭취 당 600 ~ 1000 kcal로 높아요. 드시면 칼로리가 높아 살이 금방 늘어납니다. 뭔지 모르고 먹다 보면 금방 뚱뚱이가 됩니다. 벌크업(Bulk up)이란 단어 많이 들어보셨죠? 한국어로 "부피가 늘다." 라는 뜻을 가지고 있습니다. 말 그대로 몸과 근육을 크게 키우기 위해 먹는 것이지요.',
            img: aa
        })
    }
    a4(e) {
        this.setState({
            title: 'BCAA',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a5(e) {
        this.setState({
            title: 'WPI 보충제',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a6(e) {
        this.setState({
            title: '아연 보충제',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a7(e) {
        this.setState({
            title: '부스터',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a8(e) {
        this.setState({
            title: '크레아틴',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }
    a9(e) {
        this.setState({
            title: '글루타민',
            explain: '가나다라 마바사 입니다.',
            img: aa
        })
    }

    render() {
        return (
            <div className="Sub_allpage">

                <div>
                    <Appbar />
                </div>


                <div className="Sub_content">

                    <div className="Sub_title_box">
                        <div className="Sub_title_text">성분 알아보기</div>
                    </div>


                    <div className="Sub_buttons">
                        <button className="Sub_Button" onClick={this.a1}>펌핑감이 좋은</button>
                        <button className="Sub_Button" onClick={this.a2}>뭉친 근육</button>
                        <button className="Sub_Button" onClick={this.a3}>게이너</button>
                        <button className="Sub_Button" onClick={this.a4}>BCAA</button>
                        <button className="Sub_Button" onClick={this.a5}>WPI 보충제</button>
                        <button className="Sub_Button" onClick={this.a6}>아연 보충제</button>
                        <button className="Sub_Button" onClick={this.a7}>부스터</button>
                        <button className="Sub_Button" onClick={this.a8}>크레아틴</button>
                        <button className="Sub_Button" onClick={this.a9}>글루타민</button>
                    </div>

                    <div className="Sub_explain">
                        <h1 className="choice">{this.state.title}</h1>

                        <div className="Sub_explain_box">

                            <div className="Sub_explain_text">
                                {this.state.explain}
                            </div>

                            <div className="Sub_explain_img">


                                <img src={this.state.img} width="290" className="img"/>



                            </div>
                        </div>
                    </div>

                </div>

                <div className="Sub_bottom_bar">
                    보 충 제 &nbsp; 비 교 할 &nbsp; 땐  ProBo!
                </div>
            </div>
        )
    }
}

export default Subscribe