import React from 'react';
import './NewSubscribe.css';
import Logo from './Community/Logo.png'
import Commu_leftmenu from './Community/Commu_leftmenu';
import OSubscribe from './Subscribe';




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
                    <OSubscribe/>
                    </div>     
                </div>
            </div>
        )
    }
}

export default Community_page