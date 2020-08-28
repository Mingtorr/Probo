import React from 'react';
import './Community_page.css';
import Logo from './Logo.png'
import Main_photo from './Main_photo.jpg';
import Commu_leftmenu from './Commu_leftmenu';
import Commu_page_list from './Commu_page_list';



class Community_page extends React.Component{
    render(){
        return(
            <div>

                <div className="commu_top">
                    <div className="commu_logo_div">
                      <img src={Logo} alt="Logo" width="180" className="commu_logo"/>
                      <Commu_leftmenu/>

                      <div className="commu_ad">

                      </div>
                    </div>

                    <div className="commu_photo_div">
                        
                        <div className="commu_mainphoto">
                            <h1>커뮤니티 게시판</h1>
                            <p>각종 운동정보 하루루틴 식단을 공유해 보세요</p>
                        </div>
                        {/* <img src={Main_photo} className="commu_mainphoto"/> */}

                       <div className="commu_bottom_contents">
                            <div className="commu_upbox">
                                <div className="commu_upbox_left">
                                    <h2>자유게시판</h2>
                                    <Commu_page_list/>
                                </div>
                                <div className="commu_upbox_right"> 
                                    <h2>하루루틴</h2>
                                    <Commu_page_list/>
                                </div>
                            </div>

                            <div className="commu_downbox">
                                <div className="commu_upbox_left">
                                    <h2>식단</h2>
                                    <Commu_page_list/>
                                </div>
                                <div className="commu_upbox_right"> 
                                 
                                </div>
                            </div>

                       </div>
                    </div>     
                </div>
            </div>
        )
    }
}

export default Community_page