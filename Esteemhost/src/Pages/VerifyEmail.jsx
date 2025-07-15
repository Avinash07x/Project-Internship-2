// src/pages/VerifyEmail.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function VerifyEmail() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleVerify = async () => {
    try {
      const res = await axios.post('http://localhost:3001/verify-otp', { email, otp });
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center">Verify Your Email</h2>
        <p className="text-center text-gray-600 mb-3">OTP sent to: {email}</p>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP" className="input w-full mb-2" />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button onClick={handleVerify} className="w-full bg-blue-500 text-white py-2 rounded">
          Verify OTP
        </button>
      </div>
    </div>
  );
}
