import React from "react";

const Register = () => {
  return (
    <div className="h-[90vh]">
      <div className="container mx-auto px-[10px]  h-[90vh] flex justify-center items-center">
        <div className="w-[60%] mx-auto p-[40px] bg-gray-300 rounded-lg">
          <h2 className="text-2xl font-[700] text-center">SignUp</h2>
          <form>
          <div className="mb-[10px]">
              <label htmlFor="name">Name</label>
              <input
                className="w-full p-[10px] rounded-lg"
                type="email"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-[10px]">
              <label htmlFor="email">Email</label>
              <input
                className="w-full p-[10px] rounded-lg"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-[10px]">
              <label htmlFor="pass">Password</label>
              <input
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
