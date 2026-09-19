import React, { useState } from 'react';
import mockData from '../data/mockData.json';

export default function CreateTicket({ tickets, setTickets, setPage }) {
  const [form, setForm] = useState({ subject: "", description: "", priority: "Medium", assigned_to: "" });

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!form.subject || !form.description) {
      alert("Subject and Description are required!");
      return;
    }

    const newTicket = {
      id: Date.now(),
      ticket_id: `TCK-${1025 + tickets.length}`, 
      subject: form.subject,
      description: form.description,
      priority: form.priority,
      status: "Open", 
      assigned_to: form.assigned_to ? Number(form.assigned_to) : null,
      created_at: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    setTickets([newTicket, ...tickets]);
    setPage("list");
  };

  return (
    <div className="max-w-2xl bg-white p-6 rounded-xl border shadow-sm">
      <form onSubmit={handleCreateTicket} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
          <input type="text" required className="w-full px-3 py-2 border rounded-lg" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} placeholder="Enter ticket subject" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Description *</label>
          <textarea required rows="4" className="w-full px-3 py-2 border rounded-lg" value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Describe your issue in detail..."></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Priority *</label>
            <select className="w-full px-3 py-2 border rounded-lg bg-white" value={form.priority} onChange={e => setForm({...form, priority: e.target.value})}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Assign To</label>
            <select className="w-full px-3 py-2 border rounded-lg bg-white" value={form.assigned_to} onChange={e => setForm({...form, assigned_to: e.target.value})}>
              <option value="">Select Employee</option>
              {mockData.users.map(u => (
                <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t pt-4">
          <button type="button" onClick={() => setPage("list")} className="px-4 py-2 border rounded-lg text-slate-600 font-medium">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Create Ticket</button>
        </div>
      </form>
    </div>
  );
}