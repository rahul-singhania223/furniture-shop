import React from 'react';
import styled from "styled-components";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import axios from 'axios';


function Product(props) {

    const addToCart = () => {

        const credentials = {
            userId: localStorage.getItem('userId'),
            qty: 1,
            id: props.id,
            data: {                
                images: props.images,
                title: props.title,
                ratings: props.ratings,
                price: props.price
            }
        }


        axios.post('/api/cart/add', credentials)
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
        
    }

    
    return (
        <Container className="product">
            <ImageContainer id="product_img">
                <img src={props.images? props.images[0] : null} alt="" />
            </ImageContainer>

            <InfoContainer>
                <Ratings>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarIcon /></span>
                    <span><StarHalfIcon /></span>
                </Ratings>

                <Title>
                    <h3>
                        {props.title? props.title.substring(0, 18) : null}...                        
                    </h3>
                </Title>
                <ActionContainer>
                    <h3><span>$</span>{props.price? props.price : null}</h3>
                    <button onClick={addToCart}>Cart</button>
                </ActionContainer>
            </InfoContainer>            
        </Container>
    );
}

export default Product;
 

const Container = styled.div`
    background: #fff;    
    height: 380px;
    min-width: 250px;
    max-width: 85%;
    margin: 0 15px;
    margin-bottom: 60px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    cursor: pointer;

    
    
    :hover {
        #product_img {
            transform: scale(1.08);
        }

        box-shadow: 3px 3px 10px 3px #bbbb;
    }

    @media(max-width: 580px) {
        max-width: 85%;
        height: 380px;
        margin-bottom: 101px;
       
    }
    
`;

const ImageContainer = styled.div`
    height: 230px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media(max-width: 580px) {
        height: 220px;
    }
`;

const InfoContainer = styled.div`
    margin-top: auto;
`;

const Ratings = styled.div`
    svg {
        font-size: 1rem;
    }
        
`;

const Title = styled.div`
    padding-bottom: 11px;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        span {
            font-size: 0.9rem;
            font-weight: 900;
        }

        font-weight: 600;
        font-size: 1.3rem;
        margin-top: auto;       
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
`;

