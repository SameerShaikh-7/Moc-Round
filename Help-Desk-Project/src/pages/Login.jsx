import React, { useState } from 'react';

export default function Login({ setIsLoggedIn }) {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email === "support@company.com" && loginForm.password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid login! Use support@company.com / 123456");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-10 hidden md:flex">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">HelpDesk</h1>
          <p className="text-blue-700">Support Ticket Management System</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Welcome Back</h2>
          <p className="text-sm text-slate-500 mb-6">Login to your account</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
              <input type="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" value={loginForm.email} onChange={e => setLoginForm({...loginForm, email: e.target.value})} placeholder="support@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input type="password" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" value={loginForm.password} onChange={e => setLoginForm({...loginForm, password: e.target.value})} placeholder="123456" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700">Login</button>
          </form>
          
          <div className="mt-6 bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border">
            <p className="font-bold mb-1">Demo Account:</p>
            <p>Email: support@company.com</p>
            <p>Pass: 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}