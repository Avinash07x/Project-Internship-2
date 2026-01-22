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
