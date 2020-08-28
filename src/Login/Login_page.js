import React from 'react';
import './Login_page.css';
// import Appbar from '../Appbar/appbar';
import Logo from './pp.png'
import Search_button from './Search_button';
import Signup_button from './Signup_button';

class Longin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id : '',
            pw : '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){

        this.setState({
            [e.target.name]:e.target.value
        })

        console.log(this.state.id + "비밀번호: " + this.state.pw);

    }      

    onSubmit(e){
        e.preventDefault();
        const box = {
            id: this.state.id,
            pw: this.state.pw
        }

    
        fetch('http://localhost:3001/log',{
            method:"post",
            header : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(box)
        })
         .then(res => res.json())
         .then(json => {

            if(json.success === true){   
                alert("로그인되었습니다.");
                window.localStorage.setItem('user',JSON.stringify(json))
   
                this.setState({
                    id: json.id,
                });
            }
            else{
                alert("아이디 또는 비밀번호 확인해주세요");
            }
         });
    }





    render() {
        return (

            <div className="login_content">

                <img src={Logo} width="70" style={{ marginLeft: '5px' }} />

                <h1 className="login_text">Login</h1>
                <div className="inputboxz">

                    <form onSubmit={this.onSubmit}>
                        <div className="id_box">
                            <div className="text_">ID &nbsp;</div>
                            <input type="text" name="id" value={this.state.id} onChange={this.onChange} className="idinput" />
                        </div>

                        <div className="pw_box">
                            <div className="text_">비밀번호</div>
                            <input type="password" name="pw" value={this.state.pw} onChange={this.onChange} className="idinput" />
                        </div>

                        <input type='submit' value='확인' className="login_Button_finish"></input>

                    </form>

                    <div className="bottom_text">


                        <Signup_button />
                        <Search_button />
                    </div>
                </div>

            </div>
        )
    }
}

export default Longin