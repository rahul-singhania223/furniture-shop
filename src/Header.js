import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import {  Person, SearchRounded, ShoppingCart } from '@material-ui/icons';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';




function Header(props) {

    // const [openNav, setOpenNav] = useState(false);

    const [path, setPath] = useState("");

    const handleActiveNav = (e) => {
        // document.getElementsByClassName("active__nav")[0].classList.remove("active__nav");
        // e.target.classList.add("active__nav")
    }

    const background = "https://mindsparklemag.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/04/peldxrvztmzlxtrxep4k-1240x635.jpg.webp";

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])

    return (
        <Container style={{backgroundImage: `url(${background})`}}>
            <nav>
                
                <IconContainer><Menu /></IconContainer>

                <Link to="/"><h2>furn.</h2></Link>

                <ul>
                    <Link to="/"><li onClick={handleActiveNav} className={path==="/"? "active__nav" : null}>Home</li></Link>
                    <Link to="/shop"><li onClick={handleActiveNav} className={path==="/shop"? "active__nav" : null} >shop</li></Link>
                    <Link to="/blogs"><li onClick={handleActiveNav} className={path==="/blogs"? "active__nav" : null} >blogs</li></Link>
                    <Link to="/about"><li onClick={handleActiveNav} className={path==="/about"? "active__nav" : null} >about</li></Link>
                </ul>

                <ul className="personal__options">
                    <li><SearchRounded /></li>
                    <li><ShoppingCart /></li>
                    <li><Person /></li>
                </ul>

                <IconContainer><ShoppingCart /></IconContainer>
            </nav>            
        </Container>
    );
}

export default Header;


const Container = styled.div`
    color: #e5e7ef;
    height: 30vh;
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