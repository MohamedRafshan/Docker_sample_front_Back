import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    //   const [isRegister, setIsRegister] = useState(false);

    //   const handleToggle = () => {
    //     setIsRegister(!isRegister);
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Form submitted');
    //   };

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', {name, email, password})
        .then((res) => {
            console.log(res.data);
   
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
    })
    
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">

                </h2>

                <form onSubmit={HandleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            placeholder='Enter your name'
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setname(e.target.value)}

                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            placeholder='Enter your email'
                            type="email"
                            id="email"
                            name="email"
                            value={email}
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
                            placeholder='Enter your password'
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
                           Register
                        </button>
                    </div>
                </form>
                <hr className="my-2" />
                <p>Already have an account</p>
                <hr className="my-3" />
                

                    <div className="flex justify-center">
                        <Link
                            to="/"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
                        >
                            Login
                        </Link>
                    </div>


             
            </div>
        </div>
    );
};

export default Register;
