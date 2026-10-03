import React, { useState, useEffect } from 'react';

export default function QuestionForm({ isOpen, onClose, onSave, initialData }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('Medium');
    const [status, setStatus] = useState('Not Solved');
    const [lastPracticed, setLastPracticed] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setCategory(initialData.category || '');
            setDifficulty(initialData.difficulty || 'Medium');
            setStatus(initialData.status || 'Not Solved');
            setLastPracticed(initialData.lastPracticed || '');
            setNotes(initialData.notes || '');
        } else {
            setTitle('');
            setCategory('React JS');
            setDifficulty('Medium');
            setStatus('Not Solved');
            setLastPracticed(new Date().toISOString().split('T')[0]);
            setNotes('');
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !category.trim()) return;

        onSave({
            id: initialData?.id,
            title,
            category,
            difficulty,
            status,
            lastPracticed: lastPracticed || new Date().toISOString().split('T')[0],
            notes
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-5 border-b pb-3">
                    <h2 className="text-xl font-bold text-gray-800">
                        {initialData ? 'Edit Question' : 'Add New Question'}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold">
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Question Title *</label>
                        <input
                            required
                            type="text"
                            placeholder="e.g. Explain dependency array"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3.5 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Category *</label>
                            <input
                                required
                                type="text"
                                placeholder="e.g. React JS, JS, Node"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-3.5 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Difficulty</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className="w-full px-3.5 py-2 border rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-3.5 py-2 border rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="Solved">Solved</option>
                                <option value="To Revise">To Revise</option>
                                <option value="Not Solved">Not Solved</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Last Practiced Date</label>
                            <input
                                type="date"
                                value={lastPracticed}
                                onChange={(e) => setLastPracticed(e.target.value)}
                                className="w-full px-3.5 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Notes</label>
                        <textarea
                            rows={3}
                            placeholder="Add  formulas , code or explanation summary..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full px-3.5 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        />
                    </div>

                    <div className="flex gap-3 pt-3 border-t">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {initialData ? 'Update Question' : 'Save Question'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}