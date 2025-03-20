import JSConfetti from "js-confetti";
import { useQuestionGameStore } from "../store/questionGame";

export const useQuestionResults = () => {

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
    if (endGame && correctAnswers > incorrectAnswers) {
        jsConfetti.addConfetti();
    }

    return { correctAnswers, incorrectAnswers, endGame };
}