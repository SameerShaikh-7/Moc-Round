import { useState, useEffect } from "react";
import mockData from "../data/mockData.json";

function LeaveRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests = localStorage.getItem("leave_requests");
    if (savedRequests) {
      setRequests(JSON.parse(savedRequests));
    } else {
      setRequests(mockData.leave_requests);
    }
  }, []);

  const handleAction = (id, newStatus) => {
    const updatedRequests = requests.map((req) => {
      if (req.id === id) {
        return { ...req, status: newStatus };
      }
      return req;
    });
    setRequests(updatedRequests);
    localStorage.setItem("leave_requests", JSON.stringify(updatedRequests));
  };

  const total = requests.length;
  const pending = requests.filter(r => r.status === 'Pending').length;
  const approved = requests.filter(r => r.status === 'Approved').length;
  const rejected = requests.filter(r => r.status === 'Rejected').length;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Manager Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow border-t-4 border-blue-500">
          <h3 className="text-gray-500">Total Requests</h3>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-yellow-500">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-3xl font-bold">{pending}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-green-500">
          <h3 className="text-gray-500">Approved</h3>
          <p className="text-3xl font-bold">{approved}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-red-500">
          <h3 className="text-gray-500">Rejected</h3>
          <p className="text-3xl font-bold">{rejected}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Employee Leave Requests</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-3 text-gray-600 font-semibold">Employee</th>
                <th className="p-3 text-gray-600 font-semibold">Leave Type</th>
                <th className="p-3 text-gray-600 font-semibold">Date Range</th>
                <th className="p-3 text-gray-600 font-semibold">Status</th>
                <th className="p-3 text-gray-600 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((leave) => (
                <tr key={leave.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="p-3 font-medium text-gray-800">{leave.employeeName}</td>
                  <td className="p-3 text-gray-600">{leave.leaveType}</td>
                  <td className="p-3 text-sm text-gray-500">
                    {leave.startDate} to {leave.endDate}
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      leave.status === 'Approved' ? 'bg-green-100 text-green-700 border border-green-200' : 
                      leave.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' : 
                      'bg-yellow-100 text-yellow-700 border border-yellow-200'
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {leave.status === 'Pending' ? (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAction(leave.id, 'Approved')}
                          className="bg-green-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-green-600 transition shadow-sm"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleAction(leave.id, 'Rejected')}
                          className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-600 transition shadow-sm"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm font-medium">Processed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LeaveRequests;