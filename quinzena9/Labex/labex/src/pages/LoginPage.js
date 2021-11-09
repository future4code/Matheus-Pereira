//Para fazermos login como administrador

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../services/Login';

    // npm install react-router-dom@5
    // const history = useHistory();
    // history.push("/trip-details")
    // history.goBack()

export default function LoginPage () {

    const navigate = useNavigate();
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
            navigate("/admin");
        } else {
            alert(response.error.data.message);
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <p>E-mail</p>
            <input value={email} onChange={onChangeEmail}/>
            <p>Senha</p>
            <input type="password" value={password} onChange={onChangePassword}/>
            <button onClick={onClickLogin}>Login</button>
        </>
    )
}