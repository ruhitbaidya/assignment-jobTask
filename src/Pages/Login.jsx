import React, { useContext } from 'react'
import { UserLogin } from '../UserAuth/User_Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {signIngoogle} = useContext(UserLogin);
    const navigate = useNavigate()
    const handelLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIngoogle(email, password)
        .then((res)=>{
            if(res.user){
                toast.success('Login Success')
                navigate('/')
            }
        })
        .catch((err)=>{
            toast.success(err.message)
        })
    }
  return (
    <div className='h-[90vh]'>
        <ToastContainer />
        <div className='container mx-auto px-[10px]  h-[90vh] flex justify-center items-center'>
           <div className='w-[60%] mx-auto p-[40px] bg-gray-300 rounded-lg'>
            <h2 className='text-2xl font-[700] text-center'>SignIn</h2>
           <form onSubmit={handelLogin}>
                <div className='mb-[10px]'>
                    <label htmlFor="email">Email</label>
                    <input name="email" className='w-full p-[10px] rounded-lg' type="email" placeholder='Enter Your Email' />
                </div>
                <div className='mb-[10px]'>
                    <label htmlFor="pass">Password</label>
                    <input name="password" className='w-full p-[10px] rounded-lg' type="password" placeholder='Enter Your Password' />
                </div>
                <div>
                    <button className='w-full py-[10px] border rounded-lg'>SignIn</button>
                </div>
            </form>
            <div className='mt-[10px]'>
                <button className='w-full py-[10px] border rounded-lg'>Google Login</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Login