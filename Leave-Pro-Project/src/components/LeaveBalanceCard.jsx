function LeaveBalance() {
  const balances = [
    { type: "Casual Leave (CL)", total: 7, used: 2, available: 5 },
    { type: "Sick Leave (SL)", total: 5, used: 3, available: 2 },
    { type: "Earned Leave (EL)", total: 12, used: 0, available: 12 },
    { type: "Privilege Leave (PL)", total: 3, used: 3, available: 0 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave Balance</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-3 text-gray-600 font-semibold">Leave Type</th>
              <th className="p-3 text-gray-600 font-semibold">Total Allocated</th>
              <th className="p-3 text-gray-600 font-semibold">Used</th>
              <th className="p-3 text-gray-600 font-semibold">Available</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="p-3 font-medium text-gray-800">{item.type}</td>
                <td className="p-3 text-gray-600">{item.total}</td>
                <td className="p-3 text-gray-600">{item.used}</td>
                <td className="p-3 font-semibold text-blue-600">{item.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveBalance;