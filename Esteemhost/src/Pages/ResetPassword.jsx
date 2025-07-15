// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { resetPassword } from '../api/authApi';

// export default function ResetPassword() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { email, otp } = location.state || {};

//   const [passwords, setPasswords] = useState({
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!email || !otp) {
//       navigate('/login');
//     }
//   }, [email, otp, navigate]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPasswords((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async () => {
//     const newErrors = {};

//     if (!passwords.newPassword) {
//       newErrors.newPassword = 'New password is required';
//     } else if (passwords.newPassword.length < 8) {
//       newErrors.newPassword = 'Password must be at least 8 characters';
//     }

//     if (!passwords.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (passwords.newPassword !== passwords.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsLoading(true);
//       try {
//         const res = await resetPassword({
//           email,
//           otp,
//           newPassword: passwords.newPassword
//         });

//         alert(res.message);
//         navigate('/login');
//       } catch (err) {
//         setErrors({
//           general: err.message || 'Reset failed'
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4 relative">
//       <div className="bg-gradient-to-br rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
//         <div className="bg-blue-350 text-black text-center py-2">
//           <div className="text-xl mb-2">🔐</div>
//           <h2 className="text-xl font-semibold">Reset Password</h2>
//         </div>

//         <div className="p-5 space-y-6">
//           {errors.general && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//               {errors.general}
//             </div>
//           )}

//           <div className="text-center text-sm text-gray-600">
//             Reset password for <span className="text-black font-semibold">{email}</span>
//           </div>

//           {/* New Password */}
//           <div>
//             <label className="block text-sm font-medium mb-2">New Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="newPassword"
//                 value={passwords.newPassword}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 border rounded-lg pr-12 focus:ring-2 ${
//                   errors.newPassword ? 'border-red-500' : 'border-gray-300'
//                 }`}
//                 placeholder="Enter new password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//               >
//                 {showPassword ? '👁️' : '👁️‍🗨️'}
//               </button>
//             </div>
//             {errors.newPassword && <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Confirm Password</label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 value={passwords.confirmPassword}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 border rounded-lg pr-12 focus:ring-2 ${
//                   errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
//                 }`}
//                 placeholder="Confirm password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//               >
//                 {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
//               </button>
//             </div>
//             {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
//           </div>

//           {/* Submit */}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={isLoading}
//             className={`w-full bg-blue-300 hover:bg-blue-500 text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center ${
//               isLoading ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//           >
//             {isLoading ? (
//               <>
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                 Resetting...
//               </>
//             ) : (
//               'Reset Password'
//             )}
//           </button>

//           <div className="text-center">
//             <button
//               type="button"
//               onClick={() => navigate('/login')}
//               className="text-sm text-green-600 hover:text-green-700 font-medium"
//             >
//               ← Back to Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
