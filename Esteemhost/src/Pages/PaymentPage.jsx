import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
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
  const subtotal = parseFloat((orderTotal - tax).toFixed(2));

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
        <p className="mb-2">Plan: {selectedPlan.name} ({billingCycle})</p>
        <p className="mb-2">Subtotal: ${subtotal.toFixed(2)}</p>
        <p className="mb-2">Tax: ${tax.toFixed(2)}</p>
        <p className="mb-4 font-semibold text-lg">Total: ${orderTotal.toFixed(2)}</p>
        <button
          onClick={() =>
            navigate('/pay', {
              state: {
                selectedPlan,
                billingCycle,
              },
            })
          }
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700"
        >
          Pay ${orderTotal.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
