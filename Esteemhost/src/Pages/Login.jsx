// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [loginData, setLoginData] = useState({ login: '', password: '', rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!loginData.login.trim()) newErrors.login = 'Login is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post("http://localhost:3001/login", loginData);
        alert(res.data.message);
        navigate('/');
      } catch (err) {
        alert(err.response?.data?.message || 'Login failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">🔐 Login</h2>
        <input name="login" value={loginData.login} onChange={handleInputChange}
          placeholder="Email or Username" className="input w-full mb-2" />
        {errors.login && <p className="text-sm text-red-500">{errors.login}</p>}

        <div className="relative mb-4">
          <input name="password" type={showPassword ? 'text' : 'password'} value={loginData.password}
            onChange={handleInputChange} placeholder="Password" className="input w-full" />
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2">👁️</button>
        </div>
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        <p className="text-center mt-2 text-sm">
          Don't have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
