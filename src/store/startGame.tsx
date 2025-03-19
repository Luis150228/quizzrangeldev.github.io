import { CardQuestions } from '../components/card';
import { ListQuestions } from '../components/questions/ListQuestions';
import { useQuestionGameStore } from './questionGame';
import { type Question } from './types.d';

const QuestionScreen = ({ info, actual, total }: { info: Question; actual: number; total: number }) => {
	if (!info) return;
	// console.log(info);
	return (
		<CardQuestions
			greyText={`${actual} / ${total}`}
			title={info.question}
			// children={<ListQuestions answers={info.answers} />}
			children={<ListQuestions />}
		/>
	);
};

export const QuestionGameOnScreen = () => {
	const allGameQuestions = useQuestionGameStore((game) => game.questions);
	const actualGameQuestion = useQuestionGameStore((game) => game.currentQuestion);

	const actualQuestion = allGameQuestions[actualGameQuestion];
	const totalQuestions = allGameQuestions.length;

	return (
		<>
			<QuestionScreen
				info={actualQuestion}
				actual={actualGameQuestion + 1}
				total={totalQuestions}
			/>
		</>
	);
};
