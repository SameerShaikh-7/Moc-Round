import React from 'react';
import { getUserName, getStatusColor } from '../utils/ticketUtils';

export default function Dashboard({ tickets }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-xl border shadow-sm">
          <p className="text-slate-500 text-sm">Total Tickets</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{tickets.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm border-blue-200">
          <p className="text-slate-500 text-sm">Open</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{tickets.filter(t => t.status === "Open").length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm border-yellow-200">
          <p className="text-slate-500 text-sm">In Progress</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">{tickets.filter(t => t.status === "In Progress").length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm border-green-200">
          <p className="text-slate-500 text-sm">Resolved</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{tickets.filter(t => t.status === "Resolved").length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border shadow-sm border-gray-200">
          <p className="text-slate-500 text-sm">Closed</p>
          <p className="text-2xl font-bold text-gray-600 mt-1">{tickets.filter(t => t.status === "Closed").length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-5">
        <h3 className="font-bold text-slate-800 mb-4">Recent Tickets</h3>
        <div className="divide-y">
          {tickets.slice(0, 5).map(t => (
            <div key={t.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-slate-800">{t.ticket_id} - {t.subject}</p>
                <p className="text-xs text-slate-500 mt-1">Assigned to: {getUserName(t.assigned_to)}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold border ${getStatusColor(t.status)}`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}