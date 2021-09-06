import { Delete, Star, StarHalf } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import axios from 'axios';
import { useStateValue } from './Stateprovider';



function CartProduct({ product, setCheckout }) {

    const [{cart}, dispatch] = useStateValue();    

    const [qty, setQty] = useState(product.qty);
    const userId = localStorage.getItem('userId');

    let string = product? product.data.title : null;

    const mobileTitle = string.substring(0, 25);
    const desktopTitle = string.substring(0, 60);

    const updateCart = (type) => {
        
        // Update qty value inside stateProvider

        dispatch({
            type: 'UPDATE_QTY',
            id: product.id,
            qty: type==="increase"? qty+1 : qty-1
        })
       
        // Update qty value inside database

        const credentials = {
            userId: userId,
            id: product.id,            
            qty: type==="increase"? qty+1 : qty-1,
            data: product.data
        }
        
        axios.post(`/api/update/qty`, credentials)
            .then(res => console.log(res.data))
            .catch(e => console.log(e))

    }

    // Remove Item from the cart
    const removeItemFromCart = () => {

        // Remove item from the stateprovider cart

        dispatch({
            type: 'REMOVE_ITEM_FROM_CART',
            id: product.id
        })

        // Remove item from the database cart

        const credentials = {
            userId : userId,
            productId : product.id
        }

        axios.post('/api/cart/remove', credentials)
            .then(res => console.log(res.data))
            .catch(e => console.log(e))

    }

    // Setting checkout informations
    
    setCheckout(cart);

    
    
   
    return (
        <Container>
            <ImgContainer>
                <img src={product? product.data.images[0] : null} alt="" />
            </ImgContainer>

            <InfoContainer>
                <Ratings>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><StarHalf /></span>
                </Ratings>
                <Title>{window.innerWidth<510? mobileTitle : desktopTitle}...</Title>
                <QtyControl>
                    <span onClick={() => {setQty(qty+1); updateCart("increase")}} ><AddIcon /></span>
                    <p>{qty}</p>
                    <span onClick={() => { if(qty>1) {setQty(qty-1); updateCart("decrease")}} } ><RemoveIcon /></span>
                </QtyControl>    
            </InfoContainer>

            <PriceContainer>
                <h3><span>$</span>{product.data.price}</h3>

                <span onClick={removeItemFromCart} className='delete_icon'><Delete /></span>
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
    display: flex;
    flex-direction: column;
    

    span {
        font-size: 1rem;
        font-weight: 900;
    }

    .delete_icon {
        color: #5b5b5b;
        margin-top: auto;
        margin-left: auto;
        cursor: pointer;
    }

    @media(max-width: 500px) {
        span {
            font-size: 0.9rem;
            font-weight: 700;
        }

        font-size: 1.1rem;
    }
`;