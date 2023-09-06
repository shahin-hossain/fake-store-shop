import React, { useEffect, useState } from 'react';
import './Allproducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';
const Allproducts = (props) => {
    const { setCartCount } = props; //App.js থেকে function কে props করে পাঠানো হয়েছে। state change করার জন্য।
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>All Products</h2>
            <div className='row container m-auto'> {/* এখানে  এটা row এর মধ্যে রেখে দেয়া হয়েছে।*/}
                {products.map(product => <SingleProduct
                    product={product}
                    key={product.id}
                    setCartCount={setCartCount}
                ></SingleProduct>)}
            </div>
        </div>
    );
};

export default Allproducts;