import React from 'react';
import './Empty.css';
import baguni from './baguni.png'
import Shopdiv from './shopdiv';
const Empty = props => {
  if(props.cart.length ===0 ) {
    return <RenderLoading />
  } else {
    return <RenderProducts products={props.cart}/>
  }
}

const RenderProducts = props => {
  let cart = props.products;
          return (
              <div>
                  {cart.map((item,index) => {
                      return (
                        <ol key={index}>
                      <Shopdiv item={item}/>
                      </ol>
                      );
                  })}
              </div>
          );
      
      
};

const RenderLoading = props => {
  return (
      
      <div className="all">
        <img src={baguni} alt="" width="200" className="kart" />
        <div className="text">장바구니가 비었어요~</div>

        <div className="downtext">
          <div className="text2">보충제를 추가해 서로 비교해 보세요!</div>
        </div>
      </div>
   
  )
}


export default Empty