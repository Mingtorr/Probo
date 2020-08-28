import React from 'react';
import './Leftitem.css';
import Star from './star.png';
import whiteheart from './whiteheart.png';
 import redheart from './redheart.png';

class Leftitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      like: false,
    };
    this.handleClick= this.handleClick.bind(this);
  };

  handleClick(e) {
    e.stopPropagation();
    this.setState({
      like: !this.state.like
    });
  }
  

  addToCart(key, title, price, subtitle, like) {
      this.setState({
        selectedProduct: {
          key: key,
          title: title,
          subtitle: subtitle,
          price: price,
          like: like
        }
      }, function() {
        this.props.addToCart(this.state.selectedProduct);
      })
  };

  render() {
    let key = this.props.key;
    let title = this.props.title;
    let subtitle = this.props.subtitle;
    let price = this.props.price;
    let image;
    if(this.state.like)
      image= redheart;
    else
      image = whiteheart;
    return (
      <div onClick={this.addToCart.bind(this, key, title, subtitle, price, this.state.like )} >
        <div className="item">
            <div className="itemimage">
            </div>
            <div className="itemname">
                <p>{title}</p>
                <div  className="hearticon">
                    <img src={image} width="50" alt="" style={{cursor:"pointer"}} onClick={this.handleClick}/>
                </div>
            </div>
            <div className="ingredients">{subtitle}
                <div className="sss">
                    <div className="pointstar"><img id="heartimage" src={Star} alt="" width="20" /></div>
                    <div className="star_num"> 4.25/5</div>
                    <div className="price">{price}</div>
                </div>
            </div>
            <hr />
  
        </div>
    </div>
    
    );
  };
}

export default Leftitem;
