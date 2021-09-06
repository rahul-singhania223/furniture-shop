import { Star, StarHalf } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';



function InfoProduct(props) {

    let string = "Armen Living Jaguar Dining Chair in Green Fabric and Walnut Wood Finish";

    const title = string.substring(0, 30);

    return (
        <Container>
            <ImgContainer>
                <img src="https://p.kindpng.com/picc/s/354-3542715_office-chair-hd-png-download.png" alt="" />
            </ImgContainer>

            <InfoContainer>
                <Ratings>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><StarHalf /></span>
                </Ratings>

                <Title>{window.innerWidth<500? title : string}...</Title>
                <Price><span>$</span>199</Price>
            </InfoContainer>

            <AddToCart>Buy Again</AddToCart>
            
        </Container>
    );
}

export default InfoProduct;


const Container = styled.div`
    display: flex;
    flex: 1;
    max-width: 800px;
    background: #E5E7EF;
    margin-bottom: 40px;
    padding: 15px;
    border-radius: 11px;
    cursor: pointer;
    width: 100%;
    

    :hover {
        box-shadow: 3px 3px 10px 3px #bbbb;
    }

    @media(max-width: 900px) {
        padding: 9px 15px;
    }

    @media(max-width: 500px) {
        padding: 9px;
        margin-bottom: 15px;
    }
`;

const ImgContainer = styled.div`
    width: 120px;
    border-radius: 9px;
    overflow: hidden;
    
    img {
        max-width: 100%;
        object-fit: contain;
    }

    @media(max-width: 900px) {
        width: 100px;
    }

    @media(max-width: 500px) {
        width: 80px;
    }
`;

const InfoContainer = styled.div`
    flex: 1;
    margin-left: 20px;
    margin-top: 11px;

    @media(max-width: 900px) {
        margin-top: 6px;
    }

    @media(max-width: 500px) {
        margin-top: 0;
    }
`;

const Ratings = styled.div`
    svg {
        font-size: 1rem;
    }

    @media(max-width: 500px) {
        svg{
            font-size: 0.8rem;
            margin-bottom: -3px;
        }
    }
`;

const Title = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;

    @media(max-width: 900px) {
        font-size: 1rem;
    }

    @media(max-width: 500px) {
        font-size: 0.9rem;
    }
`;

const Price = styled.h3`
    span {
        font-size: 1rem;
        font-weight: 900;
    }

    margin-top: 30px;
    font-size: 1.3rem;
    font-weight: 600;

    @media(max-width: 900px) {
        margin-top: 10px;
        font-size: 1.1rem;
    }

    @media(max-width: 500px) {
        font-size: 1rem;
        span {
            font-weight: 600;
            font-size: 0.9rem;
        }
    }

    
`;

const AddToCart = styled.button`
    width: 120px;
    height: 43px;
    border-radius: 30px;
    border: none;
    background: #141313;
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    margin-left: 40px;
    margin-top: auto;
    
    :hover {
        box-shadow: 2px 2px 10px 2px #5b5b5b;
    }

    @media(max-width: 900px) {
        margin-left: 20px;
        width: 100px;
        font-size: 0.76rem;
    }
`;