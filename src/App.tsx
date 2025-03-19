import { Container, Stack, Typography } from '@mui/material';
import './App.css';
import { StartQuestions } from './components/questions/StartQuestions';
import { useQuestionGameStore } from './store/questionGame';
import { QuestionGameOnScreen } from './store/startGame';
import { Results } from './components/results/Results';
import { RangelDevLogo } from './assets/img/rangelDev';

function App() {
	const questionsGame = useQuestionGameStore((game) => game.questions);
	// console.log(questionsGame);
	return (
		<main>
			<Container maxWidth='sm'>
				<Stack
					direction='row'
					gap={2}
					alignItems={'center'}
					justifyContent={'center'}>
					<RangelDevLogo />
					<Typography
						variant='h2'
						component={'h1'}
						align='center'>
						Quizz RangelDev
					</Typography>
				</Stack>
				<Stack
					sx={{ padding: 2 }}
					direction='column'
					gap={2}
					alignItems={'center'}
					justifyContent={'center'}>
					<div className={`status-game ${questionsGame.length >= 1 ? 'section-out' : ''}`}>
						<StartQuestions />
					</div>
					<div className={`status-game ${questionsGame.length < 1 ? 'section-out' : ''}`}>
						<QuestionGameOnScreen />
					</div>
				</Stack>
				<div>
					<Results />
				</div>
			</Container>
		</main>
	);
}

export default App;
