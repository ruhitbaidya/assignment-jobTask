import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { UserLogin } from "../UserAuth/User_Auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const {emailPasssignUp} = useContext(UserLogin);
  const navigate = useNavigate()
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({name, email, password})
    emailPasssignUp(email, password)
    .then((res)=> {
      if(res.user){
        toast.success('successfully create account')
        navigate('/')
      }
    })
    .catch((err)=> console.log(err))
  };
  return (
    <div className="h-[90vh]">
      <ToastContainer />
      <div className="container mx-auto px-[10px]  h-[90vh] flex justify-center items-center">
        <div className="w-[60%] mx-auto p-[40px] bg-gray-300 rounded-lg">
          <h2 className="text-2xl font-[700] text-center">SignUp</h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-[10px]">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                className="w-full p-[10px] rounded-lg"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-[10px]">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="w-full p-[10px] rounded-lg"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-[10px]">
              <label htmlFor="pass">Password</label>
              <input
                name="password"
                className="w-full p-[10px] rounded-lg"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div>
              <button className="w-full py-[10px] border rounded-lg">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
