import React, { Component } from 'react';
import './Compare.css';
import Appbar from './Appbar/appbar';
import App2 from './Compare/Select/App2';
import Empty from './Compare/Empty/Empty';
import LeftItem from './Compare/LeftItem/Leftitem';
import { ProteinData } from './Compare/ProteinData';
class Compare extends Component{
  constructor(props){
    super(props);
    this.state = {
      product: ProteinData,
      cart:[],
      key:0
    };
    this.renderProduct = this.renderProduct.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    cartItem.push(selectedProducts);
    this.setState({
      cart: cartItem,
    });
    if(this.state.cart.length===4)
    this.setState({
      cart: this.state.cart.slice(1,4)
    });
  }
  handleDeleteToCart(num) {
    this.setState({
      cart: this.state.cart.slice(1,num).concat(num+1,4)
    });
  }

  renderProduct() {
     return this.state.product.map((itemdata,index) => {
      return (
        <ol key={index}>
        <LeftItem
        key = {this.state.key}
        title = {itemdata.title}
        subtitle = {itemdata.subtitle}
        price = {itemdata.price}
        addToCart={this.handleAddToCart}
        />
        </ol>
      );
    })
  }
  

  render(){
    return(
      <div>
   
        <div className="toptop">
        <div className="left_top">
          <App2/>
        </div>
        <div className="probo_right">
          <Empty cart={this.state.cart}/>
        </div>
        <div className="left_menu">
          {this.renderProduct()}
        </div>
        <div className="center">
        </div>
        </div>
        
      </div>
      )
  }
}

export default Compare;