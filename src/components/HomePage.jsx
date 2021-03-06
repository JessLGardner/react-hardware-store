import React, {Component} from 'react';
import ShopView from './ShopView';
import AdminView from './AdminView';
import CartView from './CartView';


class HomePage extends Component{

    constructor() {
        super();
 
        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            productList: [
                {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
                },
                {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
                }
            ],
            adminView: true,
            cartList: []
        };
    }

     _toggleView = () => {
        const adminView = !this.state.adminView;
        this.setState({adminView});
    };
 
    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    };

    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({itemCurrentlyOnSale});
   	};

    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };

    _deleteProductFromProductList = (event) =>{
        const productList = [...this.state.productList]; 
        productList.splice(event, 1);     
        this.setState({productList});
    }

    _addProductToCart = (index) => {
        const product = {...this.state.productList[index]};
        const cartList = [...this.state.cartList];
        cartList.push(product);
        this.setState({cartList});
    };

    _removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList];
        cartList.splice(index, 1);
        this.setState({cartList});
    };

    render(){
        return(
            <div>
                <h1>My Hardware Store</h1>
                    <div>
                        <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
                        <span><button onClick={this._toggleEditSaleItem}>
                            { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }</button></span>
                            { this.state.editSaleItem ? <div>
                                <input onChange={this._handleItemCurrentlyOnSaleChange} 
                                value={this.state.itemCurrentlyOnSale} type="text"/></div> 
                            : null }      
                    </div>   
                        <br/>
                        <br/>
                          <span><button onClick={this._toggleView}>
                            { this.state.adminView ? 'See Shop View' : 'See Admin View' }</button></span> 
                            { this.state.adminView ? 
                                <AdminView
                                productList={this.state.productList} 
                                addNewProductToProductList={this._addNewProductToProductList}
                                deleteProductFromProductList={this._deleteProductFromProductList}/>
                                : <div>
                                <ShopView
                                productList={this.state.productList}
                                addProductToCart={this._addProductToCart}/>
                                 <CartView
                                productList={this.state.productList}
                                removeProductFromCart={this._removeProductFromCart}/>
                                </div> }     
    
            </div>        
        );
    }
}

export default HomePage;