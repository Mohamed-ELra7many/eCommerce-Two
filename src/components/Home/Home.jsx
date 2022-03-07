import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from "styled-components"
import { DataHome } from '../DataHome'
import Products from '../Products/Products'

/*start sitting styled-components */
const ContainerWraper = styled.div`
    width:100%;
    height: 90vh;
    display: flex;
    margin:20px 0;
    position: relative;
    overflow:hidden;
`
const Arrow = styled.div`
    background-color:#fff7f7;
    width: 50px;
    height: 50px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.dir === "left" && "10px"};
    right: ${props => props.dir === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity:.5;
    transition:.3s;
    z-index:2;


    &&:hover{
        opacity: 1;
    }
    
`
const Wraper = styled.div`
    height: 100%;
    display: flex;
    transform:translateX(${props => props.slide * -100}vw);
    transition: all 1s ease-in-out;
`

const Slide = styled.div`
    display: flex;
    align-items:center;
    height: 90vh;
    width: 100vw;
`
const Imgcontainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
`
const Image = styled.img` 
    height: 100%;
    width: 100%;
    border-radius:10px;
`
/*end sitting styled-components */


const Home = () => {
    //start setting slider
    const [slide, setSlide] = useState(0)
    const handelclick = (dir) => {
        if (dir === "left") {
            setSlide(slide > 0 ? slide - 1 : 3)
        } else {
            setSlide(slide < 3 ? slide + 1 : 0)
        }
    }
    // end setting slider
    return (
        <>
            <ContainerWraper>
                <Arrow dir="left" onClick={() => handelclick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wraper slide={slide}>
                    {DataHome.map((item) => (
                        <Slide key={item.id} >
                            <Imgcontainer>
                                <Image src={item.image} />
                            </Imgcontainer>
                        </Slide>
                    ))}
                </Wraper>
                <Arrow dir="right" onClick={() => handelclick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </ContainerWraper>
            <Products />
        </>
    )
}

export default Home