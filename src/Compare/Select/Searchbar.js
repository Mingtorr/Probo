import React from 'react';
import './Searchbar.css';
import eheqhrl from './eheqhrl.png'

class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'null'
        }

        this.leftt = this.leftt.bind(this);
    }

    leftt() {
        document.querySelector("input").style.textAlign = "left"
       

    }

    




    render() {
        return (
            <div>
                <div className="eheqhrl">
                <img src={eheqhrl} alt="" width="17" className="eheqhrl" />
                </div>
                
                <input placeholder="찾으시는 보충제를 검색하세요"
                    onMouseDown={this.leftt}
                    className="input" >
                </input>
               
                    
               
            </div>
        )
    }
}

export default Searchbar
