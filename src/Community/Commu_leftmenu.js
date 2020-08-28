import React from 'react';
import './Commu_leftmenu.css';
import Mypage_button from '../Mypage/Mypage_button';



class Commu_leftmenu extends React.Component{
    render(){
        return(
            <div className="leftmenu">
                <a href="/" style={{textDecoration:'none', color:'black'}}> 홈 </a>
                <a href="/subscribe" style={{textDecoration:'none', color:'black'}}>성분설명 </a>
                <a href="compare" style={{textDecoration:'none', color:'black'}}>제품비교 </a>
                <Mypage_button/>
                <a href="community" style={{textDecoration:'none', color:'black'}}>커뮤니티 </a>
            </div>
        )
    }
}

export default Commu_leftmenu