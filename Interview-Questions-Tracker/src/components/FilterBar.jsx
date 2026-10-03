import React from 'react';

export default function FilterBar({
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    difficultyFilter,
    setDifficultyFilter,
    statusFilter,
    setStatusFilter,
    categories = [],
    onResetFilters
}) {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">

                <div className="lg:col-span-2">
                    <input
                        type="text"
                        placeholder="🔍 Search questions by title or notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>


                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-3.5 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="All">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>


                <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="px-3.5 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="All">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>


                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3.5 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="All">All Statuses</option>
                    <option value="Solved">Solved</option>
                    <option value="To Revise">To Revise</option>
                    <option value="Not Solved">Not Solved</option>
                </select>
            </div>

            {(searchQuery || categoryFilter !== 'All' || difficultyFilter !== 'All' || statusFilter !== 'All') && (
                <div className="flex justify-end">
                    <button
                        onClick={onResetFilters}
                        className="text-xs text-rose-600 hover:text-rose-800 font-medium underline"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
}