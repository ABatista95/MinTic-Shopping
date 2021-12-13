import React from 'react';

// Importar componenetes
import Router from './Router';

class Login extends React.Component{
    render() {
        return (
            <div>
                <p>Munditos 2</p>
                <Router/>
            </div>
        );
    }
}

/*
<React.Fragment>
    <h3>Login</h3>
    <a href={<Router/>}>Ingresar</a>
</React.Fragment>
*/
export default Login;