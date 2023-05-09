import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";
import {Link,useNavigate} from 'react-router-dom'

const  RedirectLogin = () => {
  let location = useLocation();
  const navigate=useNavigate()
  const [cookies, , removeCookie] = useCookies(["access_token"]);


    React.useEffect(() => {
        console.log(location);

        if(!(location.pathname === '/login' || location.pathname === '/signup'))
        {
            console.log(cookies);
            if(!cookies["access_token"]) 
            {

                navigate('/login');
            }
        }

    }, [location]);

    return (
        <>

        </>
    );
}

export default RedirectLogin;