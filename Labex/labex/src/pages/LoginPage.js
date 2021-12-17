//Para fazermos login como administrador

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Login } from '../services/Login';
import { Formulario, Titulo } from '../services/styled';

export default function LoginPage () {

    const navigate = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }


    const onClickLogin = async (event) => {
        event.preventDefault();
        const response = await Login({
            email,
            password
        });
        if(response.token) {
            localStorage.setItem("token", response.token);
            navigate.push("/admin");
        } else {
            alert(response.error.data.message);
        }
    }

    return (
        <>
            <Titulo>Login Page</Titulo>
            <Formulario onSubmit={onClickLogin}>
            <p>E-mail</p>
            <input type="email" value={email} onChange={onChangeEmail} required/>
            <p>Senha</p>
            <input type="password" value={password} onChange={onChangePassword} required/>
            <button>Login</button>
        </Formulario>
        
        </>
    )
}