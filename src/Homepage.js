import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft, ChevronRight, Person, SearchRounded, ShoppingCart } from '@material-ui/icons';
import Slider from "react-slick";
import Product from './Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Homepage(props) {

    // handle carousel system
    let slidesNum = 4;
    
    if(window.innerWidth < 1140) {
        slidesNum = 3;
    }

    if(window.innerWidth < 860) {
        slidesNum = 2;
    }

    if(window.innerWidth < 580) {
        slidesNum = 1;
    }

    window.onresize = () => {
        
        if(window.innerWidth > 1140) {
            setSlides(4);
        }
        
        if(window.innerWidth < 1140) {
            setSlides(3);
        }

        if(window.innerWidth < 860) {
            setSlides(2);
        }

        if(window.innerWidth < 580) {
            setSlides(1);
        }
    }

    
    const [slides, setSlides] = useState(slidesNum);
    const [openNav, setOpenNav] = useState(false); 

    // handle the active nav style
    const handleActiveNav = (e) => {
        document.getElementsByClassName("active__nav")[0].classList.remove("active__nav");
        e.target.classList.add("active__nav")
    }

    

    

   

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: slides,
        slidesToScroll: window.innerWidth<1200? 1 : 2,
    }

    
   

    return (
        <Container>
            <MainContainer>
                <header>
                    <TitleContainer>
                        <NavigationBar>
                            <span className="cart__icon"><ShoppingCart /></span>   

                            <h2>furn.</h2>

                            <ul className="nav__option">
                                <li onClick={handleActiveNav}  className="active__nav">Home</li>
                                <li onClick={handleActiveNav} >shop</li>
                                <li onClick={handleActiveNav} >blog</li>
                                <li onClick={handleActiveNav} >about</li>
                            </ul>

                            <ul className="personal__options" >
                                <li><SearchRounded /></li>
                                <li><ShoppingCart /></li>
                                <li><Person /></li>
                            </ul>

                            <MenuIconContianer onClick={() => setOpenNav(true)}><MenuIcon /></MenuIconContianer>
                        </NavigationBar>

                        <TitleTextContainer>
                            <h1>Choose your best furniture <br /> design ever.</h1>
                            <div>
                                <button>know more</button>
                                <button style={{background: "#e5e7ef", color: "#5e5a5b"}} >visit shop</button>
                            </div>
                        </TitleTextContainer>

                        <MenuModal onClick={() => setOpenNav(false)} style={{display: openNav? "grid" : "none"}}>
                            <div onClick={(e) => e.stopPropagation()}>
                                <UserContainer>
                                    <Avatar />
                                    <h3>Rahul Singhania</h3>
                                </UserContainer>
                                <ul>
                                    <li onClick={handleActiveNav}>Home</li>
                                    <li onClick={handleActiveNav}>shop</li>
                                    <li onClick={handleActiveNav}>about</li>
                                    <li onClick={handleActiveNav}>blogs</li>
                                </ul>
                            </div>
                        </MenuModal>
                    </TitleContainer>
                </header>



                <main>
                    <ProductSection>
                        <ProductContainer>
                            <HeaderContainer>
                                <h2>modern chairs</h2>
                                <div><span><ChevronLeft /></span><span><ChevronRight /></span></div>
                            </HeaderContainer>

                            <ProductCarouselContainer>
                                <Slider className={"slider"} {...settings}>
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                </Slider>
                            </ProductCarouselContainer>                      
                        </ProductContainer>

                        <ProductContainer>
                            <HeaderContainer>
                                <h2>modern chairs</h2>
                                <div><span><ChevronLeft /></span><span><ChevronRight /></span></div>
                            </HeaderContainer>

                            <ProductCarouselContainer>
                                <Slider className={"slider"} {...settings}>
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                </Slider>
                            </ProductCarouselContainer>                      
                        </ProductContainer>

                        <ProductContainer>
                            <HeaderContainer>
                                <h2>modern chairs</h2>
                                <div><span><ChevronLeft /></span><span><ChevronRight /></span></div>
                            </HeaderContainer>

                            <ProductCarouselContainer>
                                <Slider className={"slider"} {...settings}>
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                </Slider>
                            </ProductCarouselContainer>                      
                        </ProductContainer>

                    </ProductSection>

                    <BannerContainer>

                    </BannerContainer>

                    <BrandContainer>
                    
                    </BrandContainer>
                </main>

                <footer>
                    <FooterContainer>
                        <h3>Designed and develped by <a href="https://www.upwork.com/freelancers/~01a13f4cd74e3429a3?viewMode=1">Rahul Singhania</a ></h3>
                    </FooterContainer>
                </footer>

            </MainContainer>
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
    
`;

const MainContainer = styled.div`
    
`;

const TitleContainer = styled.div`
    height: 80vh;
    background-image: url('https://mindsparklemag.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/04/Sofacompany-Design-Furniture-Furniture-Design-Product-Design-Industrial-Design-Interior-Design-Design-Designer-by-Sofacompany-Mindsparkle-Mag-4.jpg.webp');
    background-size: cover;
    background-position: center;
    padding: 0 4%;
`;

const NavigationBar = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    color: #E5E7EF;

    h2 {
        font-size: 1.9rem;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 2rem;
        font-weight: 600;
        text-transform: capitalize;
    }

    li {
        padding-bottom: 2px;
    }

    .cart__icon {
        display: none;
        cursor: pointer;

        :hover {
            color: #bcc2db;
        }
    }

    @media(max-width: 1024px) {
        ul {
            display: none;
        }
    }

    @media(max-width: 500px) {
        flex-direction: row-reverse;
        
        .cart__icon {
            display: block;
            
            svg {
                font-size: 1.7rem;
            }
        }
    }


`;

const TitleTextContainer = styled.div`
    margin-top: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #e5e7ef;

    h1 {
        font-size: 3.3rem;
        font-weight: 900;
        text-transform: capitalize;
        letter-spacing: 3px;
        line-height: 4.3rem;
        font-family: 'Maven Pro', sans-serif;

    }

    div {
        display: flex;
        gap: 2rem;
        padding-top: 30px;
    }

    button {
        width: 150px;
        height: 45px;
        border: solid 1px #e5e7ef;
        background: none;
        border-radius: 30px;
        color: #e5e7ef;
        text-transform: capitalize;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;

        :hover {
            background: #e5e7ef;
            color: #5e5a5b;
        }
    }
    
    @media(max-width: 1040px) {
        h1 {
            font-size: 3rem;
            letter-spacing: 1px;
        }

        margin-top: 15%;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 2.9rem;
        }

        div {
            flex-direction: column-reverse;
        }
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 2.5rem;
        }

        button {
            margin-top: 30px;
        }
    }
`;

const MenuIconContianer = styled.span`
    display: none;
    cursor: pointer;

    svg {
        font-size: 1.9rem;
    }

    @media(max-width: 1024px) {
        display: block;
    }
`;


const ProductSection = styled.div`    
    box-sizing: border-box;   
    padding: 70px 3%;
`;

const ProductContainer = styled.div`
    max-width: 1500px;
    margin: 20px auto;
    margin-bottom: 40px;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    margin-bottom: 40px;

    span {
        width: 35px;
        height: 35px;
        display: grid;
        place-items: center;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;

        :hover {
            background: #bcc2db;
        }
    }

    div {
        display: flex;
        gap: 20px;
    }

    h2 {
        font-family: 'Maven Pro', sans-serif;
        font-weight: 500;
        text-transform: capitalize;

        br {
            display: none;
        }
        
    }

    @media(max-width: 768px) {
        br {
            display: block !important;
        }

        h2 {
            font-size: 1.3rem;
        }
    }
`;

const ProductCarouselContainer = styled.div`
    max-width: 100%;
    
`;

const BannerContainer = styled.div``;

const BrandContainer = styled.div``;

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background: #141313;
    display: grid;
    place-items: center;

    h3 {
        text-align: center;
        display: flex;
        flex-direction: column;
        line-height: 29px;
        color: #bcc2db;

        a {
            font-family: 'Maven Pro', sans-serif;
            font-weight: 500;
            color: #bcc2db;
            
        }
    }
`;

const MenuModal = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    display: grid;
    place-items: center;

    div {
        width: 85%;
        background: #fff;
        border-radius: 9px;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {       
        list-style: none;        
        align-items: center;
        justify-content: center;
    }

    li {
        margin: 10px 0;
        padding: 8px 0;
        font-size: 1.2rem;
        text-transform: capitalize;
        cursor: pointer;
        width: fit-content;
    }
`;

const UserContainer = styled.div`
   h3 {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
   }
   border-bottom: solid 1px lightgray;
   border-radius: 0 !important;
   padding: 14px 0 !important;
`;

const Avatar = styled.div`
    width: 50px !important;
    height: 50px !important;
    background: black !important;
    border-radius: 50% !important;
    margin-bottom: 10px;
`;