import React, { useState } from 'react'
import loginsignupimage from "../assets/login-animation.gif"
import {BiShow,BiHide} from "react-icons/bi"
import {Link,useNavigate} from 'react-router-dom'
import { toast } from "react-hot-toast";
import { loadUser } from '../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from "react-cookie"

function Login() {

    const navigate=useNavigate()

    const [, setCookies] = useCookies(["access_token"]);

    const dispatch=useDispatch()

    const [showPassword,setShowPassword]= useState(false)
    const [data,setData]=useState({
        
        email:"",        
        password:""
        
    });

    const handleShowPassword = ()=>{
        setShowPassword(preve=>!preve)
    }
   
    const handleOnChange = (e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {email,password}=data
        if(email && password){
            const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })

            const dataRes=await fetchData.json()
            console.log(dataRes);
            
            if(dataRes.success){
                toast.success(dataRes.message);
                setCookies("access_token", dataRes.token, {maxAge: 60 * 60});
                // window.localStorage.setItem("token", dataRes.token);
                dispatch(loadUser(dataRes.user));
                navigate("/");
            }
            else
            {
                toast.error(dataRes.message);
            }
        }
        else{
            toast.error("Please enter required fields..")
        }
    }
    return(
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-md bg-white m-auto flex-col p-2'>
                {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                    <img src={loginsignupimage} className='w-full'/>
                </div>
                
                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>                   

                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400' value={data.email} onChange={handleOnChange}/>

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400'>                        
                        <input type={showPassword ? "text":"password"} id='password' name='password' className='w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange}/>
                        <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/>:<BiHide/>}</span>
                    </div>
                                      
                    <button type='submit' className='w-full max-w-[150px] bg-red-500 m-auto hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
                </form>

                 <p className='text-left text-sm mt-2'>Don't have an account ? <Link to={'/signup'} className='text-red-500 underline'>Register Now!!</Link></p>
            </div>
        </div>
    )
}

export default Login