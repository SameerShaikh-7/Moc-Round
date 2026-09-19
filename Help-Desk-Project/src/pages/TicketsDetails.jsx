import React from 'react';
import mockData from '../data/mockData.json';
import { getUserName, getStatusColor, getPriorityColor } from '../utils/ticketUtils';

export default function TicketsDetails({ selectedTicket, setSelectedTicket, tickets, setTickets, setPage }) {
  if (!selectedTicket) return null;

  const handleUpdateTicket = (e) => {
    e.preventDefault();
    const updatedTickets = tickets.map(t => t.id === selectedTicket.id ? selectedTicket : t);
    setTickets(updatedTickets);
    alert("Ticket updated successfully!");
    setPage("list");
  };

  return (
    <div className="max-w-4xl space-y-4">
      <button onClick={() => setPage("list")} className="text-blue-600 text-sm font-medium flex items-center gap-1">← Back to Tickets</button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-slate-800">{selectedTicket.ticket_id}</h2>
              <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${getStatusColor(selectedTicket.status)}`}>{selectedTicket.status}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">{selectedTicket.subject}</h3>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-6 bg-slate-50 p-4 rounded-lg">
              <div><p className="text-slate-500">Priority</p><span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${getPriorityColor(selectedTicket.priority)}`}>{selectedTicket.priority}</span></div>
              <div><p className="text-slate-500">Created</p><p className="font-medium text-slate-800 mt-1">{selectedTicket.created_at}</p></div>
              <div><p className="text-slate-500">Assigned To</p><p className="font-medium text-slate-800 mt-1">{getUserName(selectedTicket.assigned_to)}</p></div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-slate-700 mb-1">Description</p>
              <p className="text-sm text-slate-600 bg-white border p-3 rounded-lg">{selectedTicket.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Update Ticket</h3>
            <form onSubmit={handleUpdateTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Change Status</label>
                <select className="w-full px-3 py-2 border rounded-lg text-sm" value={selectedTicket.status} onChange={e => setSelectedTicket({...selectedTicket, status: e.target.value})}>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Assign To</label>
                <select className="w-full px-3 py-2 border rounded-lg text-sm" value={selectedTicket.assigned_to || ""} onChange={e => setSelectedTicket({...selectedTicket, assigned_to: e.target.value ? Number(e.target.value) : null})}>
                  <option value="">Select Staff</option>
                  {mockData.users.map(u => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Update Ticket</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}