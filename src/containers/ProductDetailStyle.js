import styled, { keyframes } from 'styled-components'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'



export const ProductDetailsContainer = styled.div `
width: 100;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const ProductDetailsContent = styled.div `
   width: 70%;
   height: 80%;
   display: flex;
   justify-content: space-between;
   border: 1px solid #999;
   border-radius: 20px;
   font-family: 'Roboto', sans-serif;

   @media screen and (max-width: 992px){
       width: 90%;
   }

   @media screen and (max-width: 550px){
       margin-top: 180px;
       flex-direction: column;
       height: auto;
   }


`
export const ImgSide = styled.div `
   width: 49%;
   padding: 20px 30px;
   img{
       width: 100%;
       height: 100%;
   }

   @media screen and (max-width: 550px){
       width: 100%;
       max-height: 60%;
   }
`
export const InfoSide = styled.div `
   width: 49%;
   padding: 20px 30px;

   h1{
       font-size: 20px;
   }

   .price-box{
       margin: 20px 0;
       display: flex;
       align-items: center;
   }

   .arrow{
       width: 40px;
       height: 40px;
       border-right: 20px solid #b27e7e;
       border-left: 20px solid #fff;
       border-top: 20px solid #fff;
       border-bottom: 20px solid #fff;
   }

   .price{
       background-color: #b27e7e;
       padding: 10px 25px;
       color: #fff;
       font-size: 18px;
       font-weight: 700;
       position: relative;
       border-radius: 0 5px 5px 0;
   }

   .whitePoint{
       position: absolute;
       left: 0;
       top: 50%;
       transform: translateY(-50%);
       width: 10px;
       height: 10px;
       border-radius: 50%;
       background-color: #fff;
   }

   .category{
       background-color: #eee;
       border-radius: 5px;
       padding: 5px;
       font-size: 18px;
       border-top: 1px solid #999;
       text-transform: capitalize;
   }

   .desc{
       margin: 15px 0;
       line-height: 1.3;
       opacity: 0.7;
   }

   .caret-btn{
       font-weight: 700;
       font-size: 16px;
       color: #fff;
       background-color: red;
       padding: 10px 20px;
       border: none;
       border-radius: 5px;
       outline: none;
       cursor: pointer;
       transition: 0ms.3s ease-out;

       &:hover{
           opacity: 0.7;
       }
   }

   @media screen and (max-width: 550px){
       width: 100%;
   }
`
export const BorderDiv = styled.div `
   width: 2px;
   height: 100%;
   background-color: #999;
   position: relative;

   span{
       position: absolute;
       left: 0;
       top: 50%;
       transform: translate(-50%,-50%);
       background-color: #fff;
       padding: 20px;
       font-weight: 700;
   }

   
       @media screen and (max-width: 550px){
           width: 100%;
           height: 2px;

           span{
           left: 50%;
           top: 0%;
           transform: translate(-50%,-50%);
           background-color: #fff;
           padding: 20px;
           font-weight: 700;
       }
   }
`

export const LoadingDiv = styled.div `
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color: #fff;
    }
`
const rotateicon = keyframes `
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`
export const LoadingIcon = styled(AiOutlineLoading3Quarters) `
    font-size: 100px;
    animation: 2s ${rotateicon} linear alternate;

`
