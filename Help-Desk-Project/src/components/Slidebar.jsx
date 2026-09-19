import React from 'react';

export default function Sidebar({ page, setPage, setIsLoggedIn }) {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">🎧 HelpDesk</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <button onClick={() => setPage("dashboard")} className={`w-full text-left px-4 py-2.5 rounded-lg ${page === "dashboard" ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}>Dashboard</button>
        <button onClick={() => setPage("list")} className={`w-full text-left px-4 py-2.5 rounded-lg ${page === "list" ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}>Tickets</button>
        <button onClick={() => setPage("create")} className={`w-full text-left px-4 py-2.5 rounded-lg ${page === "create" ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}>Create Ticket</button>
      </nav>
      <div className="p-4 border-t border-slate-700">
        <p className="text-sm font-medium text-white mb-2">Support Staff</p>
        <button onClick={() => setIsLoggedIn(false)} className="text-xs text-red-400 hover:text-red-300">Logout</button>
      </div>
    </aside>
  );
}