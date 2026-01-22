import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();

  const { email, userData } = location.state || {};
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    try {
      const res = await axios.post("http://localhost:3001/verify-email", {
        email,
        otp,
        userData,
      });

      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
        <h2 className="text-xl font-bold text-center text-blue-600">
          Verify Email
        </h2>
        <p className="text-center text-gray-600">
          Enter the OTP sent to <strong>{email}</strong>
        </p>
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-2 border rounded border-gray-300"
        />
        <button
          onClick={handleVerify}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
