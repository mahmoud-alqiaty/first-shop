import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import ProductItems from './ProductItem'
import { setProducts } from '../redux/actions/Actions';



const ProductsList = () => {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products').catch(err=>{
            console.log(err.message);
        });
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    
    return (
        <div>
            <ProductItems />
        </div>
    )
}

export default ProductsList
