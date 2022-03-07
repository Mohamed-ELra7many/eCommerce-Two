import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeletProduct } from '../../redux/action/Action'
import { Close } from "@material-ui/icons"
import styled from 'styled-components'

/* start setting styled-components */

const CartDet = styled.div`
    margin: 10px 0;
`
const SinglPro = styled.div` 
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
`
const CartImg = styled.div` 
    height: 100%;
    width: 100px;
    display: flex;
    align-items:center;
    justify-content:center;
`
const SingleImg = styled.img` 
    width: 100%;
    height: 100%;
`
const CartText = styled.div` 
    display: flex;
    align-items:center;
    justify-content:center;
    padding: 5px;

`
const CartHead = styled.h4` 
    margin-right:10px;
    font-weight:9000;
`
const CartPra = styled.p` 
    margin-left: 10px;
    font-weight: 700;
    font-style: italic;
`
const IconDelet = styled.div` 
    background-color:#ffb836 ;
    font-size:20px;
    cursor: pointer;
    transition: .6s linear;
    width:50px;
    height:50px;
    border-radius:50%;
    color: #fff;
    display: flex;
    align-items:center;
    justify-content:center;
    opacity: .7;
    &&:hover{
        transform: rotate(360deg);
        opacity: 1;
    }
`
const EmptyCart = styled.div` 
    background-color: #ddd;
    padding: 20px;
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 30px;
`
/* end setting styled-components */

const Cart = () => {
    const state = useSelector((state) => state.HandlePro)     /*This is to listen to the Redux */
    const dispatch = useDispatch()

    const DeletItem = (item) => {                 //This is to implement the function of deleting the element
        dispatch(DeletProduct(item))
    }
    const Empty = () => {
        return (
            <EmptyCart>Your Cart IS Empty &#128546; {/*This is an emoji code */}</EmptyCart>
        )
    }
    const YourCart = (pro) => {
        return (
            <SinglPro key={pro.id}>
                <CartImg>
                    <SingleImg src={pro.image} alt={pro.title} />
                </CartImg>
                <CartText>
                    <CartHead>Name :{pro.title.substring(0, 16)}</CartHead>
                    <CartPra>Price :$ {pro.price}</CartPra>
                </CartText>
                <IconDelet onClick={() => DeletItem(pro)}>
                    <Close />
                </IconDelet>
            </SinglPro>

        )
    }
    return (
        <CartDet>
            {state.length === 0 && Empty()}      {/* This appears if the shopping cart is empty*/}
            {state.length !== 0 && state.map(YourCart)}      {/*This appears if the shopping cart contains purchases */}
        </CartDet>
    )
}

export default Cart