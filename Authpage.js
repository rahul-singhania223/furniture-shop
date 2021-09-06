import { Facebook } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';



function Authpage(props) {

    const [isLogin, setIsLogin] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState({});

    const changeForm = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPass('');
        setPhone('');
        setFirstName('');
        setLastName('');        
        
    }

    // whole signup process

    const startSignup = (e) => {
        e.preventDefault();
        setErr({});

        // validation
        if(pass.length<6) {
            setErr({ status: 'failed', msg: 'Password must be minimum 6 characters'})
        } else {

            // send credetials to the server

            const credentials = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                pass: pass
            }



            axios.post('/api/signup', credentials)
                .then(res => {
                    if(res.data.status==='failed') {
                        setErr(res.data)
                    } else {
                       
                        localStorage.setItem('userId', res.data.data._id);
                        
                        window.location.href = 'http://localhost:3000/';

                    }
                }).catch(e => console.log(e))


        }
    }


    // whole login process --

    const startLogin = (e) => {
        e.preventDefault();
        setErr('');

        const credentials = {
            email: email,            
            pass: pass
        }

        axios.post('/api/login', credentials)
            .then(res => {
                if(res.data.status==='failed') {
                    setErr(res.data);
                } else {
                        localStorage.setItem('userId', res.data.data._id);
                        
                        window.location.href = 'http://localhost:3000/';
                }
            })
            .catch(e => console.log(e))


    }

    

    if(!isLogin) {    

        return (
            <Container>
               
                <FormContainer>
                    <h2>Register</h2>

                    <div><span><Facebook /></span> Signup with Facebook</div>

                    <form onSubmit={startSignup}>

                        <p style={{display: err? "block" : "none"}} className="err__message">{ err.msg }</p>

                        <label>First name</label>
                        <input required onChange={e => setFirstName(e.target.value)} type='text' />

                        <label>Last name</label>
                        <input required onChange={e => setLastName(e.target.value)} type='text' />

                        <label>Phone</label>
                        <input required onChange={e => setPhone(e.target.value)} type='phone' />

                        <label>Email</label>
                        <input required onChange={e => setEmail(e.target.value)} type='email' />

                        <label>Password</label>
                        <input required onChange={e => setPass(e.target.value)} type='password' />
                        

                        <button type='submit'>Register</button>

                        <p>Already have an account? <span onClick={changeForm}>Login</span></p>
                    </form>


                </FormContainer>
            </Container>
        );
    } else {
        return (
            <Container>
                <FormContainer>
                    <h2>Log In</h2>

                    <div><span><Facebook /></span> Signup with Facebook</div>


                    <form onSubmit={startLogin}>

                        <p style={{ display: err? "block" : 'none' }} className="err__message">{ err.msg }</p>

                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type='text' />

                        <label>Password</label>
                        <input value={pass} onChange={e => setPass(e.target.value)} type='password' />

                        <button type='submit'>Log In</button>

                        <p>Not registered? <span onClick={changeForm}>Register</span></p>
                    </form>

                    
                </FormContainer>
            </Container>

            
        )
    }
}

export default Authpage;


const Container = styled.div`
    padding: 40px 4%;
    max-width: 900px;
    margin: 0 auto;
    
`;



const FormContainer = styled.div`
    color: #141313;
    background: #fff;
    padding: 40px;
    border-radius: 11px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    div {
        margin-top: 50px;
        width: 400px;
        background: #141313;
        color: #fff;
        height: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        cursor: pointer;
        

        svg {
            color: #fff;
            margin-right: 20px;
            font-size: 1.7rem;
        }
        
    }
    

    form {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        width: 500px;
               
    }

    h2 {
        margin: 0 auto;
        font-family: 'Maven Pro', sans-serif !important;
        font-weight: 500;
        font-size: 1.7rem;

    }

    input {
        border: solid 1px #141313;
        border-radius: 5px;
        height: 40px;
        margin: 7px 0 20px 0;
        padding: 0 11px;
        font-size: 1rem;
        
    }

    label {
        font-family: 'Maven Pro', sans-serif !important;
        font-weight: 500;
    }


    button {
        width: 140px;
        height: 43px;
        margin-top: 30px;
        border: none;
        background: #141313;
        color: #fff;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 600;
    }

    p {
        font-size: 0.9rem;
        margin: 40px auto 0 auto;
        font-weight: 600;
    }

    span {
        padding-left: 4px;
        font-size: 0.95rem;
        color: #5e5a5b;
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
        
    }

    
    
`;
