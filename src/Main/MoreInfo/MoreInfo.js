import React from 'react';
import './MoreInfo.css';
import icon_1 from './icon(1).png';
import main3_image from './main3_image.jpg';

class MoreInfo extends React.Component{
    render(){
        return(
            <div>
                {/* <div className="inner_bg">
                    <div className="inner_text">
                        <div id="title">
                            ProBo<br/>
                            내 몸에 맞는 완벽한 보충제
                        </div><br/>
                        <div id="subtitle">
                            보충제 검색부터 비교까지 모든 것<br/>
                        </div>
                    </div>
                </div> */}
                    <div className="inner">
                        <div className="inner_left">
                        <div className="inner_title">찾기 & 비교</div>
                            <div className="inner_content">모든 보충제를 찾아보고 비교해서</div>
                            <div className="inner_content">내 몸에 맞는 제품을 찾으세요.</div>
                            <div className="icon_1_div">
                            <a href=""><img src={icon_1} alt="icon_1"/></a>
                            </div>             
                        </div>                        
                        <div className="inner_right">
                            <div className="inner_title">성분 알아보기</div>
                            <div className="inner_content">모르는 성분을 찾아보고</div>
                            <div className="inner_content">효과를 알아보세요.</div>                     
                            <div className="icon_1_div">
                            <a href=""><img src={icon_1} alt="icon_1"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="add_inner">
                        <div className="diet_management_left">
                            <div className="diet_management_title">당신이 오늘 먹은 칼로리는?</div>
                            <div className="diet_management_content">구체적인 영양정보, 식습관 파악</div>
                            <button className="diet_btn">더 알아보기</button>
                        </div>
                        <div className="diet_management_right">
                            <img src={main3_image}/>
                        </div>
                    </div>

                    <div className="inner2">
                        <div className="inner2_left">
                            <img className="inner2_image" src={main3_image}/>
                            <p className="inner2_left_title">커뮤니티</p>
                            <button className="inner2_button">더 알아보기</button>
                        </div>
                        <div className="inner2_center">
                            <img className="inner2_image" src={main3_image}/>
                            <p className="inner2_center_title">게시판</p>
                            <button className="inner2_button">더 알아보기</button>
                        </div>
                        <div className="inner2_right">
                            <img className="inner2_image" src={main3_image}/>
                            <p className="inner2_right_title">운동 유튜브</p>
                            <button className="inner2_button">더 알아보기</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MoreInfo;