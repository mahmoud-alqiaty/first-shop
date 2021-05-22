import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {selectedProduct} from '../redux/actions/Actions'
import axios from 'axios'


const ProductItemsContainer = styled.div `
    width: 100%;
    padding:  100px 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 25px;

    @media screen and (max-width: 992px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
`
const ItemLink = styled(Link) `
    text-decoration: none;
`
const Item = styled.div `
    border: 1px solid #ddd;
    box-shadow: 2px 2px 5px #ddd;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #000;
`
const ItemImg = styled.img `
    width: 100%;
    height: 350px;
    border-bottom: 1px solid #ddd;
    padding: 20px;
`
const ItemInfo = styled.div `
    padding: 20px;
    font-family: 'Roboto', sans-serif;

    .title{
        font-size: 20px;
        font-weight: 500;
    }

    .price{
        font-size: 20px;
        font-weight: bold;
        margin: 15px 0;
    }

    .category{
        font-size: 16px;
        font-weight: 500;
        color: rgba(0,0,0,0.5);
    }
`

const ProductItems = () => {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    // const fitchProductDetails = async (productId)=>{
    //     const res = await axios.get('https://fakestoreapi.com/products/${productId}')
    //     .catch(err=> {
    //         console.log(err.message);
    //     });

    //     console.log(res.data);
    //     dispatch(selectedProduct(res.data))
    // }

    return (
        <ProductItemsContainer>
            {
                products.map(prduct=>{
                    const {id, title, price, category, image} = prduct
                    return(
                        <ItemLink to={`/product/${id}`} key={id}>
                            <Item key={id}>
                                <ItemImg src={image} alt={title} />
                                <ItemInfo>
                                    <div className="title">{title}</div>
                                    <div className="price">$ {price}</div>
                                    <div className="category">{category}</div>
                                </ItemInfo>
                            </Item>
                        </ItemLink>
                    )
                })
            }
        </ProductItemsContainer>
    )
}

export default ProductItems
