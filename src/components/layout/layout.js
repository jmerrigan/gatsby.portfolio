import React from "react"
import styled from 'styled-components'
import "./layout.scss"

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    margin: 0;
    background: #2C2F33;
`

export default ({children}) => 
    <Wrapper className="test-class">
        {children}
    </Wrapper>