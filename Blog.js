import React from 'react';
import styled from 'styled-components';



function Blog(props) {
    return (
        <Container className="blog">
            <ImgContainer>
                <img src="https://images.unsplash.com/photo-1601467075935-7e5c5c607074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
            </ImgContainer>

            <ContentContainer>
                <h2>Gamming chair getting in demand for gammers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in...<a href="/blogs">Read more</a></p>        
            </ContentContainer>            
        </Container>
    );
}

export default Blog;


const Container = styled.div`    
    flex: 1;
    max-width: 500px;
    min-width: 400px;
    margin: 40px 20px;
    background: #fff;
    padding: 15px;
    border-radius: 11px;

    @media(max-width: 1100px) {
        min-width: 340px;
    }
`;

const ImgContainer = styled.div`
    
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

const ContentContainer = styled.div`
    h2 {
        font-weight: 500;
        padding: 12px 0;
    }

    p {
        line-height: 1.6rem;
        
    }

    a {
        color: #2D46B9;
        font-weight: 600 !important;
    }

`;