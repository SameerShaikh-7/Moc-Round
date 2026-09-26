import { useState, useEffect } from "react";
import mockData from "../data/mockData.json";

function EmployeeDashboard() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const savedRequests = localStorage.getItem("leave_requests");
    if (savedRequests) {
      setLeaves(JSON.parse(savedRequests));
    } else {
      setLeaves(mockData.leave_requests);
    }
  }, []);

  const totalLeaves = 12;
  const usedLeaves = 5;
  const remainingLeaves = totalLeaves - usedLeaves;
  const pendingRequests = leaves.filter(l => l.status === 'Pending').length;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow border-t-4 border-blue-500">
          <h3 className="text-gray-500">Total Leaves</h3>
          <p className="text-3xl font-bold">{totalLeaves}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-green-500">
          <h3 className="text-gray-500">Used Leaves</h3>
          <p className="text-3xl font-bold">{usedLeaves}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-purple-500">
          <h3 className="text-gray-500">Remaining Leaves</h3>
          <p className="text-3xl font-bold">{remainingLeaves}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-t-4 border-yellow-500">
          <h3 className="text-gray-500">Pending Requests</h3>
          <p className="text-3xl font-bold">{pendingRequests}</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Recent Leave Requests</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">Leave Type</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-b">
                <td className="p-3">{leave.leaveType}</td>
                <td className="p-3">{leave.startDate}</td>
                <td className="p-3">{leave.endDate}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm ${
                    leave.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                    leave.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeDashboard;