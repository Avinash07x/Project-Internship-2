import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CreditCard,
  Lock,
  CheckCircle,
  AlertCircle,
  Apple,
  Smartphone,
} from 'lucide-react';

const Paypage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.selectedPlan;
  const billingCycle = location.state?.billingCycle || 'monthly';

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <div>
          <h2 className="text-xl font-semibold">No plan selected</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to Plans
          </button>
        </div>
      </div>
    );
  }

  const orderTotal = parseFloat(selectedPlan.price[billingCycle].replace('$', ''));
  const tax = parseFloat((orderTotal * 0.08).toFixed(2));
  const shipping = 0;
  const subtotal = parseFloat((orderTotal - tax).toFixed(2));

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{1,2})/, '$1/$2');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      setFormData((prev) => ({ ...prev, [name]: formatCardNumber(value) }));
    } else if (name === 'expiryDate') {
      setFormData((prev) => ({ ...prev, [name]: formatExpiryDate(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (paymentMethod === 'card') {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 13)
        newErrors.cardNumber = 'Invalid card number';
      if (!formData.expiryDate || formData.expiryDate.length < 5)
        newErrors.expiryDate = 'Invalid expiry date';
      if (!formData.cvv || formData.cvv.length < 3)
        newErrors.cvv = 'Invalid CVV';
      if (!formData.cardHolder.trim())
        newErrors.cardHolder = 'Cardholder name required';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 3000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your order has been processed successfully.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Transaction ID</p>
            <p className="font-mono text-sm font-medium">
              #TXN-{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">Choose your preferred payment method</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Secure encrypted payment</span>
            </div>

            {/* Payment Method Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {['card', 'apple', 'google'].map((method) => {
                const Icon =
                  method === 'card'
                    ? CreditCard
                    : method === 'apple'
                    ? Apple
                    : Smartphone;
                return (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === method
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-sm font-medium capitalize">
                      {method} Pay
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Conditional Forms */}
            {paymentMethod === 'card' && (
              <div className="space-y-4 mb-4">
                {[
                  {
                    name: 'cardNumber',
                    label: 'Card Number',
                    placeholder: '1234 5678 9012 3456',
                    maxLength: 19,
                  },
                  {
                    name: 'expiryDate',
                    label: 'Expiry Date',
                    placeholder: 'MM/YY',
                    maxLength: 5,
                  },
                  {
                    name: 'cvv',
                    label: 'CVV',
                    placeholder: '123',
                    maxLength: 4,
                  },
                  {
                    name: 'cardHolder',
                    label: 'Cardholder Name',
                    placeholder: 'John Doe',
                  },
                ].map(({ name, label, placeholder, maxLength }) => (
                  <div key={name}>
                    <label className="text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleInputChange}
                      placeholder={placeholder}
                      maxLength={maxLength}
                      className={`w-full mt-1 px-4 py-3 rounded-lg border-2 transition ${
                        errors[name]
                          ? 'border-red-400 bg-red-50'
                          : 'border-gray-200 focus:border-blue-500'
                      } focus:outline-none`}
                    />
                    {errors[name] && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors[name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {(paymentMethod === 'apple' || paymentMethod === 'google') && (
              <div className="text-center py-6">
                <p className="text-gray-600 mb-4">
                  Use your{' '}
                  {paymentMethod === 'apple'
                    ? 'Face ID / Touch ID'
                    : 'Google Pay app'}{' '}
                  to complete payment.
                </p>
                <button
                  className={`px-8 py-3 rounded-lg font-medium transition text-white ${
                    paymentMethod === 'apple'
                      ? 'bg-black hover:bg-gray-800'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Pay with{' '}
                  {paymentMethod === 'apple' ? 'Apple' : 'Google'} Pay
                </button>
              </div>
            )}

            {/* Email Field */}
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className={`w-full mt-1 px-4 py-3 rounded-lg border-2 transition ${
                  errors.email
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 focus:border-blue-500'
                } focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Pay Button */}
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className={`mt-6 w-full py-4 rounded-lg font-semibold transition-all ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}
            >
              {isProcessing ? 'Processing...' : `Pay $${orderTotal.toFixed(2)}`}
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Order Summary
            </h3>
            <div className="space-y-3 text-sm text-gray-700 mb-6">
              <div className="flex justify-between">
                <span>
                  {selectedPlan.name} ({billingCycle})
                </span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg text-green-700 flex items-start gap-2 text-sm">
              <CheckCircle className="w-5 h-5 mt-1" />
              <div>
                <p className="font-medium">30-day money-back guarantee</p>
                <p>If you're not satisfied, get a full refund within 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paypage;
