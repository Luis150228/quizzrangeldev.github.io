import { Button, CardActions, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useQuestionGameStore } from '../store/questionGame';
import { BtnReset } from './results/BtnReset';

export const CardQuestions = ({ greyText, title, children }: any) => {
	const actualityQuestion = useQuestionGameStore((game) => game.currentQuestion);
	const maxQuestion = useQuestionGameStore((game) => {
		const total = game.questions.length;
		return total - 1;
	});
	const nextQuestion = useQuestionGameStore((game) => game.goNextQuestion);
	const backQuestion = useQuestionGameStore((game) => game.goBackQuestion);
	// console.log(maxQuestion);
	return (
		<>
			<Card sx={{ minWidth: 450 }}>
				<CardContent>
					<Typography
						gutterBottom
						sx={{ color: 'text.secondary', fontSize: 14 }}>
						{greyText}
					</Typography>
					<Typography
						variant='h5'
						component='div'
						sx={{ padding: '1rem', minHeight: '6rem' }}>
						{title}
					</Typography>
					<div>{children}</div>
				</CardContent>
				<CardActions sx={{ justifyContent: 'space-between' }}>
					<Button
						onClick={backQuestion}
						disabled={actualityQuestion === 0 ? true : false}
						size='small'>
						<FirstPageIcon /> Anterior
					</Button>
					<Button
						onClick={nextQuestion}
						disabled={actualityQuestion === maxQuestion ? true : false}
						size='small'>
						Siguiente <LastPageIcon />
					</Button>
				</CardActions>
			</Card>
			<BtnReset />
		</>
	);
};
