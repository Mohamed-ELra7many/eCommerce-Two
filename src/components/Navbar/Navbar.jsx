import React from "react";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

/*start setting styled-components */

const Nav = styled.nav` 
height: 60px;
padding: 15px;
margin-top:20px;
background-Color: #ffb836;
border-radius: 20px;
`;
const NavBar = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
`
const Logo = styled.div`
text-align:center;
font-size:25px;
    &&:hover{
        border-bottom: 2px solid blue;

}
`
const Product = styled.div`
font-size:20px;
    &&:hover{
        border-bottom: 2px solid blue;

    }
`

const Carts = styled.div`
transition: .5s;
margin-right: 10px;
cursor: pointer;
position: relative;
display: flex;
align-items:center;
justify-content:center;
&&:hover{
    transform: scale(1.3);
    border-bottom: 2px solid blue;

}
`
const CartSpan = styled.span`
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: red;
    border-radius: 50%;
    width: 20px;
    text-align: center;
`
/*end setting styled-components */
const Navbar = () => {
    const state = useSelector((state) => state.HandlePro)    /*This is to listen to the Redux */
    return (
        <Nav>
            <NavBar>
                <Logo>
                    <NavLink to="/">SHOOP &#128515; {/*This is an emoji code */}</NavLink>
                </Logo>
                <Product>
                    <NavLink to="/products">Products</NavLink>
                </Product>
                <Carts>
                    <NavLink to="/cart">
                        <ShoppingCartOutlined />
                    </NavLink>
                    <CartSpan>{state.length}</CartSpan>
                </Carts>
            </NavBar>
        </Nav>
    )
}

export default Navbar