import React from 'react';
import styled from 'styled-components';


function Footer(props) {
    return (
        <Container>
            <h3>
                Desined and developed by <a href="https://www.upwork.com/freelancers/~01a13f4cd74e3429a3?viewMode=1">Rahul Singhania</a>
            </h3>            
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

    h3 {
        display: flex;
        flex-direction: column;
        text-align: center;
        line-height: 44px;
    }

    a {
        
        color: #e5e7ef;
        text-decoration: underline;

    }
`;