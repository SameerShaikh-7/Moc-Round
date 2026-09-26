import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockData from "../data/mockData.json";

function ApplyLeave() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.leaveType === "" || formData.startDate === "" || formData.endDate === "" || formData.reason === "") {
      alert("Please fill all required fields!");
      return;
    }

    const existingData = localStorage.getItem("leave_requests");
    const currentRequests = existingData ? JSON.parse(existingData) : mockData.leave_requests;

    const newLeave = {
      id: Date.now(),
      employeeName: "Sameer Shaikh",
      leaveType: formData.leaveType,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: "Pending"
    };

    const updatedRequests = [newLeave, ...currentRequests];
    localStorage.setItem("leave_requests", JSON.stringify(updatedRequests));

    alert("Leave Application Submitted Successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Apply Leave</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Leave Type *</label>
          <select 
            name="leaveType" 
            value={formData.leaveType} 
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Leave Type</option>
            <option value="Casual Leave">Casual Leave (CL)</option>
            <option value="Sick Leave">Sick Leave (SL)</option>
            <option value="Earned Leave">Earned Leave (EL)</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Start Date *</label>
            <input 
              type="date" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">End Date *</label>
            <input 
              type="date" 
              name="endDate" 
              value={formData.endDate} 
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Reason *</label>
          <textarea 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange}
            rows="3"
            className="w-full border p-2 rounded"
            placeholder="Type your reason here..."
          ></textarea>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="button" 
            onClick={() => setFormData({leaveType: "", startDate: "", endDate: "", reason: ""})}
            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
          >
            Reset
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Apply Leave
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyLeave;