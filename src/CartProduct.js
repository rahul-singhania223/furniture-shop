import { Star, StarHalf } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



function CartProduct(props) {
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
                <Title>Armen Living Jaguar Dining Chair in Green Fabric and Walnut Wood Finish</Title>
                <QtyControl>
                    <span><AddIcon /></span>
                    <p>2</p>
                    <span><RemoveIcon /></span>
                </QtyControl>    
            </InfoContainer>

            <PriceContainer>
                <h3><span>$</span>199</h3>
            </PriceContainer>            
        </Container>
    );
}

export default CartProduct;


const Container = styled.div`
    color: #141313;
    display: flex;
    margin: 30px 0;
    padding-bottom: 13px;
    border-bottom: solid 1px lightgray;

    @media(max-width: 500px) {
        margin: 10px 0;
        padding-bottom: 1px;
    }

`;

const ImgContainer = styled.div`
    width: 120px;
    height: 140px;
    cursor: pointer;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    margin-right: 30px;

    @media(max-width: 500px) {
        width: 80px;
        margin-right: 18px;
    }
`;

const InfoContainer = styled.div`
    flex: 1;
    margin-top: 18px;

    @media(max-width: 500px) {
        margin-top: 0;
    }
    
`;

const Ratings = styled.div`
    svg {
        font-size: 1rem;
        margin-bottom: -3px;
    }

    @media(max-width: 500px) {
        svg {
            font-size: 0.8rem;
        }
    }
`;

const Title = styled.h3`
    font-weight: 600;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media(max-width: 1024px) {
        font-size: 1rem;
    }

    @media(max-width: 500px) {
        font-size: 0.93rem;
    }
`;

const QtyControl = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

    p {
        margin: 0 20px;
        width: 35px;
        height: 35px;
        display: grid;
        place-items: center;
        border: solid 1px lightgray;
        border-radius: 7px;
    }

    span {
        width: 35px;
        height: 35px;
        background: #E5E7EF;
        display: grid;
        place-items: center;
        border-radius: 50%;
        cursor: pointer;
    }

    svg {
        font-size: 1rem;
    }

    @media(max-width: 500px) {
        margin-top: 10px;

        span, p {
            width: 25px;
            height: 25px;
        }

        
    }
`;

const PriceContainer = styled.div`
    margin-left: 40px;
    font-size: 1.3rem;
    margin-top: 30px;

    span {
        font-size: 1rem;
        font-weight: 900;
    }

    @media(max-width: 500px) {
        span {
            font-size: 0.9rem;
            font-weight: 700;
        }

        font-size: 1.1rem;
    }
`;