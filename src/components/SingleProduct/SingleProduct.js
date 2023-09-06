import React from 'react';
import './SingleProduct.css'
import ReactModal from '../ReactModal/ReactModal';
const SingleProduct = (props) => {
    const { setCartCount } = props;
    const { title, image } = props.product
    const { product } = props;
    return (
        <div className='col-md-4'>
            <div data-aos="zoom-in-down" className="card p-3 border">
                <img src={image} alt="" />
                <h4>{title.slice(0, 10)}</h4>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary' onClick={() => setCartCount()}>Add to Cart</button>
                    <button className='btn btn-danger'>Remove</button>
                    {/* <button className='btn btn-warning'>Details</button> */}
                    <ReactModal product={product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;