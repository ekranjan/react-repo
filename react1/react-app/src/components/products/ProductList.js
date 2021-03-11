import React from 'react';
import './Product.css';
import Overlay from './../../utilities/Overlay';

class ProductList extends React.Component {
    state ={
      loading:true,
      product:null,
      
    }
  async componentDidMount(){
    const url = "./data.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({product: data, loading:false});
    }
  render(){
    const openModal = () => {
        //alert();
        const overlayAPI = new Overlay();
        overlayAPI.showModal(<h1>Hello </h1>);
      }
    return (
      <section className="productContainer">
        {
        this.state.loading || !this.state.product ? (
        <div>loading...</div> 
        ): (
          <div className="productList">
            {
            this.state.product.map((item, i )=> <div key={i}>
            <a href={item.productImageUrl}>
            <img src={item.productImageUrl} alt="" /></a>
            <h3>{item.productName}</h3>
            <p>{item.productPrize}</p>
            <p>{item.productText}</p>
            <button onClick={() => window.open(item.productUrl)}>View</button><br />
            <button onClick={openModal}>Edit Product</button>
            </div>
            )}
            </div>   
        )}
      </section>
    );
  }
}

export default ProductList;