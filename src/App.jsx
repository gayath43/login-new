
import React, { useState } from 'react';
import logo from"./assets/logo.png"

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'user' && password === 'password') {
      alert('Logged in!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img className="h-16"src={logo}/>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login In To Beauty World</h2>
        
        
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Username"
              required
            />
          </div>

        
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            New To Beauty World?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
