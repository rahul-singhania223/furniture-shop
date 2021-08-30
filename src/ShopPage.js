import React from 'react';
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import Product from "./Product";




function ShopPage(props) {

    const handleActiveProductFilter = (e) => {
        const classes = Array.from(e.target.classList);
        const classIndex = classes.findIndex((className) => className === "active__product__filter");

        // If already selected
        if(classIndex>=0) {             
            e.target.classList.remove("active__product__filter")
        } else {
            // If not selected
            e.target.classList.add("active__product__filter");
        }

        console.log(classIndex);
    }

    return (
        <Container>
            <header>
                <Header />
            </header>

            <main>
                <FilterContainer className="filter__container">
                    <FilterOption onClick={handleActiveProductFilter}  className="active__product__filter">chairs</FilterOption>
                    <FilterOption onClick={handleActiveProductFilter} >sofas</FilterOption>
                    <FilterOption onClick={handleActiveProductFilter} >beds</FilterOption>
                    <FilterOption onClick={handleActiveProductFilter} >office chairs</FilterOption>
                    <FilterOption onClick={handleActiveProductFilter} >desks</FilterOption>
                    <FilterOption onClick={handleActiveProductFilter} >tables</FilterOption>                    
                    <FilterOption onClick={handleActiveProductFilter} >study tables</FilterOption>
                    <FilterOption onClick={handleActiveProductFilter} >gaming chairs</FilterOption>
                </FilterContainer>

                <ProductsContainer>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
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
    padding: 30px 4%;    
  

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
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 100px 0;
    

    @media(max-width: 1044px) {
        justify-content: center;
    }

`;