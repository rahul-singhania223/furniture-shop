import { ArrowUpward } from '@material-ui/icons';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import React from 'react';
import styled from 'styled-components';
import CartProduct from './CartProduct';



function Cartpage(props) {
    return (
        <Container>
            <BackBtn onClick={() => window.history.back()}><span><ArrowRightAlt /></span></BackBtn>
            
            <MainContainer>
                <CartContainer>
                    <HeaderContainer><h1>Shopping cart</h1></HeaderContainer>

                    <CartProductContainer>
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />

                    </CartProductContainer>

                    
                </CartContainer>

                <CheckoutArea>
                    <CheckoutHeader>
                        <h2>Checkout</h2>
                        <span><ArrowUpward /></span>
                        </CheckoutHeader>
                    

                    <div>
                        <h3>Items:</h3>
                        <span>3</span>
                    </div>

                    <div>
                        <h3>Subtotal:</h3>
                        <span>$597</span>
                    </div>

                    <div>
                        <h3>Shipping:</h3>
                        <span>$7</span>
                    </div>

                    <div>
                        <h3>Discount:</h3>
                        <span>-$19</span>
                    </div>

                    <TotalContainer>
                        <Total>Total:</Total>
                        <TotalAmount>$571</TotalAmount>
                    </TotalContainer>

                    <CheckOutBtn>Checkout</CheckOutBtn>    
                    
                </CheckoutArea>
            </MainContainer>
        </Container>
    );
}

export default Cartpage;


const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 60px 4%;

    @media(max-width: 1024px) {
        padding: 60px 2%;
    }
`;

const BackBtn = styled.div`
    svg {
        transform: rotate(-180deg) scaleX(1.8);
    }

    width: 120px;
    height: 40px;
    background: #fff;
    display: grid;
    place-items: center;
    border-radius: 30px;
    cursor: pointer;
`;

const MainContainer = styled.div`
    margin-top: 50px;    
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

`;

const HeaderContainer = styled.div`
    h1 {
        font-family: 'Maven Pro', sans-serif !important;
        font-weight: 500;
        padding-bottom: 20px;
    }

    border-bottom: solid 1px lightgray;

    @media(max-width: 500px) {
        font-size: 0.7rem;
    }
`;

const CartContainer = styled.div`
    background: #fff;
    border-radius: 11px;
    flex: 1;
    padding: 15px;
    
    @media(max-width: 500px) {
        width: 100%;
    }
`;

const CartProductContainer = styled.div`
    @media(max-width: 768px) {
        margin-bottom: 150px;
    }
`;

const CheckoutArea = styled.div`
    background: #fff;
    border-radius: 11px;
    max-width: 450px;
    min-width: 350px;
    margin-left: 20px;
    padding: 15px;
    height: fit-content;

    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
        margin: 24px 0;
    }

    h3, span {
        font-weight: 600;
    }

    @media(max-width: 1024px) {
        min-width: 250px;
        
    }

    @media(max-width: 768px) {
        flex: 1;
        max-width: none;
        margin-left: 0;
        margin-top: 30px;
        position: fixed;
        bottom: 0;
        width: 95%;
        box-shadow: 3px 3px 14px 3px #5b5b5b;


        div {
            display: none;
            margin: 11px 0;
        }
    }
`;

const CheckoutHeader = styled.div`
    display: flex !important;
    border-bottom: solid 1px lightgray;
    padding-bottom: 10px !important;

    span {
        cursor: pointer;
        display: none;
    }
    
    @media(max-width: 768px) {
        font-size: 0.97rem;

        span {
            display: block;
        }
    }

    @media(max-width: 500px) {
        font-size: 0.8rem;

        svg {
            font-size: 1.2rem;
        }
    }
`;

const TotalContainer = styled.div`
    display: flex !important;
`;

const Total = styled.h3`
    font-size: 1.3rem;
    font-weight: 700 !important;
    
    @media(max-width: 500px) {
        font-size: 1.1rem;
    }
    
`;

const TotalAmount = styled.span`
    font-size: 1.3rem;
    font-weight: 700 !important;

    @media(max-width: 500px) {
        font-size: 1.1rem;
    }
    
`;

const CheckOutBtn = styled.button`
    width: 100%;
    height: 43px;
    border: none;
    font-weight: 700;
    color: #fff;
    background: #141313;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 10px 2px #5b5b5b;

    
`;