import React, { useState } from 'react'
import loginsignupimage from "../assets/login-animation.gif"
import {BiShow,BiHide} from "react-icons/bi"
import {Link,useNavigate} from 'react-router-dom'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { toast } from "react-hot-toast";

const validateData = (data, toast) => {
    if (!new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$', 'gm').test(data.email))
    {
        toast.error('Invalid Email');
        return false;
    }
    if (!new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$', 'gm').test(data.password))
    {
        toast.error('Password must be minimum eight characters, have atleast one uppercase letter, one lowercase letter, one number and one special character');
        return false;
    }
    if(data.password.length > 16)
    {
        toast.error('Password must be of maximum 16 characters');
        return false;
    }
    if(data.password !== data.confirmPassword)
    {
        toast.error('Password and Confirm Password must be same');
        return false;
    }
    if (!new RegExp('^[a-zA-Z]+$', 'gm').test(data.firstName))
    {
        toast.error('First Name only contains small and capital letters');
        return false;
    }
    if (!new RegExp('^[a-zA-Z]+$', 'gm').test(data.lastName))
    {
        toast.error('Last Name only contains small and capital letters');
        return false;
    }

    return true;
}

function Signup() {
    const navigate=useNavigate();

    const [showPassword,setShowPassword]= useState(false)
    const [showConfirmPassword,setShowConfirmPassword]= useState(false)
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        confirmPassword:"",
        password:"",
        // image:""
    });

    const handleShowPassword = ()=>{
        setShowPassword(preve=>!preve)
    }
    const handleShowConfirmPassword = ()=>{
        setShowConfirmPassword(preve=>!preve)
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
        e.preventDefault();
        const {firstName, lastName, email, password, confirmPassword} = data;

        if(firstName && lastName && email && password && confirmPassword){
            if(!validateData(data, toast))
                return;

            const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })

            const dataRes=await fetchData.json();
            console.log(dataRes);
            
            
            if(dataRes.success)
            {
                toast.success(dataRes.message);
                navigate("/login");
            }
            else
            {
                toast.error(dataRes.message);
            }            
        }
        else
            toast.error("Please enter required fields..")
    }

    // const handleUploadProfileImage=async(e)=>{
    //     const data=await ImagetoBase64(e.target.files[0])
    //     console.log(data);
    //     setData((preve)=>{
    //         return{
    //             ...preve,
    //             [image]:data
    //         }
    //     })
    // }
    return(
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-md bg-white m-auto flex-col p-2'>
                {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
                <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
                    <img src={data.image ? data.image: loginsignupimage} className='w-full h-full'/>
                    <label htmlFor='profileImage'>
                    {/* <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center'>
                        <p className='text-sm p-1 text-white cursor-pointer'>Upload</p>
                    </div> */}
                    {/* <input type='file' id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage} /> */}
                </label>
                </div>
               
                
                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor='firstname'>First Name</label>
                    <input type='text' id='firstname' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400' value={data.firstName} onChange={handleOnChange}/>

                    <label htmlFor='lastname'>Last Name</label>
                    <input type='text' id='lastname' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400' value={data.lastName} onChange={handleOnChange}/>

                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400' value={data.email} onChange={handleOnChange}/>

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400'>                        
                        <input type={showPassword ? "text":"password"} id='password' name='password' className='w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange}/>
                        <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/>:<BiHide/>}</span>
                    </div>
                    
                    
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400'>                        
                        <input type={showConfirmPassword ? "text":"password"} id='confirmPassword' name='confirmPassword' className='w-full bg-slate-200 border-none outline-none' value={data.confirmPassword} onChange={handleOnChange}/>
                        <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow/>:<BiHide/>}</span>
                    </div>

                    <button type='submit' className='w-full max-w-[150px] bg-red-500 m-auto hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
                </form>

                 <p className='text-left text-sm mt-2'>Already have account ? <Link to={'/login'} className='text-red-500 underline'>Login Now!!</Link></p>
            </div>
        </div>
    )
}

export default Signup