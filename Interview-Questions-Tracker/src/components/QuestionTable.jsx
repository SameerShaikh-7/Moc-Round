import React from 'react';

export default function QuestionTable({
    questions = [],
    onView,
    onEdit,
    onDelete,
    onQuickStatusChange
}) {
    const getDifficultyBadge = (diff) => {
        switch (diff) {
            case 'Easy': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
            case 'Medium': return 'bg-amber-100 text-amber-800 border-amber-300';
            case 'Hard': return 'bg-rose-100 text-rose-800 border-rose-300';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Solved': return 'bg-emerald-500 text-white';
            case 'To Revise': return 'bg-amber-500 text-white';
            case 'Not Solved': return 'bg-rose-500 text-white';
            default: return 'bg-gray-500 text-white';
        }
    };

    if (questions.length === 0) {
        return (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
                <p className="text-4xl mb-3">🔍</p>
                <h3 className="text-lg font-bold text-gray-700">No questions found</h3>
                <p className="text-sm text-gray-500 mt-1">search keywords</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider font-semibold">
                            <th className="p-4">Question Title</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Difficulty</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Last Practiced</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm">
                        {questions.map((q) => (
                            <tr key={q.id} className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-semibold text-gray-900 max-w-xs truncate">
                                    {q.title}
                                </td>
                                <td className="p-4">
                                    <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium text-xs border border-slate-200">
                                        {q.category}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getDifficultyBadge(q.difficulty)}`}>
                                        {q.difficulty}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <select
                                        value={q.status}
                                        onChange={(e) => onQuickStatusChange(q, e.target.value)}
                                        className={`text-xs font-semibold px-2 py-1 rounded-md cursor-pointer border-none outline-none ${getStatusBadge(q.status)}`}
                                    >
                                        <option value="Solved" className="bg-white text-gray-800">Solved</option>
                                        <option value="To Revise" className="bg-white text-gray-800">To Revise</option>
                                        <option value="Not Solved" className="bg-white text-gray-800">Not Solved</option>
                                    </select>
                                </td>
                                <td className="p-4 text-gray-600 text-xs font-mono">
                                    {q.lastPracticed || 'N/A'}
                                </td>
                                <td className="p-4 text-right space-x-2">
                                    <button
                                        onClick={() => onView(q)}
                                        className="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium px-2.5 py-1.5 rounded transition-colors"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => onEdit(q)}
                                        className="text-xs bg-amber-50 text-amber-600 hover:bg-amber-100 font-medium px-2.5 py-1.5 rounded transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => q.id && onDelete(q.id)}
                                        className="text-xs bg-rose-50 text-rose-600 hover:bg-rose-100 font-medium px-2.5 py-1.5 rounded transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}