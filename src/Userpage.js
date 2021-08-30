import React from 'react';
import styled from 'styled-components';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import InfoProduct from './InfoProduct';
import "./Userpage.css";


function Userpage(props) {


    const handleActive = (e) => {
        document.getElementsByClassName("active__info")[0].classList.remove("active__info");
        e.target.classList.add("active__info");
    }

   
    

    return (
        <Container className="user__page" >
            <BackBtn onClick={() => {window.history.back()}} ><span><ArrowRightAltIcon /></span></BackBtn>

            <MainContainer  >
                <UserContainer>
                    <Avatar />
                    <h4>Rahul Singhania</h4>
                    <p>rahulsinghania406@gmail.com</p>
                </UserContainer>

                <InfoContainer>
                    <InfoHeader>
                        <span onClick={handleActive} className="active__info">Orders</span>
                        <span onClick={handleActive}>Returns</span>
                        <span onClick={handleActive}>Wishlist</span>
                    </InfoHeader>

                    <InfoContent>
                        <InfoProduct />
                        <InfoProduct />
                        <InfoProduct />
                        <InfoProduct />
                    </InfoContent>
                </InfoContainer>
            </MainContainer>

        </Container>
    );
}

export default Userpage;


const Container = styled.div`
    max-width: 1400px;
    padding: 40px 4%;
    margin: 40px auto;
    margin-bottom: 0;

    @media(max-width: 500px) {
        width: 95%;
        padding: 20px 0;
    }
    
    
`;

const BackBtn = styled.div`
    svg {
        transform: rotate(-180deg) scaleX(2);               
    }

    background: #fff;
    width: fit-content;
    width: 120px;
    height: 40px;
    display: grid;
    place-items: center;
    padding-top: 5px;
    border-radius: 30px;
    cursor: pointer;

`;

const MainContainer = styled.div`
    margin-top: 20px;
    padding: 30px;
    background: #ffff;
    border-radius: 20px;
    padding-bottom: 0 !important;

    @media(max-width: 500px) {
        padding: 15px 4px;
    }
    
    
    
`;

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 20px 0;
    border-bottom: solid 1px lightgray;
    


    h4 {
        font-size: 1.3rem;
        font-family: 'Maven Pro', sans-serif !important;
        font-weight: 500;       
    }

    p {
        font-size: 0.9rem;
        letter-spacing: 1px;
        padding-top: 4px;
    }
`;

const Avatar = styled.div`
    width: 70px;
    height: 70px;
    background: #5b5b5b;
    border-radius: 50%;
    margin-bottom: 11px;
`;

const InfoContainer = styled.div`
    
`;

const InfoHeader = styled.div`    
    display: flex;
    justify-content: center;

    span {
        margin: 0 30px;
        padding: 0 20px;
        font-size: 1.1rem;
        font-weight: 700;
        color: #5e5a5b;
        padding-top: 4px;
        cursor: pointer;
        
    }

    .active__info {
        border-top: solid 2px;
        color: #141313;
    }

    @media(max-width: 500px) {
        span {
            padding: 0 4px;
            font-size: 1rem;
            padding-top: 9px;
        }
    }
`;

const InfoContent = styled.div`
    padding: 40px 80px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    padding-bottom: 0 !important;

    @media(max-width: 900px) {
        padding: 30px 0;
    }

    @media(max-width: 500px) {
        padding: 9px 0;
    }
`;