import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft, ChevronRight, Person, SearchRounded, ShoppingCart } from '@material-ui/icons';
import Slider from "react-slick";
import Product from './HomeProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
// import avatar from "./assets/avatar.jpg";



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

    const [slides, setSlides] = useState(slidesNum);
    const [openNav, setOpenNav] = useState(false);
    const [path, setPath] = useState("");
    const [products, setProducts] = useState([]);
    const userId = localStorage.getItem('userId');



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

    useEffect(() => {
        setPath(window.location.pathname);
        
        fetch('/api')            
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }, [])

    
    // Carousel buttons ----
    const SlickArrowLeft = () => (
        <span             
            className={'prev-slick-arrow'}
            aria-hidden="true"
            type="button"
            >

            <ChevronLeft />
        </span>
    )

    const SlickArrowRight = () => (
        <span
            {...props}
            className={'next-slick-arrow'}
            aria-hidden="true"
            type="button"
            >
            <ChevronRight />
        </span>
    )
    

    // handle slides settings    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: window.innerWidth<1200? 1 : 2,
        // prevArrow: <SlickArrowLeft />,
        // nextArrow: <SlickArrowRight />
    }

   
    const backgrounds = ["https://mindsparklemag.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/04/Sofacompany-Design-Furniture-Furniture-Design-Product-Design-Industrial-Design-Interior-Design-Design-Designer-by-Sofacompany-Mindsparkle-Mag-4.jpg.webp", "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"]


    // Getting products
    useEffect(() => {
        fetch("/api/products")
        .then(res => res.json())
        .then(res => setProducts(res));
    }, [])
      
   

    return (
        <Container>
            <MainContainer>
                <header>
                    <TitleContainer style={{backgroundImage: window.innerWidth<768? `url(${backgrounds[1]})` : `url(${backgrounds[0]})`}} > 
                        <NavigationBar>
                            <span className="cart__icon"><Link to="/cart"><ShoppingCart /></Link> </span>  

                            <Link to="/"><h2>furn.</h2></Link>

                            <ul className="nav__option">
                                <Link to="/"><li   className="active__nav">Home</li></Link>
                                <Link to="/shop"><li  >shop</li></Link>
                                <Link to="/blogs"><li  >blog</li></Link>
                                <Link to="/about"><li  >about</li></Link>
                            </ul>

                            <ul className="personal__options" >
                                <li><SearchRounded /></li>
                                <Link to="/cart"><li><ShoppingCart /></li></Link>
                                <Link to={userId? `/user/${userId}` : '/auth'}><li><Person /></li></Link>
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
                                    <Link to={userId? `/user/${userId}` : '/auth'}><Avatar style={{backgroundImage: `url("data:image/jpeg;base64,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")`}} /></Link>
                                    <Link to={userId? `/user/${userId}` : '/auth'}><h3>Rahul Singhania</h3></Link>
                                </UserContainer>
                                <ul>
                                    <Link to="/"><li className={path==="/"? "active__nav" : null} >Home</li></Link>
                                    <Link to="/shop"><li className={path==="/shop"? "active__nav" : null} >shop</li></Link>
                                    <Link to="/about"><li className={path==="/about"? "active__nav" : null} >about</li></Link>
                                    <Link to="/blogs"><li className={path==="/blogs"? "active__nav" : null} >blogs</li></Link>
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
                                <div><SlickArrowLeft /><SlickArrowRight /></div>
                            </HeaderContainer>

                            <ProductCarouselContainer>
                                <Slider className={"slider"} {...settings}>
                                    {
                                        products.map((product) => {
                                            let index = product.keywords.findIndex((keyword) => keyword === 'chair' || keyword === 'modern chair');

                                            if(index>=0) {
                                                return (
                                                    <Product key={product._id} images={product.images} title={product.title} ratings={product.ratings} price={product.price} />
                                                )
                                            } else {
                                                return (
                                                    null
                                                )
                                            } 
                                        })
                                    }
                                </Slider>
                            </ProductCarouselContainer>                      
                        </ProductContainer>

                        <ProductContainer>
                            <HeaderContainer>
                                <h2>modern sofas</h2>
                                <div><span><ChevronLeft /></span><span><ChevronRight /></span></div>
                            </HeaderContainer>

                            <ProductCarouselContainer>
                                <Slider className={"slider"} {...settings}>
                                    {
                                        products.map((product) => {
                                            let index = product.keywords.findIndex((keyword) => keyword === 'sofa' || keyword === 'modern sofa');

                                            if(index>=0) {
                                                return (
                                                    <Product key={product._id} id={product._id} images={product.images} title={product.title} ratings={product.ratings} price={product.price} />
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </Slider>
                            </ProductCarouselContainer>                      
                        </ProductContainer>

                        <ProductContainer>
                            <HeaderContainer>
                                <h2>trending products</h2>
                                <div><span><ChevronLeft /></span><span><ChevronRight /></span></div>
                            </HeaderContainer>

                            <ProductCarouselContainer>
                                <Slider className={"slider"} {...settings}>
                                    {
                                        products.map((product, index) => {
                                            if(index%2!==0) {
                                                return (
                                                    <Product key={product._id} images={product.images} title={product.title} ratings={product.ratings} price={product.price} />
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
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
    min-height: 600px;
`;

const NavigationBar = styled.nav`
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

    @media(max-width: 1024px) {
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
        
        span {
            margin-left: 14px;
        }
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
        font-family: 'Maven Pro', sans-serif !important;
        font-weight: 400;
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
    border-radius: 50% !important;
    margin-bottom: 10px;
    background-size: cover !important;
    background-position: center !important;
`;
