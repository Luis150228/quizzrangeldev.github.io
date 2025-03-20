import { useQuestionResults } from '../../hooks/useQuestionResults';

export const Results = () => {
	const { correctAnswers, incorrectAnswers, endGame } = useQuestionResults();
	if (!endGame) return null;
	return (
		<div>
			<h2>Results</h2>
			<h3>End Game: {endGame ? 'Yes' : 'No'}</h3>
			<h3>Correct Answers: {correctAnswers}</h3>
			<h3>Incorrect Answers: {incorrectAnswers}</h3>
		</div>
	);
};
