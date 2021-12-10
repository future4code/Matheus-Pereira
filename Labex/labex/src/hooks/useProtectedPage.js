import { useEffect } from "react"
import { useHistory } from 'react-router-dom';


export const useProtectedPage = () => {
    const navigate = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {
            navigate.push("/login");
        }
    }, []);

}