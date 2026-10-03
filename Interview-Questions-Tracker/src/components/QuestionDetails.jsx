import React from 'react';

export default function QuestionDetails({ question, onClose, onStatusChange }) {
    if (!question) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
                <div className="flex justify-between items-start border-b pb-3 mb-4">
                    <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{question.category}</span>
                        <h2 className="text-xl font-bold text-gray-900 mt-1">{question.title}</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold">
                        ✕
                    </button>
                </div>

                <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-lg border text-xs">
                        <div>
                            <span className="text-gray-500 block">Difficulty:</span>
                            <span className="font-semibold text-gray-800">{question.difficulty}</span>
                        </div>
                        <div>
                            <span className="text-gray-500 block">Last Practiced:</span>
                            <span className="font-semibold text-gray-800">{question.lastPracticed || 'N/A'}</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-700 text-xs uppercase mb-1">Notes & Explanation</h4>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-gray-700 text-xs leading-relaxed whitespace-pre-wrap min-h-[80px]">
                            {question.notes || 'No custom notes added for this question.'}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-700 text-xs uppercase mb-2">Update Status</h4>
                        <div className="flex gap-2">
                            {['Solved', 'To Revise', 'Not Solved'].map((statusOption) => (
                                <button
                                    key={statusOption}
                                    onClick={() => onStatusChange(question, statusOption)}
                                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${question.status === statusOption
                                            ? 'bg-blue-600 text-white border-blue-600 shadow'
                                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {statusOption}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-t pt-3 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-900"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}