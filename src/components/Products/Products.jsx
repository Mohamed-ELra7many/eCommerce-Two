/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled from "styled-components"
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [item, setItems] = useState([])
    const [filter, setFilter] = useState(item)
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {      //This is to get the data from the api
        const ress = await axios.get("https://fakestoreapi.com/products")

        setItems(ress.data)
        setFilter(item)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const FilterProdacts = (category) => {    //This is a filter for Similar Items
        const Filter = item.filter((x) => x.category === category)
        setFilter(Filter)
    }

    /*start setting styled-components */

    const AllButton = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    `

    const Button = styled.button` 
        border: none;
    outline: none;
    margin: 10px;
    padding: 10px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 20px;
    cursor: pointer;
    transition: .6s;
    &&:hover{
    transform: scale(1.2);

    }
    `

    const AllProducts = styled.div` 
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    `

    const Product = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 300px;
    height: 290px;
    margin: 10px;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 10px;
    align-items: center;

    `
    const InfoImg = styled.div` 
    width: 100%;
    height: 50%;
    `

    const Image = styled.img` 
    width: 100%;
    height: 100%;
    transition: .6s linear;
    &&:hover{
        transform: scale(1.2);
    }
    `

    const InfoText = styled.div` 
    display: flex;
    align-items:center;
    width: 100%;
    padding: 10px;
    justify-content:space-around;
    `
    const Heading = styled.h4` 
    font-size:16px;
    font-weight:800;
    `
    const Pr = styled.p` 
    font-size:15px;
    font-weight:500;
    `
    const Links = styled.div` 
    background-color: #ffb836;
    margin: auto;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    transition: .6s;
    &&:hover{
    transform: scale(1.2);
    text-decoration: underline;
    }
    `
    /*end setting styled-components */

    const Loading = () => {
        return (
            <h1>loading..........</h1>
        )

    }

    const AllItems = () => {
        return (
            <>
                <AllButton>
                    <Button onClick={() => setFilter(item)}>All</Button>
                    <Button onClick={() => FilterProdacts("men's clothing")}>MEN 'S CLOTHING</Button>
                    <Button onClick={() => FilterProdacts("women's clothing")}>WOMEN 'S CLOTHING</Button>
                    <Button onClick={() => FilterProdacts("jewelery")}>JEWELERY</Button>
                    <Button onClick={() => FilterProdacts("electronics")}>ELECTRONICS</Button>
                </AllButton>
                <AllProducts>
                    {filter.map((item) => {
                        return (
                            <Product key={item.id}>
                                <InfoImg>
                                    <Image src={item.image} alt={item.title} />
                                </InfoImg>
                                <InfoText>
                                    <Heading>{item.title.substring(0, 12)}</Heading>
                                    <Pr>$ {item.price}</Pr>

                                </InfoText>
                                <Links>
                                    <NavLink to={`/products/${item.id}`}>More Details</NavLink>
                                </Links>
                            </Product>
                        )
                    })}
                </AllProducts>
            </>
        )

    }

    return (
        <>
            {loading ? <Loading /> : <AllItems />}
        </>
    )

}

export default Products