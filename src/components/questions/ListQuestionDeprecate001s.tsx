import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { type Question } from '../../store/types.d';
import { v4 as uuidv4 } from 'uuid';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useQuestionGameStore } from '../../store/questionGame';

const iconItem = ({ question, indexAnswer }: { question: any; indexAnswer: number }) => {
	if (question.selectedAnswer) {
		return indexAnswer === question.correctAnswer ? <DoneIcon color='success' /> : <CloseIcon color='error' />;
	}
};

const backbroundItemSelected = ({ question }: { question: Question }) => {
	if (question.selectedAnswer) {
		return question.selectedAnswer;
	}
};

export const ListQuestions = (questionScreen: Question) => {
	// console.log(questionScreen);
	const selectAnswerQuestion = useQuestionGameStore((game) => game.selectedAnswer);
	const actualQuestion = useQuestionGameStore((game) => game.currentQuestion);
	const workQuestionScreen = useQuestionGameStore((game) => game.questions); // regresa las todas las preguntas

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		console.log(e);
		const answerIndex = Number(e.currentTarget.getAttribute('data-answer'));
		// console.log({ 'Answer Selected': answerIndex, 'Answer Correct': questionScreen.correctAnswer });
		selectAnswerQuestion(questionScreen.id, answerIndex);
		// console.log(workQuestionScreen);
	};

	const selected = backbroundItemSelected({ question: workQuestionScreen[actualQuestion] });

	return (
		<List>
			{questionScreen.answers.map((text, index) => {
				const id = uuidv4();
				return (
					<ListItem
						key={id}
						disablePadding
						data-answer={index}
						onClick={handleClick}
						divider>
						<ListItemButton>
							<ListItemIcon>{iconItem({ question: questionScreen, indexAnswer: index })}</ListItemIcon>
							<ListItemText
								primary={text}
								sx={{ textAlign: 'center' }}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};
//sx={'align-items: center'}
