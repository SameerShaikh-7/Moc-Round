import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ApplyLeave from "./pages/ApplyLeave";
import Login from "./pages/Login";
import LeaveRequests from "./pages/LeaveRequests";
import LeaveHistory from "./pages/LeaveHistory";
import LeaveBalance from "./pages/LeaveBalance";

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white p-4 shadow-sm flex justify-between items-center z-10 relative">
          <h2 className="text-xl font-bold text-gray-800">LeavePro</h2>
          <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            Sameer Shaikh
          </div>
        </header>
        
        <div className="p-6 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<EmployeeDashboard />} />
            <Route path="/apply-leave" element={<ApplyLeave />} />
            <Route path="/manager-requests" element={<LeaveRequests />} />
            <Route path="/history" element={<LeaveHistory />} />
            <Route path="/balance" element={<LeaveBalance />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;