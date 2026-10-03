import React from 'react';

export default function SummaryCards({ questions = [] }) {
    const total = questions.length;
    const solved = questions.filter(q => q.status === 'Solved').length;
    const toRevise = questions.filter(q => q.status === 'To Revise').length;
    const notSolved = questions.filter(q => q.status === 'Not Solved').length;


    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Questions</p>
                    <div className="flex justify-between items-baseline mt-2">
                        <span className="text-3xl font-extrabold text-gray-800">{total}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">All Topics</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-emerald-200 shadow-sm">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Solved</p>
                    <div className="flex justify-between items-baseline mt-2">
                        <span className="text-3xl font-extrabold text-emerald-700">{solved}</span>
                        <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded font-medium">Ready</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">To Revise</p>
                    <div className="flex justify-between items-baseline mt-2">
                        <span className="text-3xl font-extrabold text-amber-700">{toRevise}</span>
                        <span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded font-medium">Needs Attention</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-rose-200 shadow-sm">
                    <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Not Solved</p>
                    <div className="flex justify-between items-baseline mt-2">
                        <span className="text-3xl font-extrabold text-rose-700">{notSolved}</span>
                        <span className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded font-medium">Pending</span>
                    </div>
                </div>
            </div>
        </div>
    );
}