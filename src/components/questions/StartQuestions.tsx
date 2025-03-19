import { Button } from '@mui/material';
import { useQuestionGameStore } from '../../store/questionGame';

export const StartQuestions = () => {
	const callQuestions = useQuestionGameStore((game) => game.setCurrentQuestion);
	const handledClick = () => {
		callQuestions(10);
	};
	return (
		<Button
			onClick={handledClick}
			variant='contained'
			color='primary'>
			Start Game
		</Button>
	);
};
