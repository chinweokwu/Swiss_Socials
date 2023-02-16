import React, {useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.scss';
import { AuthContext } from '../../useContext/AuthContext';

const Login = () => {
	const {login} = useContext(AuthContext);
	const navigate = useNavigate()
    const [val, setValue] = useState({
        username: "",        
        password: ""
      });
      const [error, setError] = useState(null);
    
    
      const handleChange = e => {
        setValue(prev => ({...prev, [e.target.name]: e.target.value}))
      }
    
    const handleLogin = async (e) => {
			e.preventDefault()
			try {
				await login(val)
				navigate("/")
			} catch (error) {
				setError(error.response.data)
			}
    };

return (
    <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3">
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 bg-img">
                    <div>
                        <h2 className="text-4xl font-bold text-white">Swiss Socials</h2>
                        
                        <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700">Brand</h2>
                        
                        <p className="mt-3 text-gray-500">Welcome Back</p>
                    </div>

                    <div className="mt-8">
                        <form>
                            <div>
                                <label  htmlFor="uname" className="block mb-2 text-sm text-gray-600">UserName</label>
                                <input 
																	onChange={handleChange}
																	type="username" 
																	name="username" 
																	id="uname" 
																	placeholder="example@example.com" 
																	className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label  htmlFor="password" className="text-sm text-gray-600">Password</label>
                                    <Link to="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</Link>
                                </div>

                                <input
																	onChange={handleChange}
																	type="password" 
																	name="password" 
																	id="password" 
																	placeholder="Your Password" 
																	className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
															{error && error}
                            <div className="mt-6">
                                <button
                                    onClick={handleLogin}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to="/register" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login