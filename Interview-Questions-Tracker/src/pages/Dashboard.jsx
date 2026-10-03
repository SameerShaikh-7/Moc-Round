import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SummaryCards from '../components/SummaryCards';
import FilterBar from '../components/FilterBar';
import QuestionTable from '../components/QuestionTable';
import QuestionForm from '../components/QuestionForm';
import QuestionDetails from '../components/QuestionDetails';

const API_URL = 'http://localhost:5000/questions';

export default function Dashboard() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');

    // Modal States
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState(null);
    const [viewingQuestion, setViewingQuestion] = useState(null);

    // Fetch Questions
    const fetchQuestions = async () => {
        try {
            setLoading(true);
            const res = await axios.get(API_URL);
            setQuestions(res.data);
            setError(null);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch questions. Ensure JSON Server is running on port 5000.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    //categories for dropdown
    const categories = useMemo(() => {
        const cats = Array.from(new Set(questions.map(q => q.category)));
        return cats.filter(Boolean);
    }, [questions]);

    //Search Logic
    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            const matchesSearch =
                (q.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                (q.notes || '').toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = categoryFilter === 'All' || q.category === categoryFilter;
            const matchesDifficulty = difficultyFilter === 'All' || q.difficulty === difficultyFilter;
            const matchesStatus = statusFilter === 'All' || q.status === statusFilter;

            return matchesSearch && matchesCategory && matchesDifficulty && matchesStatus;
        });
    }, [questions, searchQuery, categoryFilter, difficultyFilter, statusFilter]);

    // Add or Edit Question
    const handleSaveQuestion = async (questionData) => {
        try {
            if (questionData.id) {
                // Edit (PUT)
                await axios.put(`${API_URL}/${questionData.id}`, questionData);
            } else {
                // Add (POST)
                await axios.post(API_URL, questionData);
            }
            fetchQuestions();
        } catch (err) {
            console.error(err);
            alert('Error saving question.');
        }
    };

    // Quick Status Change
    const handleQuickStatusChange = async (question, newStatus) => {
        try {
            const today = new Date().toISOString().split('T')[0];
            const updated = { ...question, status: newStatus, lastPracticed: today };
            await axios.patch(`${API_URL}/${question.id}`, updated);

            if (viewingQuestion && viewingQuestion.id === question.id) {
                setViewingQuestion(updated);
            }
            fetchQuestions();
        } catch (err) {
            console.error(err);
            alert('Error updating status.');
        }
    };

    // Delete Question
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this question?')) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                fetchQuestions();
            } catch (err) {
                console.error(err);
                alert('Error deleting question.');
            }
        }
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setCategoryFilter('All');
        setDifficultyFilter('All');
        setStatusFilter('All');
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                <Header onOpenAddModal={() => { setEditingQuestion(null); setIsFormOpen(true); }} />

                {error && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-sm font-medium">
                        ⚠️ {error}
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-20 text-gray-500 font-medium">
                        Loading interview tracker data...
                    </div>
                ) : (
                    <>
                        <SummaryCards questions={questions} />

                        <FilterBar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            categoryFilter={categoryFilter}
                            setCategoryFilter={setCategoryFilter}
                            difficultyFilter={difficultyFilter}
                            setDifficultyFilter={setDifficultyFilter}
                            statusFilter={statusFilter}
                            setStatusFilter={setStatusFilter}
                            categories={categories}
                            onResetFilters={handleResetFilters}
                        />

                        <QuestionTable
                            questions={filteredQuestions}
                            onView={(q) => setViewingQuestion(q)}
                            onEdit={(q) => { setEditingQuestion(q); setIsFormOpen(true); }}
                            onDelete={handleDelete}
                            onQuickStatusChange={handleQuickStatusChange}
                        />
                    </>
                )}

                {/* Add/Edit*/}
                <QuestionForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    onSave={handleSaveQuestion}
                    initialData={editingQuestion}
                />

                {/* Detail Modal */}
                <QuestionDetails
                    question={viewingQuestion}
                    onClose={() => setViewingQuestion(null)}
                    onStatusChange={handleQuickStatusChange}
                />
            </div>
        </div>
    );
}