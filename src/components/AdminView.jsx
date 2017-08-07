import React, {Component} from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class AdminView extends Component{
    render(){

        const productList = this.props.productList;

        return(
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                    <ProductList 
                    productList={productList}
                    viewMode={'ADMIN'}
                    deleteProductFromProductList={this.props.deleteProductFromProductList}
                    showAdminOptions={true}/>

                <h2>Create a New Product</h2>
                    <ProductForm 
                    addNewProductToProductList={this.props.addNewProductToProductList} />
            </div>
        );
    }
}

// // OR if it is stateless, use a functional component:
// const AdminView = (props) =>{
//     const productList = this.props.productList;
//     return(
//         <div>
//             <h1>Admin View</h1>
//             <h2>Products</h2>
//                 <ProductList procductlist={props.productList} /> 

//             <h2>Create a New Product</h2>
//             {/* create a product form goes here */}
//         </div>

//     );

// }


export default AdminView;


