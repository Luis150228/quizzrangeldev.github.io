import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useQuestionGameStore } from '../../store/questionGame';

export const ListQuestions = () => {
	const responseQuestion = useQuestionGameStore((game) => game.selectedAnswer);
	const questions = useQuestionGameStore((game) => game.questions);
	const currentQuestion = useQuestionGameStore((game) => game.currentQuestion);
	const question = questions[currentQuestion];
	// console.log(questions);
	const answerOptions = question.answers;
	const selectedAnswer = question.selectedAnswer;

	const iconItem = ({ indexAnswer }: { indexAnswer: number }) => {
		if (question.selectedAnswer !== undefined && question.selectedAnswer >= 0) {
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

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const answerIndex = Number(e.currentTarget.getAttribute('data-answer'));
		responseQuestion(question.id, answerIndex);
	};

	return (
		<List>
			{answerOptions.map((answareText, indexId) => {
				return (
					<ListItem
						disablePadding
						divider
						data-answer={indexId}
						key={uuidv4()}>
						<ListItemButton
							onClick={handleClick}
							data-answer={indexId}
							disabled={selectedAnswer !== undefined}>
							<ListItemIcon>{iconItem({ indexAnswer: indexId })}</ListItemIcon>
							<ListItemText
								primary={answareText}
								sx={{ textAlign: 'center', color: textColorSelected({ answerSelected: indexId }) }}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);
};
