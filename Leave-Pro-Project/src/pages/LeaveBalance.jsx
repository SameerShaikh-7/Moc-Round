function LeaveBalance() {
  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-6">Leave Balance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded shadow border-l-4 border-blue-500">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Casual Leave (CL)</h3>
            <span className="text-blue-500 font-bold">5 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">2 days used</p>
        </div>

        <div className="bg-white p-5 rounded shadow border-l-4 border-red-500">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Sick Leave (SL)</h3>
            <span className="text-red-500 font-bold">2 / 5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">3 days used</p>
        </div>

        <div className="bg-white p-5 rounded shadow border-l-4 border-green-500">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Earned Leave (EL)</h3>
            <span className="text-green-500 font-bold">12 / 12</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">0 days used</p>
        </div>

        <div className="bg-white p-5 rounded shadow border-l-4 border-purple-500">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Privilege Leave (PL)</h3>
            <span className="text-purple-500 font-bold">0 / 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">3 days used</p>
        </div>
      </div>
    </div>
  );
}

export default LeaveBalance;