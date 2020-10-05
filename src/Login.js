import React from 'react';
import InstagramLogin from 'react-instagram-login';

const Login = () => {
    return <InstagramLogin
    clientId="5fd2f11482844c5eba963747a5f34556"
    buttonText="Login"
    onSuccess={code => {
        // ON SUCCESS SET THE WINDOW LOCATION TO THE ORIGINAL URL
        window.location.href = `/login/code=${code}`
    }}
    onFailure={() => {
        console.log('failure')
    }}
  />
}

export default Login;