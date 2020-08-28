import React from 'react';
import './appbar.css';
import Appimg from './appbar.png';
import Menu from './menu.png';
import { Link } from "react-router-dom";
import Login_button from '../Login/Login_button';
import Mypage_button from '../Mypage/Mypage_button';

class Appbar extends React.Component{
    constructor(props){
        super(props);
        
        this.menuclick = this.menuclick.bind(this);
    }
    menuclick(){
        const menu = document.querySelector('.drop_menu');
        const maininput = document.querySelector('.main_input')
        menu.classList.toggle('active');
        maininput.classList.toggle('active');
    }
    
    render(){
        return(
            <div className="appbar"> 
                <Link to="/"><img src={Appimg} alt="" height="50px" width="auto" href="#none"/></Link>
                <ul className="drop_menu">
                    <li><Mypage_button/></li>
                    <li><a href="/community">커뮤니티</a></li>
                    <li><Link to="/compare">비교하기</Link></li>
                    <li><Link to="/subscribe">제품설명</Link></li>
                    <li><Login_button/></li>
                    <li><a href="#!">Q&A</a> </li>
                </ul>
                <a onClick={this.menuclick} className="appbar_toogle" href="#!">
                    <img src={Menu} width="30px" height ="30px" alt=""/>
                </a>
            </div>
        )
    }
}

export default Appbar;