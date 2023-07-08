import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function SigninPage() {

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/`)
            .then((res) => {
            
            })
            .catch((err) => {
                
            });
    }, []);

    return (
        <>

        </>
    );
}