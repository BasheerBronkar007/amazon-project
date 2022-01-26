import React, {useState} from 'react'
import {Link , useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';


function Login() {
       const history = useHistory();
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const signIn = e => {
           e.preventDefault();
           
           auth
           .signInWithEmailAndPassword(email, password)
           .then((auth) => {

             if(auth){
                   history.push('/')
             }
           })
           .catch(error => alert(error.message))
           
       }

       const register = e => {
           e.preventDefault();
           
           auth
           .createUserWithEmailAndPassword(email, password)
           .then((auth) => {
               //It successfully created a new user with Email and Password
               if(auth){
                   history.push('/')
               }              
           })
            .catch(error => alert(error.message))
       }

     return (

        <div className= 'login'>
            <Link to = "/">
             <img className="login--logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x313.png" alt="amazon" />
             </Link>
             <div className='login--container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className='login--signButton'>Sign-In</button>
                    </form>
                    <p>
                        By continuing, you agree to Amazon's Condition of Use and Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button type='submit' onClick={register} className='login--registrationButton'>Create your Amazon Account</button>    
             </div>
        </div>

    )
}

export default Login;
