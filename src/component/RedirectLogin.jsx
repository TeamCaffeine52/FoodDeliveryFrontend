import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";
import {Link,useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const  RedirectLogin = () => {
    let location = useLocation();
    const navigate = useNavigate()
    const [cookies , , ] = useCookies(["access_token"]);

    useEffect(() => {
        console.log(location);
        
        const currentPath = location.pathname;


        if(!(currentPath === '/login' || currentPath === '/signup' || currentPath === '/admin/login'))
        {
            // Not on /login, /signup, /admin/login
            if(!cookies["access_token"])
            {
                // Not Loginned
                if(currentPath.startsWith('/admin'))
                {
                    // Tried to access admin pages
                    navigate('/admin/login');
                }
                else
                {
                    // Tried to access normal pages
                    navigate('/login');
                }
            }
            else
            {
                // Loginned
                const isAdmin = jwt_decode(cookies["access_token"]).isAdmin;
                
                if(isAdmin)
                {
                    // Admin so All pages Allowed
                }
                else
                {
                    // User so no access to /admin prefixed pages
                    if(currentPath.startsWith('/admin'))
                    {
                        navigate('/admin/login');
                    }
                }
            }

        }

    }, [location]);

    return (
        <>

        </>
    );
}

export default RedirectLogin;