import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { emptyCart } from "../redux/cartSlice";

const Logout = () => {
    const navigate = useNavigate();
    const [ , , removeCookie] = useCookies(["access_token"]);
    const dispatch = useDispatch();

    removeCookie('access_token');
    dispatch(emptyCart());
    
    useEffect(() => {
        toast.success('Logout Successful');
        navigate('/');
    }, [])

    return (<></>);
}

export default Logout;