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


    const onClickLogin = async () => {
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
            <Formulario>
            <p>E-mail</p>
            <input value={email} onChange={onChangeEmail} required/>
            <p>Senha</p>
            <input type="password" value={password} onChange={onChangePassword} />
        </Formulario>
        <button onClick={onClickLogin}>Login</button>
        </>
    )
}