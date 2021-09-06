import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';



function Aboutpage(props) {

    
    return (
        <Container>
            <header>
                <Header />
            </header>

            <main>
                <Section>
                    <div className="image__container">
                        <div>                        
                            <img src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"  alt="" />
                        </div>    
                    </div>

                    <div>
                        <h2>Who we are?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br />
                            Quis blandit turpis cursus in hac. Condimentum lacinia quis vel eros donec ac odio tempor. Purus ut faucibus pulvinar elementum integer.
                        </p>
                    </div>
                </Section>


                <Section id="about__section__2">
                    <div>
                        <h2>Our Specializations?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br />
                            Quis blandit turpis cursus in hac. Condimentum lacinia quis vel eros donec ac odio tempor. Purus ut faucibus pulvinar elementum integer.semper quis. Arcu vitae elementum curabitur vitae nunc. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Arcu dui vivamus arcu felis bibendum
                        </p>
                    </div>

                    <div className="image__container">
                        <div>                        
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"  alt="" />
                        </div>    
                    </div>
                </Section>

                

            </main>

            <footer>
                <Footer />
            </footer>

        </Container>
    );
}

export default Aboutpage;


const Container = styled.div`
    main {
        min-height: 60vh;
        max-width: 1300px;
        margin: 0 auto;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 150px 0;

    div {
        flex-basis: 50%;
        color: #141313;
        display: flex;
        flex-direction: column;
        margin: 0 20px;
    }


    .image__container {
        
        div {
            border: solid 2px #b16953;
            width: fit-content !important;
            height: fit-content !important;
            border-radius: 11px;
            margin: 0 auto;
        }

        img {
            width: 400px;
            height: 400px;
            object-fit: contain;
            position: relative;
            left: 40px;
            top: 20px;
        }
    }

    h2 {
        font-size: 2.4rem;
        font-family: 'Maven Pro', sans-serif !important;
        font-weight: 600;
        letter-spacing: 2px;
        color: #141313;
        padding-bottom: 40px;
    }

    p {
        line-height: 1.9rem;
        font-size: 1.1rem;
    }

    @media(max-width: 1124px) {
        img {
            width: 360px !important;
            height: 360px !important;
            object-fit: contain;
        }

        p {
            font-size: 1rem;
        }
    }

    @media(max-width: 900px) {
        flex-direction: column;

        div {
            margin: 0 auto;
            margin-bottom: 80px;
            text-align: center;
            width: 85%;            
        }

        img {
            width: 400px !important;
            height: 400px !important;
            object-fit: contain;
        }

        p {
            font-size: 1.05rem;
        }
    }

    @media(max-width: 500px) {
        div {
            width: 90%;
        }

        img {
            width: 300px !important;
            height: 300px !important;
            object-fit: contain;
        }

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 0.95rem;
        }
    }
`;