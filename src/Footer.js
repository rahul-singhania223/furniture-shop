import React from 'react';
import styled from 'styled-components';


function Footer(props) {
    return (
        <Container>
            <h2>
                Desined and developed by <a href="https://www.upwork.com/freelancers/~01a13f4cd74e3429a3?viewMode=1">Rahul Singhania</a>
            </h2>            
        </Container>
    );
}

export default Footer;


const Container = styled.div`
    height: 200px;
    display: grid;
    place-items: center;
    background: #141313;
    color: #e5e7ef;

    h2 {
        display: flex;
        flex-direction: column;
        text-align: center;
        line-height: 44px;
    }

    a {
        font-size: 1.3rem;
        color: #e5e7ef;

    }
`;