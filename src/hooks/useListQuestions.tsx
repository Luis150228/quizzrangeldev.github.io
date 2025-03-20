import { useQuestionGameStore } from '../store/questionGame';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export const useListQuestions = () => {
	const responseQuestion = useQuestionGameStore((game) => game.selectedAnswer);
	const questions = useQuestionGameStore((game) => game.questions);
	const currentQuestion = useQuestionGameStore((game) => game.currentQuestion);
	const question = questions[currentQuestion];
	// console.log(questions);
	const answerOptions = question.answers;
	const selectedAnswer = question.selectedAnswer;

	const IconItem = ({ indexAnswer }: { indexAnswer: number }) => {
		if (selectedAnswer !== undefined && selectedAnswer >= 0) {
			return indexAnswer === question.correctAnswer ? <DoneIcon color='success' /> : <CloseIcon color='error' />;
		}
	};

	const textColorSelected = ({ answerSelected }: { answerSelected: number }) => {
		return question.selectedAnswer !== undefined
			? question.selectedAnswer === answerSelected
				? '#f5f10c'
				: '#f5750c86'
			: 'afafaf';
	};

	return { responseQuestion, answerOptions, selectedAnswer, iconItem: IconItem, textColorSelected };
};
