import React from 'react';
import './Mypage_board.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

class Mypage_board extends React.Component {
    render() {
        return (
            <div className="boardList">
                <PerfectScrollbar>
                <p>헬스장 간 썰 푼다 </p>
                <p>창대 헬스장 여냐?? </p>
                <p>마더빠더 젠틀맨 </p>
                <p>아돈 기버 뻑 </p>
                <p>안녕하세요 빢빡이아저씨에요 </p>
                <p>하나둘셋넷얍! </p>
                <p>인성 문제 있어?1 </p>
                <p>임팩트 웨이 프로틴 </p>
                <p>임팩트 웨이 프로틴 </p>
                <p>임팩트 웨이 프로틴 </p>
                <p>임팩트 웨이 프로틴 </p>
                </PerfectScrollbar>
                
            </div>
        )
    }
}

export default Mypage_board