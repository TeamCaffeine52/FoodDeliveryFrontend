import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Logout = () => {
    const navigate = useNavigate();
    const [ , , removeCookie] = useCookies(["access_token"]);
    removeCookie('access_token');
    
    useEffect(() => {
        toast.success('Logout Successful');
        navigate('/');
    }, [])

    return (<></>);
}

export default Logout;