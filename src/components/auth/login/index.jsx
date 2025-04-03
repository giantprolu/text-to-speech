import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const userLoggedIn = localStorage.getItem('user') !== null;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/');
            } else {
                setErrorMessage('Invalid email or password');
            }
            setIsSigningIn(false);
        }
    };

    return (
        <div>
            {userLoggedIn && <Navigate to={'/'} replace={true} />}
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-600 font-bold">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-bold">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>
                        {errorMessage && <span className="text-red-600 font-bold">{errorMessage}</span>}
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="text-center text-sm">
                        Don't have an account?{' '}
                        <Link to={'/register'} className="hover:underline font-bold">Sign Up</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;