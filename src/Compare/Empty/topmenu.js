import React from 'react';
import './shop.css';

class Topmenu extends React.Component{
    render(){
        return(
            <div>
                <p id="topmenu1">선택하신</p>
                <p id="topmenu2">보충제</p>
                <div className="menu_type">
                    <div className="menu_type_in">
                        <p>BCAA</p>
                    </div>
                    <div className="menu_type_in">
                        <p>BCAA</p>
                    </div>
                    <div className="menu_type_in">
                        <p>BCAA</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topmenu;