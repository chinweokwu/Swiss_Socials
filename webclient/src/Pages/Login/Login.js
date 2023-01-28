import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <div className='auth_card'>
        <div className='auth-left'>
          <h1>Swiss Socials.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, quod. Lorem ipsum dolor sit
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className='auth-right'>
            <h1>Login</h1>
            <form>
              <input type='text' placeholder='username'/>
              <input type='password' placeholder='password'/>
              <button>Login</button>
            </form>

        </div>
      </div>
    </div>
  )
}

export default Login