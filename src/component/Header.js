import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import {FaRegUserCircle} from "react-icons/fa"
import {BsFillCartFill} from "react-icons/bs"
import { useSelector } from 'react-redux';
import { useCookies } from "react-cookie";
import jwt_decode from 'jwt-decode';

const Header = () => {
    const [cookies , , ] = useCookies(["access_token"]);
    const isLoginned = cookies["access_token"] ? true : false;
    
    const cart = useSelector((state) => state.cart);
    let isAdmin = false;
    try {
        isAdmin = jwt_decode(cookies["access_token"]).isAdmin; 
    } catch (error) {}

    const[showMenu,setshowMenu] = useState(false);
    const handleShowMenu = ()=>{
        setshowMenu(preve => !preve) 
    }
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* desktop*/}
            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                <div className='h-10'>
                    <img src={logo} className="h-full"/>
                </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-7">
                    { isLoginned ?
                        <>
                            <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                                { isAdmin ? 
                                    <>
                                        <Link to={"/admin"}>Home</Link>
                                        <Link to={"/admin/order"}>Orders</Link>
                                        <Link to={"/about"}>About</Link>
                                        <Link to={"/contact"}>Contact</Link>
                                    </>
                                    : <>
                                        <Link to={"/"}>Home</Link>
                                        <Link to={"/orders"}>Orders</Link>
                                        <Link to={"/about"}>About</Link>
                                        <Link to={"/contact"}>Contact</Link>
                                    </>
                                }
                            </nav>
                            <div className="text-2xl text-sale-600 relative">
                                <Link to={"/cart"}>
                                    <BsFillCartFill/>
                                    <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                                        {cart.items.length}
                                    </div>
                                </Link>
                            </div>
                        </>
                        : null
                    }
                    <div className=" text-slate-600"onClick={handleShowMenu}>
                        <div className="text-3xl cursor-pointer">
                            <FaRegUserCircle />
                        </div>
                        {showMenu && (
                        <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                            { isLoginned ?
                                <>
                                    <Link to={"logout"} className="Whitespace-nowrap cursor-pointer">Logout</Link>
                                </>
                                : <>
                                    <Link to={"admin/login"} className="whitespace-nowrap cursor-pointer">Admin Login</Link>
                                    <Link to={"login"} className="Whitespace-nowrap cursor-pointer">Login</Link>
                                </>
                            }
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>


            {/* mobile */}
        </header>
    )
}

export default Header