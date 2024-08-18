import React from 'react'

const SignIn = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div>
                <form>
                    <div>
                        <label htmlFor="email">Enter Your Email : </label>
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <label htmlFor="pass">Enter Your Password : </label>
                        <input type="password" placeholder='Enter Your Password' />
                    </div>
                    <div>
                        <button className=''>SignIn</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn