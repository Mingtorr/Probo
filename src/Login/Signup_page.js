import React from 'react';

class Signup_page extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            pw:'',
            pw2:'',
            email:'',
            nickname:'',

            usingid: false, //중복된 아이디 true여야 로그인가능
            usingpw: false, //비밀번호 두개가 일치하는가
        }

        this.checkID = this.checkID.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const box = {
            id: this.state.id,
            pw: this.state.pw,
            pw2: this.state.pw2,
            email: this.state.email,
            nickname: this.state.nickname,
           
        }

        fetch('http://localhost:3001/sign',{
            method:"post",
            header : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(box)
        })
        .then(res => res.json())
        .then(json => {

        })
    }

    checkID(e){
        e.preventDefault();
        console.log(this.state.id);
        const data = {
            id: this.state.id
        }

        fetch('http://localhost:3001/checkid',{
            method:"post",
            headers: { "Content-Type":  "application/json" },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(json => {
            console.log("asdasdasdasd");
            if(json.tf === true){
                alert("사용가능한 ID입니다");
                this.setState({
                    usingid: true
                })
            }
            else{
                alert("다른 ID를 입력해주세요");
            }
        });
    }
    // checkPW = e => {
    //     e.preventDefault();
    // ​
    //     //비밀번호 유효성검사(영문,숫자 혼합 6~20)
    //     const chkPwd = function(str) {
    //       var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    //       return !reg_pwd.test(str) ? false : true;
    //     };
    // ​
    //     if (chkPwd(this.state.re_pw) === false) {
    //       alert("영문,숫자를 혼합하여 6~12자 이내");
    //       this.setState({
    //         sspw: "",
    //         ssre_pw: ""
    //       });
    //     } else {
    //       if (this.state.pw === this.state.re_pw) {
    //         alert("일치합니다.");
    //         this.setState({
    //           pwCheck: this.state.re_pw
    //         });
    //       } else {
    //         alert("불일치합니다.");
    //       }
    //     }
    //   };

    render() {



        return (

            <div className="login_content">

                <h1 className="signup_text" style={{ fontSize: '17pt' }}>회원 가입</h1>
                <div className="inputboxz">
                    <form onSubmit={this.onSubmit}>
                        <div className="id_box">
                            <div className="text_">ID &nbsp;</div>
                            <input type="text" name="id" className="idinput" onChange={this.onChange} />
                            <button onClick={this.checkID}>확인</button>
                        
                        </div>

                    

                        <div className="pw_box">
                            <div className="text_">비밀번호</div>
                            <input type="password" name="pw" className="idinput" onChange={this.onChange} />
                        </div>

                        <div className="pw_box">
                            <div className="text_">비밀번호 확인</div>
                            <input type="password" name="pw2" className="idinput" onChange={this.onChange} />
                        </div>

                        <div className="pw_box">
                            <div className="text_">이메일</div>
                            <input type="text" name="email" className="idinput" onChange={this.onChange} />
                        </div>


                        <div className="pw_box">

                            <input type='submit' value='전송' className="Signup_Button"></input>
                            <div style={{ fontSize: '10pt', marginRight: '0pt', paddingTop: '13px' }}>
                                이메일 확인 후 인증번호를 입력해 주세요</div>

                        </div>

                        <div className="pw_box" style={{ marginTop: '20`px' }}>
                            <div className="text_" >인증번호</div>
                            <input type="text" name="inzung" className="idinput" onChange={this.onChange} />
                        </div>

                        <div className="pw_box" style={{ marginTop: '20`px' }}>
                            <div className="text_" >닉네임</div>
                            <input type="text" name="nickname" className="idinput" onChange={this.onChange} />
                        </div>

                        <input type='submit' value='확인' className="Signup_Button_finish"></input>

                    </form>
                </div>
            </div>
        )
    }
}

export default Signup_page