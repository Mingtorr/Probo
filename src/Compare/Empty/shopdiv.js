import React from 'react';
import './shop.css';
import Star from './star.png';
import Protin from './protin.jpg';
import whiteheart from '../LeftItem/whiteheart.png';
import redhaert from '../LeftItem/redheart.png'

function Shopdiv(props) {
      let image;
      if(props.item.like)
        image= redhaert;
      else 
        image = whiteheart;
        return(
            <div className="shopdiv_main">
                <div className="shopdiv_img">
                    <img src={Protin}  alt="" width="100%" height="100%"/>
                </div>
                <div className="shopdiv_text1">
                    <div className="shopdiv_love">
                        <img src={image}  alt="" width="100%" height="100%"/>
                    </div>
                    <p id="shopdiv_title">{props.item.title}</p>
                    <p id="shopdiv_title2">근육 합성에 꼭 필요한 필수 아미노산까지! 하루 평균 부족한 단백질을 채우세요! ㅋㅋ루삥뽕</p>
                    </div>
                    <div className="shopdiv_star">
                        <img src={Star}  alt="" width="10%" height="10%"/>
                        <p>4.25/5 &nbsp;  &nbsp;  상품평 731 | 일동후디스 | 공유 | 해당 카테고리로</p>
                    </div>
                
                <div className="shopdiv_ig">
                    <p id="ig_1">쉐이크 | 진한우유맛 | 섭취방법 1일 37g씩 | 과립형 | 인증정보.건강기능식품</p>
                    <p id="ig_2">[영양정보] | 표시기준분량:200ml | 열량:200kcal | 탄수화물:23g | 당류:8g | 단백질:15g | 지방:6g | 포화지방:1.6g | 콜레스테롤:5mg |
                                나트륨:210mg | 식이섬유:3g | 칼슘:350mg | 인:298mg | 철분:2.4mg | 아연:8.5mg | 비타민A:333ugRE | 비타민B1:0.24mg | 
                                비타민B2:0.28mg | 비타민B6:0.3mg | 비타민B12:0.24ug | 비타민C:60mg | 비타민D:13ug | 비타민E:7mga-TE | 엽산:80ug  |
                                나이아신:3mgNE | 판토텐산:1mg | 비오틴:6ug | 마그네슘:80mg | 칼륨:370mg
                    </p>
                    
                </div>
                <button>삭제하기</button>
                <hr/>
            </div>
        )
    }

export default Shopdiv;