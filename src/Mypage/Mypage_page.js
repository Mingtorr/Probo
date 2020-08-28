import React from 'react';
import './Mypage_page.css';
import Mypage_zzim from './Mypage_zzim';
import Redheart from './redheart.png';
import Mypage_board from './Mypage_board';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';



class Mypage_page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: 'none',
            nickbutton: '변경',

            pw: 'none',
            pwbutton: '변경',
            
        }

        this.nickChange = this.nickChange.bind(this);
        this.pwChange = this.pwChange.bind(this);
    }


    pwChange(e){
        if (this.state.pw === 'none') {
            this.setState({
                pwbutton: '취소',
                pw: 'inline',
            
            })
        }

        else {
            this.setState({
                pwbutton: '변경',
                pw: 'none',
             
            })
        }
    }

    nickChange(e) {
        if (this.state.nick === 'none') {
            this.setState({
                nickbutton: '취소',
                nick: 'inline'
            })
        }

        else {
            this.setState({
                nickbutton: '변경',
                nick: 'none'
            })
        }
    }


    render() {
        return (

            <div className="all_mypage">
                <h2>마이 페이지</h2>

                <div className="mypage_box">
                    <div className="mypage_id_input">
                        <div className="mypage_id_pw_nic">나의 아이디</div> <div className="mypage_colon">:</div> <div>gnlwp05</div>
                    </div>

                    <div className="mypage_pw_input">
                        <div className="mypage_id_pw_nic">비밀 번호</div>  <div className="mypage_colon">:</div>
                        <input type="password" name="비밀번호" className="mypage_idinput" style={{ display: this.state.pw }} />
                        <input type="submit" className="mypage_submit" style={{display: this.state.pw}}/>
                        <button onMouseDown={this.pwChange}>{this.state.pwbutton}</button>
                    </div>

                    <div className="mypage_nickname_input">
                        <div className="mypage_id_pw_nic"> 나의 닉네임</div> <div className="mypage_colon">:</div> <div>휘제짱짱걸</div>

                        <input type="text" name="닉네임" className="mypage_idinput" style={{ display: this.state.nick }} />
                        <input type="submit" className="mypage_submit" style={{display: this.state.nick}}/>
                        <button onMouseDown={this.nickChange}>{this.state.nickbutton}</button>
                    </div>

                    <div className="mypage_board">
                        <div className="mypage_board_zzim">
                            <h3 >
                                내가 
                                <img src={Redheart} width="40" className="mypage_heartimage"/>
            
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;한 아이템
                            </h3>
        
                            <div className="myp_bd_zz">
                           
                                    <Mypage_zzim/>
                             
                            </div>
                      
                        </div>

                        <div className="mypage_board_item">
                            <h3 >
                                내가 쓴 게시물
                            </h3>

                            <div className="myp_bd_it">
                            
                                    <Mypage_board/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default Mypage_page