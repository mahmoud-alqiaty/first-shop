import axios from 'axios'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router'
import {selectedProduct, removeSelectedProduct} from '../redux/actions/Actions'
import {ProductDetailsContainer, ProductDetailsContent, ImgSide, InfoSide, BorderDiv, LoadingDiv, LoadingIcon}
from './ProductDetailStyle.js'
import {VscLoading} from 'react-icons/vsc'


const ProductDetails = () => {
    const selected = useSelector(state => state.product)
    const {id, title, price, image, category, description } = selected
    const dispatch = useDispatch()
    const {productId} = useParams()
    console.log(productId);

    const fitchProductDetails = ()=>{
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res=> {
            console.log(res.data);
            dispatch(selectedProduct(res.data))
        })
        .catch(err=> console.log('no'));
    }

    useEffect(() => {
        fitchProductDetails()
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    console.log(selected);

   
    return (
        
        <ProductDetailsContainer>
            {
                Object.keys(selected).length < 1 ?
                <LoadingDiv>
                    <LoadingIcon />
                    <h1>Loading ...</h1> 
                </LoadingDiv>
                :
                <ProductDetailsContent>
                <ImgSide>
                    <img src={image} alt={title} />
                </ImgSide>

                <BorderDiv>
                    <span>AND</span>
                </BorderDiv>

                <InfoSide>
                    <h1>{title}</h1>
                    <div className="price-box">
                        <div className="arrow">
                            
                        </div>
                        <div className="price">
                        <div className="whitePoint"></div>
                            $ {price}
                        </div>
                    </div>
                
                    <div className="category">
                        {category}
                    </div>

                    <p className="desc">
                        {description}
                    </p>

                    <button className="caret-btn">
                        Add To Caret
                    </button>
                </InfoSide>
            </ProductDetailsContent>
            }
        </ProductDetailsContainer>
    )
}

export default ProductDetails
