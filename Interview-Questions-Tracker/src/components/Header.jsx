import React from 'react';

export default function Header({ onOpenAddModal }) {
    return (
        <header className="bg-slate-900 text-white px-6 py-4 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    🎯 Interview Questions Tracker
                </h1>
                <p className="text-slate-400 text-sm mt-0.5">
                    Track, revise, and master technical interview topics
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-sm font-medium flex items-center gap-2">
                    <span>👨‍💻 Student Mode</span>
                </div>
                <button
                    onClick={onOpenAddModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-2"
                >
                    <span>+</span> Add Question
                </button>
            </div>
        </header>
    );
}