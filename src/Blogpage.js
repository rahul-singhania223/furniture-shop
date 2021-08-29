import React from 'react';
import styled from "styled-components";
import Header from './Header';
import Footer from "./Footer";
import Blog from './Blog';



function Blogpage(props) {
    return (
        <Container>
            <header>
                <Header />
            </header>

            <main>
                <BlogsContainer>
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />

                </BlogsContainer>

            </main>

            <footer>
                <Footer />
            </footer>
            
        </Container>
    );
}

export default Blogpage;


const Container = styled.div`
    main {
        min-height: 50vh;
    }
`;

const BlogsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;

