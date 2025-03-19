export interface Question {
    id: number;
    question: string;
    image: string;
    answers: string[];
    correctAnswer: number;
    selectedAnswer?: number;
    isCorrectSeletedAnswer?: boolean;
}

export interface Answer {
	index: number;
	text: string;
}