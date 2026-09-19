import React from 'react';

export default function Header({ page }) {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-slate-800 capitalize">
        {page === 'list' ? 'Tickets' : page === 'create' ? 'Create New Ticket' : page === 'details' ? 'Ticket Details' : 'Dashboard'}
      </h2>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">SP</div>
      </div>
    </header>
  );
}