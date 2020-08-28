import React from 'react';
import './Search_ID.css';
import Logo from './pp.png';

class Search_ID extends React.Component {




    render() {
      

        return (

            <div className="login_content">
                {/* 
            <img src={Logo} width="70" style={{marginLeft: '5px'}}/> */}

                <h1 className="search_text" style={{ fontSize: '17pt' }}>ID 찾기</h1>
                <div className="inputboxz">
                    <form>
                        <div className="id_box">
                            <div className="text_">이메일 &nbsp;</div>
                            <input type="text" name="이메일" className="idinput" />
                        </div>

                        <div className="pw_box_sign">
                           
                            <div style={{marginTop:'10px', fontSize: '10pt', marginLeft: '60px', paddingTop: '17px' }}>이메일에 아이디 받기</div>
                            <input type='submit' value='전송' className="Signup_Button" ></input>
                        </div>

                        <h1 className="searchP_text">비밀번호 찾기</h1>

                        <div className="pw_box">
                            <div className="text_">ID</div>
                            <input type="text" name="ID" className="idinput" />
                        </div>

                        <div className="id_box">
                            <div className="text_">이메일 &nbsp;</div>
                            <input type="text" name="이메일" className="idinput" />
                        </div>


                        <div className="pw_box">
                           
                           <div style={{ fontSize: '10pt', marginLeft: '50px', paddingTop: '13px' }}>이메일에 비밀번호 받기</div>
                           <input type='submit' value='전송' className="Signup_Button" ></input>
                       </div>



                    </form>
                </div>
            </div>
        )
    }
}

export default Search_ID