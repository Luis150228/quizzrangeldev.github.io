import JSConfetti from 'js-confetti';
import { useQuestionGameStore } from '../../store/questionGame';

export const Results = () => {
	const endGame = useQuestionGameStore((game) => game.endGame);
	const questions = useQuestionGameStore((game) => game.questions);
	const jsConfetti = new JSConfetti();
	// console.log(questions);
	let correctAnswers = 0;
	let incorrectAnswers = 0;
	questions.forEach((question) => {
		if (question.isCorrectSeletedAnswer) {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
	});
	if (endGame === false) return;
	if (correctAnswers > incorrectAnswers) {
		// alert('Congratulations, you won!');
		jsConfetti.addConfetti();
	}
	return (
		<div>
			<h2>Results</h2>
			<h3>End Game: {endGame ? 'Yes' : 'No'}</h3>
			<h3>Correct Answers: {correctAnswers}</h3>
			<h3>Incorrect Answers: {incorrectAnswers}</h3>
		</div>
	);
};
