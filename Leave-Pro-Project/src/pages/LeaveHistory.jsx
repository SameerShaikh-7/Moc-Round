import { useState, useEffect } from "react";
import mockData from "../data/mockData.json";

function LeaveHistory() {
  const [history, setHistory] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const savedRequests = localStorage.getItem("leave_requests");
    const allLeaves = savedRequests ? JSON.parse(savedRequests) : mockData.leave_requests;
    
    const myLeaves = allLeaves.filter(
      (leave) => leave.employeeName === "Sameer Shaikh"
    );
    setHistory(myLeaves);
  }, []);

  const filteredHistory = filterStatus === "All" 
    ? history 
    : history.filter((leave) => leave.status === filterStatus);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Leave History</h2>
        
        <div className="flex items-center gap-2">
          <label className="text-gray-600 text-sm font-medium">Filter by Status:</label>
          <select 
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-3 text-gray-600 font-semibold">Leave Type</th>
              <th className="p-3 text-gray-600 font-semibold">Start Date</th>
              <th className="p-3 text-gray-600 font-semibold">End Date</th>
              <th className="p-3 text-gray-600 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((leave) => (
                <tr key={leave.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="p-3 font-medium text-gray-800">{leave.leaveType}</td>
                  <td className="p-3 text-gray-600">{leave.startDate}</td>
                  <td className="p-3 text-gray-600">{leave.endDate}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      leave.status === 'Approved' ? 'bg-green-100 text-green-700 border border-green-200' : 
                      leave.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' : 
                      'bg-yellow-100 text-yellow-700 border border-yellow-200'
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-8 text-center text-gray-500 bg-gray-50 rounded-b-lg">
                  No leaves found for the selected status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveHistory;