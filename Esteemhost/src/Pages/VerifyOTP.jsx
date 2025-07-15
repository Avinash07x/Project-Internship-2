// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api';

// export default function VerifyOTP() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { email, purpose } = location.state || {};
  
//   const [otp, setOTP] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isResending, setIsResending] = useState(false);
//   const [countdown, setCountdown] = useState(60);

//   useEffect(() => {
//     if (!email || !purpose) {
//       navigate('/login');
//       return;
//     }

//     const timer = setInterval(() => {
//       setCountdown(prev => prev > 0 ? prev - 1 : 0);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [email, purpose, navigate]);

//   const handleOTPChange = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 6) {
//       setOTP(value);
//       if (errors.otp) {
//         setErrors(prev => ({ ...prev, otp: '' }));
//       }
//     }
//   };

//   const handleVerify = async () => {
//     if (!otp.trim()) {
//       setErrors({ otp: 'OTP is required' });
//       return;
//     }

//     if (otp.length !== 6) {
//       setErrors({ otp: 'OTP must be 6 digits' });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       if (purpose === 'signup') {
//         const response = await axios.post(`${API_BASE_URL}/verify-signup-otp`, { email, otp });
//         if (response.data.success) {
//           localStorage.setItem('token', response.data.token);
//           localStorage.setItem('user', JSON.stringify(response.data.user));
//           navigate('/dashboard');
//         }
//       } else if (purpose === 'password-reset') {
//         const response = await axios.post(`${API_BASE_URL}/verify-reset-otp`, { email, otp });
//         if (response.data.success) {
//           navigate('/reset-password', { 
//             state: { 
//               email: email, 
//               resetToken: response.data.resetToken 
//             } 
//           });
//         }
//       }
//     } catch (error) {
//       setErrors({ 
//         general: error.response?.data?.message || 'OTP verification failed. Please try again.' 
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     setIsResending(true);
//     try {
//       await axios.post(`${API_BASE_URL}/resend-otp`, { email, purpose });
//       setCountdown(60);
//       setOTP('');
//       setErrors({});
//     } catch (error) {
//       setErrors({ 
//         general: error.response?.data?.message || 'Failed to resend OTP. Please try again.' 
//       });
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-100 relative overflow-hidden flex items-center justify-center p-4">
//       {/* Background Animation */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
//       </div>

//       <div className="bg-gradient-to-br rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
//         <div className="bg-blue-350 text-black text-center py-2">
//           <div className="text-xl mb-2">📧</div>
//           <h2 className="text-xl font-semibold">Verify OTP</h2>
//         </div>

//         <div className="p-5">
//           <div className="space-y-6">
//             {errors.general && (
//               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//                 {errors.general}
//               </div>
//             )}

//             <div className="text-center">
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 We've sent a 6-digit verification code to
//               </p>
//               <p className="text-gray-800 font-medium">{email}</p>
//             </div>

//             <div>
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
//                 Enter OTP <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={handleOTPChange}
//                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-center text-lg font-mono tracking-widest ${errors.otp ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder="000000"
//                 maxLength={6}
//               />
//               {errors.otp && <p className="mt-1 text-sm text-red-500">{errors.otp}</p>}
//             </div>

//             <button
//               type="button"
//               onClick={handleVerify}
//               disabled={isLoading || !otp}
//               className={`w-full bg-blue-300 hover:bg-blue-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center ${isLoading || !otp ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {isLoading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                   Verifying...
//                 </>
//               ) : (
//                 'Verify OTP'
//               )}
//             </button>

//             <div className="text-center">
//               {countdown > 0 ? (
//                 <p className="text-sm text-gray-600">
//                   Resend OTP in {countdown} seconds
//                 </p>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={handleResendOTP}
//                   disabled={isResending}
//                   className="text-sm text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                   {isResending ? 'Resending...' : 'Resend OTP'}
//                 </button>
//               )}
//             </div>

//             <div className="text-center">
//               <button
//                 type="button"
//                 onClick={() => navigate('/login')}
//                 className="text-sm text-green-600 hover:text-green-700 font-medium"
//               >
//                 ← Back to Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }