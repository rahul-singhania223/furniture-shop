import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import {  Person, SearchRounded, ShoppingCart } from '@material-ui/icons';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStateValue } from './Stateprovider';




function Header(props) {

    // const [openNav, setOpenNav] = useState(false);

    const [path, setPath] = useState("");
    const [openModal, setOpenModal]  = useState(false);
    const userId = localStorage.getItem('userId');
    const [, dispatch] = useStateValue();


    const handleActiveNav = (e) => {
        // document.getElementsByClassName("active__nav")[0].classList.remove("active__nav");
        // e.target.classList.add("active__nav")
    }

    const background = "https://mindsparklemag.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/04/peldxrvztmzlxtrxep4k-1240x635.jpg.webp";

    useEffect(() => {
        setPath(window.location.pathname);


        // GET CART PRODUCT FROM THE SERVER 

        axios.get(`/api/user/${userId}`)
            .then(res => {

                dispatch({
                    type: 'GOT_PRODUCTS',
                    item: res.data.cart
                })        

            }).catch(e => console.log(e))

    }, [])

    
    



    return (
        <Container style={{backgroundImage: `url(${background})`}}>
            <nav>
                
                <IconContainer onClick={() => setOpenModal(true)}><Menu /></IconContainer>

                <Link to="/"><h2>furn.</h2></Link>

                <ul>
                    <Link to="/"><li onClick={handleActiveNav} className={path==="/"? "active__nav" : null}>Home</li></Link>
                    <Link to="/shop"><li onClick={handleActiveNav} className={path==="/shop"? "active__nav" : null} >shop</li></Link>
                    <Link to="/blogs"><li onClick={handleActiveNav} className={path==="/blogs"? "active__nav" : null} >blogs</li></Link>
                    <Link to="/about"><li onClick={handleActiveNav} className={path==="/about"? "active__nav" : null} >about</li></Link>
                </ul>

                <ul className="personal__options">
                    <li><SearchRounded /></li>
                    <Link to="/cart"><li className={path==='/cart'? "active_personal_nav" : null} ><ShoppingCart /></li></Link>
                    <Link to={userId? `/user/${userId}` : "/auth"}><li className={path==='/user'? "active_personal_nav" : null} ><Person /></li></Link>
                </ul>

                <Link id='mobile_cart_icon' to='/cart'><IconContainer><ShoppingCart /></IconContainer></Link>
            </nav>

            <MenuModal onClick={() => setOpenModal(false)} style={{display: openModal? "grid" : "none"}}>
                <div>
                    
                    <UserContainer>
                        <Link to={userId? `/user/${userId}` : '/auth'} ><Avatar /></Link>
                        <h4>Rahul Singhania</h4>
                    </UserContainer>

                    <ul>
                        <Link to="/"><li className={path==="/"? "active__nav" : null}>Home</li></Link>
                        <Link to="/shop"><li className={path==="/shop"? "active__nav" : null}>Shop</li></Link>
                        <Link to="/blogs"><li className={path==="/blogs"? "active__nav" : null}>Blogs</li></Link>
                        <Link to="/about"><li className={path==="/about"? "active__nav" : null}>About</li></Link>
                    </ul>
                </div>
            </MenuModal>            
        </Container>
    );
}

export default Header;


const Container = styled.div`
    color: #e5e7ef;
    height: 100px;
    background-size: cover;
    background-position: top;
    padding: 20px 4%;
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1500px;
        margin: 0 auto;
    }

    li {
        text-transform: capitalize;
        font-weight: 600;
        cursor: pointer;
        font-size: 1.1rem;
    }

    h2 {
        font-size: 1.9rem;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 3rem;
        list-style: none;
    }

    .personal__options {
        gap: 1.3rem;
    }

    @media(max-width: 900px) {
        ul {
            display: none;
            flex-direction: row-reverse;
        }
    }
`;

const IconContainer = styled.div`
    display: none;
    cursor: pointer;

    svg {
        font-size: 2rem;

        :hover {
            color: #bcc2db;
        }
    }

    @media(max-width: 900px) {
        display: block;
    }
`;

const MenuModal = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.4);

    div {
        background: #fff;
        border-radius: 7px;
        color: #141313;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0;        
    }

    li {
        margin: 11px 0;
        padding-bottom: 4px;
    }

    
    
`;

const UserContainer = styled.div`    
    h4 {
        font-weight: 700;
        font-size: 1rem;
        padding: 10px 0;
    }
    border-bottom: solid 1px lightgray;
`;

const Avatar = styled.div`
    width: 55px !important;
    height: 55px;
    background: #ddd !important;
    border-radius: 50% !important;
`;