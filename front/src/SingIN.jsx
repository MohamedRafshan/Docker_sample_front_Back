import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInRegister = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    //   const [isRegister, setIsRegister] = useState(false);

    //   const handleToggle = () => {
    //     setIsRegister(!isRegister);
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Form submitted');
    //   };
    const HandleSumbit = (e) => {
        e.preventDefault ();
        axios.post('http://localhost:3000/Login', {email, password})
        .then((res) => {
            console.log(res.data);
            if(res.data === 'Success'){
                navigate('/page');
            } else {
                console.log(res.data);
            }
          
        })
        .catch(err =>{
            console.err("there is login error ",err);
        }

        );

    }

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">

                </h2>

                <form onSubmit={HandleSumbit}>

        

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value = {email} 
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <hr className="my-2" />
                <p>have not an account</p>
                <hr className="my-3" />
                

                    <div className="flex justify-center">
                        <Link
                            to="/register"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
                        >
                            Register
                        </Link>
                    </div>


             
            </div>
        </div>
    );
};

export default SignInRegister;
