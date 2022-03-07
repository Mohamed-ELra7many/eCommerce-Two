import React from 'react'
import { NightsStayRounded } from "@material-ui/icons"
import styled from 'styled-components'
/*start setting styled=components */
const Toogle = styled.div` 
    position: fixed;
    left: 3px;
    background-color: #1f243c;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    z-index:2;
`
/*end setting styled=components */

const Darkmode = () => {
    const body = document.getElementById("body")
    const toogleDark = () => {       // This is to add the Dark Mode feature to the body element
        body.classList.toggle("Dark")
    }

    return (
        <Toogle onClick={toogleDark} >
            <NightsStayRounded />
        </Toogle>
    )
}

export default Darkmode