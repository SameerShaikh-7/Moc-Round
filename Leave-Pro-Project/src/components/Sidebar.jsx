import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const userRole = localStorage.getItem("userRole");

  const isActive = (path) => {
    return location.pathname === path 
      ? "bg-blue-800 border-l-4 border-white font-semibold" 
      : "hover:bg-blue-800 text-gray-300"; 
  };

  return (
    <div className="w-64 bg-blue-900 text-white h-full flex flex-col shadow-lg shadow-blue-900/20">
      <div className="p-6 text-2xl font-bold border-b border-blue-800 flex items-center gap-2">
        <span>📅</span> LeavePro
      </div>
      
      <nav className="flex-1 p-4 space-y-3 mt-2">
        {userRole === "manager" ? (
          <Link to="/manager-requests" className={`block p-3 rounded transition-all duration-200 ${isActive("/manager-requests")}`}>
            Manager Dashboard
          </Link>
        ) : (
          <>
            <Link to="/dashboard" className={`block p-3 rounded transition-all duration-200 ${isActive("/dashboard")}`}>
              Dashboard
            </Link>
            <Link to="/apply-leave" className={`block p-3 rounded transition-all duration-200 ${isActive("/apply-leave")}`}>
              Apply Leave
            </Link>
            <Link to="/history" className={`block p-3 rounded transition-all duration-200 ${isActive("/history")}`}>
              Leave History
            </Link>
            <Link to="/balance" className={`block p-3 rounded transition-all duration-200 ${isActive("/balance")}`}>
              Leave Balance
            </Link>
          </>
        )}
      </nav>

      <div className="p-4 border-t border-blue-800">
        <Link 
          to="/" 
          onClick={() => localStorage.removeItem("userRole")}
          className="block w-full text-left p-3 hover:bg-red-500 hover:text-white rounded transition text-red-300"
        >
        Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;