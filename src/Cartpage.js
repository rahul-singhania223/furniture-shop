import { ArrowUpward } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import CartProduct from './CartProduct';
import Header from './Header';
import { useStateValue } from './Stateprovider';



function Cartpage(props) {

   const [ { cart } ] = useStateValue();

   const [items, setItems] = useState(0);
   const [subtotal, setSubtotal] = useState(0);
   const [shipping, setShipping] = useState(40);
   const [discount, setDiscount] = useState(60);
   const [total, setTotal] = useState(0);


   
   
   const setCheckout = (cart) => {

        let totalItems = 0;
        let newSubtotal = 0;


        cart.map(function(item) {
            totalItems = totalItems + item.qty;
            newSubtotal = newSubtotal + (item.data.price * item.qty);

            return (
                null
            )
        })


        setItems(totalItems);
        setSubtotal(Math.round(newSubtotal))
        setTotal(Math.round(newSubtotal + shipping - discount))
        setShipping(shipping);
        setDiscount(discount)
   }
   
   
   

    return (
        <Container>
            
            <header>
                <Header />
            </header>

            <main>
                
                <MainContainer>
                    <CartContainer>
                        <HeaderContainer><h1>Shopping cart</h1></HeaderContainer>

                        <CartProductContainer>
                            
                            {   cart.length>0? 
                                    cart.map((item) => (
                                        <CartProduct setCheckout={setCheckout} key={item.id} product={item} />
                                    ))
                                :

                                <EmptyMsg>
                                    <h3>Your shopping cart is empty. <span>Please add some items.</span></h3>
                                </EmptyMsg>
                            }

                        </CartProductContainer>

                        
                    </CartContainer>

                    <CheckoutArea>
                        <CheckoutHeader>
                            <h2>Checkout</h2>
                            <span><ArrowUpward /></span>
                            </CheckoutHeader>
                        

                        <div>
                            <h3>Items:</h3>
                            <span>{ items }</span>
                        </div>

                        <div>
                            <h3>Subtotal:</h3>
                            <span>${ subtotal }</span>
                        </div>

                        <div>
                            <h3>Shipping:</h3>
                            <span>${ shipping }</span>
                        </div>

                        <div>
                            <h3>Discount:</h3>
                            <span>-${ discount }</span>
                        </div>

                        <TotalContainer>
                            <Total>Total:</Total>
                            <TotalAmount>${ total }</TotalAmount>
                        </TotalContainer>

                        <CheckOutBtn>Checkout</CheckOutBtn>    
                        
                    </CheckoutArea>
                </MainContainer>
            </main>

        </Container>
    );
}

export default Cartpage;


const Container = styled.div`
    margin: 0 auto;
    

    @media(max-width: 1024px) {

        main {
            padding: 40px 2%;
        }
        
    }

    main {
        max-width: 1500px;
        padding: 60px 4%;

    }
`;


const MainContainer = styled.div`
    margin-top: 20px;    
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
    height: fit-content;
    
    @media(max-width: 768px) {
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

const EmptyMsg = styled.div`
    width: 100%;
    height: 300px;
    display: flex;    
    align-items: center;
    justify-content: center;
    color: #5b5b5b;

    h3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.6rem;
    }

    span {
        font-size: 1.3rem;
        padding-top: 6px;
    }

    @media(max-width: 768px) {
        h3 {
            font-size: 1.5rem;
        }

        span {
            font-size: 1.1rem;
        }
    }
    
`;