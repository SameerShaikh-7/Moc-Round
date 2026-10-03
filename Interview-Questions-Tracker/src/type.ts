export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Status = 'Solved' | 'To Revise' | 'Not Solved';

export interface Question {
    id?: number;
    title: string;
    category: string;
    difficulty: Difficulty;
    status: Status;
    lastPracticed: string;
    notes: string;
}