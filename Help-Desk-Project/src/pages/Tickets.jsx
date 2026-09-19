import React, { useState } from 'react';
import { getUserName, getStatusColor, getPriorityColor } from '../utils/ticketUtils';

export default function Tickets({ tickets, setPage, setSelectedTicket }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const filteredTickets = tickets.filter(t => {
    const matchSearch = t.subject.toLowerCase().includes(search.toLowerCase()) || t.ticket_id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || t.status === statusFilter;
    const matchPriority = priorityFilter === "All" || t.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-4 border-b flex flex-col md:flex-row gap-3">
        <input type="text" placeholder="Search ID or subject..." className="flex-1 px-3 py-2 border rounded-lg text-sm" value={search} onChange={e => setSearch(e.target.value)} />
        <select className="px-3 py-2 border rounded-lg text-sm" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>
        <select className="px-3 py-2 border rounded-lg text-sm" value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={() => setPage("create")} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Create Ticket</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b text-slate-600">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Status</th>
              <th className="p-3">Assigned To</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredTickets.map(t => (
              <tr key={t.id} className="hover:bg-slate-50">
                <td className="p-3 font-medium text-slate-700">{t.ticket_id}</td>
                <td className="p-3 text-slate-800">{t.subject}</td>
                <td className="p-3"><span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(t.priority)}`}>{t.priority}</span></td>
                <td className="p-3"><span className={`px-2 py-1 rounded text-xs font-semibold border ${getStatusColor(t.status)}`}>{t.status}</span></td>
                <td className="p-3 text-slate-600">{getUserName(t.assigned_to)}</td>
                <td className="p-3">
                  <button onClick={() => { setSelectedTicket(t); setPage("details"); }} className="text-blue-600 hover:underline font-medium text-xs">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}