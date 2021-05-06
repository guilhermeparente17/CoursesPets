import styled from 'styled-components'

export const Body = styled.div`
    height:100%;
    width: 100%;
    display: flex;
    justify-content:flex-start;
    position: absolute;
    z-index: 1;
    background:  #1d1d29;
`
export const BodyContainer = styled.div`
    margin-top: 180px;
    padding: 0 100px;
    display: flex;
    flex-flow: wrap column;
    position:absolute;
    max-width: 700px;
`
export const BodyP = styled.p`
    color: #fff;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
`
export const BodyTitle = styled.h2`
    color: #fff;
    font-family: 'Cambria', sans-serif;
    font-size: 2.5rem;
`
export const BodySection = styled.section`
    margin-top: 10px;
    flex-flow: wrap row;
`
export const BodyHR = styled.hr`
    width: 480px;
    margin-right: 20px;
`