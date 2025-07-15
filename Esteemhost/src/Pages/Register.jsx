// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    phoneNumber: '',
    city: '',
    address: '',
    gstCode: '',
    agreeToTerms: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Validators = {
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phoneNumber: value => /^[6-9]\d{9}$/.test(value),
    password: value => value.length >= 8,
    gstCode: value => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value),
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== 'username') newErrors[key] = 'This field is required.';
    });

    if (formData.email && !Validators.email(formData.email))
      newErrors.email = 'Enter a valid email address.';

    if (formData.phoneNumber && !Validators.phoneNumber(formData.phoneNumber))
      newErrors.phoneNumber = 'Enter a valid 10-digit phone number.';

    if (formData.gstCode && !Validators.gstCode(formData.gstCode))
      newErrors.gstCode = 'Invalid GST Code format.';

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';

    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = 'You must accept the terms.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const res = await axios.post('http://localhost:3001/register', { email: formData.email });
        alert(res.data.message || 'OTP sent to your email!');
        navigate('/verify-email', { state: { email: formData.email, userData: formData } });
        setFormData(initialState);
      } catch (error) {
        alert(error.response?.data?.message || 'Something went wrong.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
      <form
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Create Your Account</h2>

        <div className="grid grid-cols-2 gap-4">
          {['firstName', 'lastName'].map((field, i) => (
            <div key={field}>
              <label className="text-sm font-medium">
                {i === 0 ? 'First Name' : 'Last Name'} *
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
        </div>

        <div>
          <label className="text-sm font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 border rounded ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Username (Optional)</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded border-gray-300"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Company Name *</label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 border rounded ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['phoneNumber', 'city'].map(field => (
            <div key={field}>
              <label className="text-sm font-medium">
                {field === 'phoneNumber' ? 'Phone Number' : 'City'} *
              </label>
              <input
                type="text"
                name={field}
                maxLength={field === 'phoneNumber' ? 10 : undefined}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
        </div>

        <div>
          <label className="text-sm font-medium">Address *</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 border rounded ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">GST Code *</label>
          <input
            name="gstCode"
            value={formData.gstCode}
            onChange={handleChange}
            maxLength={15}
            className={`w-full mt-1 px-4 py-2 border rounded ${
              errors.gstCode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.gstCode && <p className="text-red-500 text-sm">{errors.gstCode}</p>}
        </div>

        {['password', 'confirmPassword'].map(field => (
          <div key={field}>
            <label className="text-sm font-medium">
              {field === 'password' ? 'Password' : 'Confirm Password'} *
            </label>
            <div className="relative">
              <input
                type={
                  field === 'password'
                    ? showPassword ? 'text' : 'password'
                    : showConfirmPassword ? 'text' : 'password'
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() =>
                  field === 'password'
                    ? setShowPassword(p => !p)
                    : setShowConfirmPassword(p => !p)
                }
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm"
              >
                👁️
              </button>
            </div>
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        <div>
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="text-sm text-gray-600">
              I agree to the <span className="text-blue-600 underline">Terms</span> and{' '}
              <span className="text-blue-600 underline">Privacy Policy</span> *
            </span>
          </label>
          {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded text-white font-medium ${
            isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
}



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { registerUser } from '../api/authApi';
// Register() {
// //   const navigate = useNavigate();

// //   const initialState = {
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     username: '',
// //     password: '',
// //     confirmPassword: '',
// //     companyName: '',
// //     phoneNumber: '',
// //     city: '',
// //     address: '',
// //     gstCode: '',
// //     agreeToTerms: false
// //   };

// //   const [registerData, setRegisterData] = useState(initialState);
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const existingUsers = [
// //     { email: 'test@example.com', username: 'testuser' },
// //     { email: 'demo@abc.com', username: 'demodude' }
// //   ];

// //   const Validators = {
// //     email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
// //     password: value => value.length >= 8,
// //     phone: value => /^[6-9]\d{9}$/.test(value),
// //     gst: value => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setRegisterData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value
// //     }));

// //     if (errors[name]) {
// //       setErrors(prev => ({ ...prev, [name]: '' }));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const newErrors = {};

// //     if (!registerData.firstName.trim()) newErrors.firstName = 'First name is required';
// //     if (!registerData.lastName.trim()) newErrors.lastName = 'Last name is required';
// //     if (!registerData.email.trim()) newErrors.email = 'Email is required';
// //     else if (!Validators.email(registerData.email)) newErrors.email = 'Please enter a valid email address';
// //     else if (existingUsers.some(user => user.email === registerData.email)) newErrors.email = 'Email already registered';

// //     if (!registerData.username.trim()) newErrors.username = 'Username is required';
// //     else if (registerData.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
// //     else if (existingUsers.some(user => user.username === registerData.username)) newErrors.username = 'Username already taken';

// //     if (!registerData.password) newErrors.password = 'Password is required';
// //     else if (!Validators.password(registerData.password)) newErrors.password = 'Password must be at least 8 characters';

// //     if (!registerData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
// //     else if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

// //     if (!registerData.companyName.trim()) newErrors.companyName = 'Company name is required';

// //     if (!registerData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
// //     else if (!Validators.phone(registerData.phoneNumber)) newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';

// //     if (!registerData.city.trim()) newErrors.city = 'City is required';
// //     else if (registerData.city.length < 2) newErrors.city = 'Please enter a valid city name';

// //     if (!registerData.address.trim()) newErrors.address = 'Address is required';
// //     else if (registerData.address.length < 10) newErrors.address = 'Please enter a complete address';

// //     if (!registerData.gstCode.trim()) newErrors.gstCode = 'GST code is required';
// //     else if (!Validators.gst(registerData.gstCode)) newErrors.gstCode = 'Please enter a valid GST code (e.g., 22AAAAA0000A1Z5)';

// //     if (!registerData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

// //     setErrors(newErrors);

// //     if (Object.keys(newErrors).length === 0) {
// //       setIsSubmitting(true);
// //       try {
// //         const response = await registerUser(registerData);
// //         alert(response.message || 'Registration successful!');
// //         setRegisterData(initialState);
// //         navigate('/login');
// //       } catch (error) {
// //         const message = error.response?.data?.message || 'Registration failed';
// //         alert(message);
// //       } finally {
// //         setIsSubmitting(false);
// //       }
// //     }
// //   };
// // export default function 


// //   return (
// //     <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
// //       <div className="rounded-xl shadow-xl w-full max-w-2xl">
// //         <div className="bg-blue-200 text-black text-center py-4">
// //           <div className="text-2xl mb-2">👤</div>
// //           <h2 className="text-xl font-semibold">Create Account</h2>
// //         </div>

// //         <div className="p-6 max-h-full overflow-y-auto">
// //           <div className="space-y-6">
// //             {/* First Name & Last Name */}
// //             <div className="grid grid-cols-2 gap-4">
// //               {['firstName', 'lastName'].map((field, i) => (
// //                 <div key={field}>
// //                   <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
// //                     {i === 0 ? 'First Name' : 'Last Name'} <span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id={field}
// //                     name={field}
// //                     value={registerData[field]}
// //                     onChange={handleInputChange}
// //                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                     placeholder={i === 0 ? 'First name' : 'Last name'}
// //                   />
// //                   {errors[field] && <p className="text-sm text-red-500 mt-1">{errors[field]}</p>}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email Address <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={registerData.email}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                 placeholder="Enter your email address"
// //               />
// //               {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
// //             </div>

// //             {/* Company */}
// //             <div>
// //               <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Company Name <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 id="companyName"
// //                 name="companyName"
// //                 value={registerData.companyName}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                 placeholder="Enter your company name"
// //               />
// //               {errors.companyName && <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>}
// //             </div>

// //             {/* Phone + City */}
// //             <div className="grid grid-cols-2 gap-4">
// //               {[
// //                 { id: 'phoneNumber', label: 'Phone Number', type: 'tel', placeholder: '10-digit number' },
// //                 { id: 'city', label: 'City', type: 'text', placeholder: 'Your city' }
// //               ].map(({ id, label, type, placeholder }) => (
// //                 <div key={id}>
// //                   <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
// //                     {label} <span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type={type}
// //                     id={id}
// //                     name={id}
// //                     value={registerData[id]}
// //                     onChange={handleInputChange}
// //                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors[id] ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                     placeholder={placeholder}
// //                     maxLength={id === 'phoneNumber' ? 10 : undefined}
// //                   />
// //                   {errors[id] && <p className="text-sm text-red-500 mt-1">{errors[id]}</p>}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Address */}
// //             <div>
// //               <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Address <span className="text-red-500">*</span>
// //               </label>
// //               <textarea
// //                 id="address"
// //                 name="address"
// //                 rows={3}
// //                 value={registerData.address}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                 placeholder="Your complete address"
// //               />
// //               {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
// //             </div>

// //             {/* GST Code */}
// //             <div>
// //               <label htmlFor="gstCode" className="block text-sm font-medium text-gray-700 mb-2">
// //                 GST Code <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 id="gstCode"
// //                 name="gstCode"
// //                 value={registerData.gstCode}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.gstCode ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                 placeholder="22AAAAA0000A1Z5"
// //                 maxLength={15}
// //               />
// //               {errors.gstCode && <p className="text-sm text-red-500 mt-1">{errors.gstCode}</p>}
// //             </div>

// //             {/* Passwords */}
// //             {[
// //               { name: 'password', label: 'Password', toggle: showPassword, setToggle: setShowPassword },
// //               { name: 'confirmPassword', label: 'Confirm Password', toggle: showConfirmPassword, setToggle: setShowConfirmPassword }
// //             ].map(({ name, label, toggle, setToggle }) => (
// //               <div key={name}>
// //                 <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
// //                   {label} <span className="text-red-500">*</span>
// //                 </label>
// //                 <div className="relative">
// //                   <input
// //                     type={toggle ? 'text' : 'password'}
// //                     id={name}
// //                     name={name}
// //                     value={registerData[name]}
// //                     onChange={handleInputChange}
// //                     className={`w-full px-4 py-3 border rounded-lg pr-12 focus:ring-2 ${errors[name] ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                     placeholder={label}
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setToggle(prev => !prev)}
// //                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //                   >
// //                     {toggle ? '👁️' : '👁️‍🗨️'}
// //                   </button>
// //                 </div>
// //                 {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
// //               </div>
// //             ))}

// //             {/* Terms */}
// //             <div>
// //               <label className="flex items-start">
// //                 <input
// //                   type="checkbox"
// //                   name="agreeToTerms"
// //                   checked={registerData.agreeToTerms}
// //                   onChange={handleInputChange}
// //                   className={`w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${errors.agreeToTerms ? 'border-red-500' : ''}`}
// //                 />
// //                 <span className="ml-2 text-sm text-gray-600">
// //                   I agree to the{' '}
// //                   <button type="button" className="text-blue-600 hover:text-blue-700 underline">Terms of Service</button>{' '}
// //                   and{' '}
// //                   <button type="button" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</button>
// //                   <span className="text-red-500"> *</span>
// //                 </span>
// //               </label>
// //               {errors.agreeToTerms && <p className="text-sm text-red-500 mt-1">{errors.agreeToTerms}</p>}
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="button"
// //               onClick={handleSubmit}
// //               disabled={isSubmitting}
// //               className={`w-full bg-blue-300 hover:bg-blue-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
// //             >
// //               {isSubmitting ? 'Submitting...' : 'CREATE ACCOUNT'}
// //             </button>

// //             <div className="text-center">
// //               <span className="text-sm text-gray-600">
// //                 Already have an account?{' '}
// //                 <button type="button" className="text-green-400 hover:text-green-700 font-medium">
// //                   Log in
// //                 </button>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const navigate = useNavigate();

// //   const [registerData, setRegisterData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     username: '',
// //     password: '',
// //     confirmPassword: '',
// //     agreeToTerms: false
// //   });

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [errors, setErrors] = useState({});

// //   // Dummy existing users (can be replaced with API or localStorage)
// //   const existingUsers = [
// //     { email: 'test@example.com', username: 'testuser' },
// //     { email: 'demo@abc.com', username: 'demodude' }
// //   ];

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setRegisterData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value
// //     }));
// //     if (errors[name]) {
// //       setErrors(prev => ({ ...prev, [name]: '' }));
// //     }
// //   };

// //   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// //   const validatePassword = (password) => password.length >= 8;

// //   const handleSubmit = () => {
// //     const newErrors = {};
// //     if (!registerData.firstName.trim()) newErrors.firstName = 'First name is required';
// //     if (!registerData.lastName.trim()) newErrors.lastName = 'Last name is required';

// //     if (!registerData.email.trim()) newErrors.email = 'Email is required';
// //     else if (!validateEmail(registerData.email)) newErrors.email = 'Please enter a valid email address';
// //     else if (existingUsers.some(user => user.email === registerData.email)) newErrors.email = 'Email already registered';

// //     if (!registerData.username.trim()) newErrors.username = 'Username is required';
// //     else if (registerData.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
// //     else if (existingUsers.some(user => user.username === registerData.username)) newErrors.username = 'Username already taken';

// //     if (!registerData.password) newErrors.password = 'Password is required';
// //     else if (!validatePassword(registerData.password)) newErrors.password = 'Password must be at least 8 characters';

// //     if (!registerData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
// //     else if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

// //     if (!registerData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

// //     setErrors(newErrors);

// //     if (Object.keys(newErrors).length === 0) {
// //       alert('Registration successful! Redirecting to login page...');
// //       console.log('Registration attempt:', registerData);
// //       setTimeout(() => {
// //         navigate('/login');
// //       }, 1000);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-blue-100 relative overflow-hidden flex items-center justify-center p-4">
// //       <div className="absolute inset-0 overflow-hidden">
// //         <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
// //         <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
// //       </div>

// //       <div className="from-white to-blue-50 rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
// //         <div className="bg-blue-350 text-black text-center py-2">
// //           <div className="text-xl mb-2">👤</div>
// //           <h2 className="text-xl font-semibold">Create Account</h2>
// //         </div>

// //         <div className="p-5">
// //           <div className="space-y-6">
// //             <div className="grid grid-cols-2 gap-4">
// //               <div>
// //                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
// //                   First Name <span className="text-red-500">*</span>
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="firstName"
// //                   name="firstName"
// //                   value={registerData.firstName}
// //                   onChange={handleInputChange}
// //                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                   placeholder="First name"
// //                 />
// //                 {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
// //               </div>
// //               <div>
// //                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
// //                   Last Name <span className="text-red-500">*</span>
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="lastName"
// //                   name="lastName"
// //                   value={registerData.lastName}
// //                   onChange={handleInputChange}
// //                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                   placeholder="Last name"
// //                 />
// //                 {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email Address <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={registerData.email}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                 placeholder="Enter your email address"
// //               />
// //               {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
// //             </div>

// //             <div>
// //               <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Username <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 id="username"
// //                 name="username"
// //                 value={registerData.username}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
// //                 placeholder="Choose a username"
// //               />
// //               {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
// //             </div>

// //             <div>
// //               <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Password <span className="text-red-500">*</span>
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? "text" : "password"}
// //                   id="registerPassword"
// //                   name="password"
// //                   value={registerData.password}
// //                   onChange={handleInputChange}
// //                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} pr-12 focus:ring-blue-500`}
// //                   placeholder="Create a password (min 8 characters)"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //                 >
// //                   {showPassword ? '👁️' : '👁️‍🗨️'}
// //                 </button>
// //               </div>
// //               {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
// //             </div>

// //             <div>
// //               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Confirm Password <span className="text-red-500">*</span>
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   type={showConfirmPassword ? "text" : "password"}
// //                   id="confirmPassword"
// //                   name="confirmPassword"
// //                   value={registerData.confirmPassword}
// //                   onChange={handleInputChange}
// //                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} pr-12 focus:ring-blue-500`}
// //                   placeholder="Confirm your password"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
// //                 >
// //                   {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
// //                 </button>
// //               </div>
// //               {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
// //             </div>

// //             <div>
// //               <label className="flex items-start">
// //                 <input
// //                   type="checkbox"
// //                   name="agreeToTerms"
// //                   checked={registerData.agreeToTerms}
// //                   onChange={handleInputChange}
// //                   className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 ${errors.agreeToTerms ? 'border-red-500' : ''}`}
// //                 />
// //                 <span className="ml-2 text-sm text-gray-600">
// //                   I agree to the{' '}
// //                   <button type="button" className="text-blue-600 hover:text-blue-700 underline">Terms of Service</button>{' '}
// //                   and{' '}
// //                   <button type="button" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</button>{' '}
// //                   <span className="text-red-500">*</span>
// //                 </span>
// //               </label>
// //               {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
// //             </div>

// //             <button
// //               type="button"
// //               onClick={handleSubmit}
// //               className="w-full bg-blue-300 hover:bg-blue-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //             >
// //               CREATE ACCOUNT
// //             </button>

// //             <div className="text-center">
// //               <span className="text-sm text-gray-600">
// //                 Already have an account?{' '}
// //                 <Link to="/login">
// //                   <button type="button" className="text-green-400 hover:text-green-700 font-medium">
// //                     Log in
// //                   </button>
// //                 </Link>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
