/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StarBorder } from "@material-ui/icons"
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import { AddProduct } from '../../redux/action/Action'

const Details = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [rate, setRate] = useState([])

    const { id } = useParams()

    const dispatch = useDispatch()

    const AddItem = (product) => {     //This is to add an item to your cart
        dispatch(AddProduct(product))
    }
    const Getdata = async () => {
        const ress = await axios.get(`https://fakestoreapi.com/products/${id}`)   //This is to get the data from the api
        setProduct(ress.data)
        setRate(ress.data.rating)
        setLoading(false)
    }
    useEffect(() => {
        Getdata()

    }, [])

    /*start setting styled-components */
    const Item = styled.div` 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    `
    const DetailImg = styled.div` 
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
    width: 50%;
    `
    const Image = styled.img` 
    width: 50%;
    height: 100%;
    `
    const TextDetails = styled.div` 
    padding: 15px;
    margin: 20px 0;
    `
    const Title = styled.h2` 
    font-size: 25px;
    text-align:center;
    color: #ddd;
    font-weight:bold;
    `
    const Des = styled.p` 
    text-transform: capitalize;
    font-size: 20px;
    line-height: 1.5;
    margin: 10px 5px;
    padding: 10px;
    text-align: center;
    font-style:italic;
    font-weight: 300;
    `
    const Price = styled.div` 
    font-size:20px;
    text-align:center;
    `
    const Rating = styled.div` 
    display: flex;
    align-items:center;
    justify-content:space-around;
    margin-top:10px;
    padding: 20px;

    `
    const Star = styled.div` 
    display: flex;
    align-items:center;
    font-size:20px;
    `
    const Span = styled.span` 
    cursor: pointer;
    transition: .7s;
    color: #ffb836;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: red;
    &&:hover{
        transform: rotate(360deg);
    }
    `
    const Count = styled.div` 
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    `
    const Button = styled.button` 
    padding: 10px;
    width: 178px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    text-align: center;
    background-color: #ffb836;
    transition: .5s;
    &&:hover{
        width: 190px;
        text-decoration: underline;
        color: white;
    }
    `
    /*end setting styled=components */

    const Loading = () => {
        return (
            <div>loading......</div>
        )
    }
    const ShowData = () => {
        return (
            <>
                <Item key={product.id}>
                    <DetailImg>
                        <Image src={product.image} alt={product.title} />
                    </DetailImg>
                    <TextDetails>
                        <Title>Title : {product.title}</Title>
                        <Des>Description : {product.description}</Des>
                        <Price>Price :$ {product.price}</Price>
                        <Rating>
                            <Star>
                                <Span><StarBorder /></Span> : {rate.rate}

                            </Star>
                            <Count>We have ({rate.count}) . of this product</Count>
                        </Rating>
                    </TextDetails>
                    <Button onClick={() => AddItem(product)}>Buy Now</Button>
                </Item>
            </>
        )
    }
    return (
        <>
            {loading ? <Loading /> : <ShowData />}
        </>
    )
}

export default Details