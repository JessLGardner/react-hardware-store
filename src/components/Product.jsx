import React, {Component} from 'react';
 
 class Product extends Component {

    _deleteProduct = () => {
        this.props.deleteProductFromProductList(this.props.id);
    };

    _addToCart = () => {
        this.props.addProductToCart(this.props.index);
    };

    _removeFromCart = () => {
        this.props.removeProductFromCart(this.props.index);
    };

    _viewOptions = () => {
    const viewMode = this.props.viewMode;

    const adminView =
        <div>
          <button onClick={this._deleteProduct}>Delete</button>
        </div>;

    const shopView =
        <div>
          <button onClick={this._addToCart}>Add To Cart</button>
        </div>;

    const cartView =
        <div>
          <button onClick={this._removeFromCart}>Remove From Cart</button>
        </div>;

    switch (viewMode) {
      case 'ADMIN':
        return adminView
      case 'SHOP':
        return shopView;
      case 'CART':
        return cartView;
      default:
        return null;
    }
  };

   render() {
     const productName = this.props.productName;
     const description = this.props.description;
     const price = this.props.price;
 
    return (
        <div>
            <h3>{productName}</h3>
            <div>{description}</div>
            <div>{price}</div>
            {this._viewOptions()}        
        </div>
     );
 
   }
 }
 
 export default Product;