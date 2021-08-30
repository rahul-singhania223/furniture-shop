import React from 'react';
import styled from 'styled-components';
import Homepage from './Homepage';
import ShopPage from './ShopPage';
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogpage from './Blogpage';
import Aboutpage from './Aboutpage';
import Userpage from './Userpage';
import Cartpage from './Cartpage';


function App(props) {
    return (
        <Router>        
            <Container>
                <Switch>
                    <Route path="/cart"><Cartpage /></Route>
                    <Route path="/user/:userId"><Userpage /></Route>
                    <Route path="/about"><Aboutpage /></Route>
                    <Route path="/blogs"><Blogpage /></Route>
                    <Route path="/shop"><ShopPage /></Route>       
                    <Route path="/"><Homepage /></Route>
                </Switch>


            </Container>
        </Router>
    );
}

export default App;

const Container = styled.div`
    
`;