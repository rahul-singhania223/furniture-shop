import { ShoppingCart } from '@material-ui/icons';
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf'
import axios from 'axios';
import React from 'react';
import styled from "styled-components";




function Product({ id, images, title, ratings, price }) {

    
    const addToCart = () => {

        const credentials = {
            userId: localStorage.getItem('userId'),
            qty: 1,
            id: id,
            data: {                
                images: images,
                title: title,
                ratings: ratings,
                price: price
            }
        }


        axios.post('/api/cart/add', credentials)
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
        
    }



    
    
    return (
        <Container>

            <ImgContainer>
                <img src={images? images[0] : null} alt="" />            
            </ImgContainer>

            <InfoContainer>
                <Ratings>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><StarHalf /></span>
                </Ratings>

                <h3>{title? title.substring(0, 18) : null}...</h3>
            </InfoContainer>

            <ActionContainer>
                <h3><span>$</span>199</h3>
                <button onClick={addToCart}>{window.innerWidth<510? <ShoppingCart /> : "Cart"}</button>
            </ActionContainer>

        </Container>
    );
}

export default Product;

const Container = styled.div`
    margin: 20px;
    padding: 15px;
    background: #fff;
    border-radius: 11px;
    display: flex;
    flex-direction: column;    
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    height: 412px;
    cursor: pointer;

    :hover {
        box-shadow: 3px 3px 10px 3px #bbbb;
    }

    @media(max-width: 768px) {
        min-width: 210px;
        margin: 10px;
        height: 360px;
    }

    @media(max-width: 500px) {
        min-width: 230px;
        margin: 20px 8px;
        height: 360px;
        padding: 15px;
        padding-bottom: 15px;
        border-radius: 7px;
    }


   
`;

const ImgContainer = styled.div`
   display: flex;
   justify-content: center;
   height: 260px;
   
   img {
       max-width: 100%;
       max-height: 100%;
       object-fit: contain;
   }

   @media(max-width: 768px) {
       height: 220px;
   }

   @media(max-width: 500px) {
       height: 230px;
   }
`;

const InfoContainer = styled.div`
    h3 {
        padding-bottom: 8px;
    }
    margin-top: auto;

    @media(max-width: 500px) {
        font-size: 0.9rem;
    }
`;

const Ratings = styled.div`
    svg {
        font-size: 1rem;
        margin-bottom: -4px;
    }
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        margin-top: auto;
        
    }

    span {
        font-size: 0.9rem;
    }

    button {
        width: 120px;
        height: 43px;
        border-radius: 30px;
        border: none;
        background: #141313;
        color: #e5e7ef;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 2px 2px 10px 2px #5b5b5b;
    }

    @media(max-width: 500px) {
        
        button {
            width: 60px;
            height: 38px;
            box-shadow: none;

            svg {
                font-size: 1.1rem;
            }
        }
    }
`;