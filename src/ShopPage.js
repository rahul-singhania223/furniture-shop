import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import Product from "./Product";



function ShopPage(props) {

        
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(localStorage.getItem('filter'))
    const [filterOptions, setFilterOptions] = useState(['all', 'chairs', 'sofas', 'beds', 'office chairs', 'desks', 'tables', 'study tables', 'gaming chairs'])

    const handleActiveProductFilter = (e) => {
        document.getElementsByClassName("active__product__filter")[0].classList.remove("active__product__filter");
        e.target.classList.add("active__product__filter");
        localStorage.setItem("filter", e.target.innerHTML);
        setFilter(e.target.innerHTML);
    }

    useEffect(() => {
        fetch("/api/products")
        .then(res => res.json())
        .then(res => setProducts(res));

        document.getElementById(filter).classList.add('active__product__filter');
        setFilterOptions(filterOptions);
    }, [])


    window.onload = () => {
        document.getElementById(filter).classList.add("active__product__filter")
    }

    localStorage.setItem("filter", filter);

    return (
        <Container>
            <header>
                <Header />
            </header>

            <main>
                <FilterContainer className="filter__container">
                    
                    {
                        filterOptions.map((option) => (

                            <FilterOption onClick={handleActiveProductFilter} id={option} >{option}</FilterOption>
                        ))
                    }
                    
                </FilterContainer>

                <ProductsContainer>
                    {
                        products.map((product) => {
                            if(filter==="all") {
                                return (
                                    <Product key={product._id} id={product._id} images={product.images} title={product.title} ratings={product.ratings} price={product.price} />
                                )
                            } else {
                                let filterIndex = product.keywords.findIndex((keyword) => keyword === filter.substring(0, filter.length-1));

                                if(filterIndex>=0) {
                                    return (
                                        <Product key={product._id} id={product._id} images={product.images} title={product.title} ratings={product.ratings} price={product.price} />
                                    )
                                }else {
                                    return null
                                }
                            }
                        })
                    }
                </ProductsContainer>
            </main>

            <footer>
                <Footer />
            </footer>            
        </Container>
    );
}

export default ShopPage;


const Container = styled.div`
   
    main {
        max-width: 1500px;
        margin: 0 auto;
        
    }
   
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 40px 4% 10px 4%;    
  

`;

const FilterOption = styled.div`
    padding: 10px 30px;
    border: solid 2px #b9988e;
    border-radius: 30px;
    text-transform: capitalize;
    font-family: 'Maven Pro', sans-serif;
    margin-right: 40px;
    cursor: pointer;
    white-space: nowrap ;

    @media(max-width: 500px) {
        padding: 7px 18px;
        font-size: 0.8rem;
    }
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 100px 0;
    min-height: 60vh;
    

    @media(max-width: 1044px) {
        justify-content: center;
    }

`;