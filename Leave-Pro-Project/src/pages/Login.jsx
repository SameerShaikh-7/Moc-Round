import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    if (email === "manager@test.com") {
      localStorage.setItem("userRole", "manager");
      navigate("/manager-requests");
    } else {
      localStorage.setItem("userRole", "employee");
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-50">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">LeavePro</h1>
          <p className="text-gray-500 font-medium">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
              placeholder="emp@test.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
              placeholder="********"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-600">
          <p className="font-semibold mb-1 text-gray-700">Demo Credentials:</p>
          <div className="flex justify-between border-b pb-1 mb-1">
            <span>Employee:</span>
            <span className="font-medium">emp@test.com</span>
          </div>
          <div className="flex justify-between">
            <span>Manager:</span>
            <span className="font-medium">manager@test.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;