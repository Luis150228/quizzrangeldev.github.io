import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { type Answer } from '../../store/types';
import { v4 as uuidv4 } from 'uuid';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useQuestionGameStore } from '../../store/questionGame';

export const ListQuestions = ({ answers, correctAnswer }: { answers: Answer[]; correctAnswer: number }) => {
	const responseQuestion = useQuestionGameStore((game) => game.selectedAnswer);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const answerIndex = Number(e.currentTarget.getAttribute('data-answer'));
		console.log({ 'Answer Selected': answerIndex, 'Answer Correct': correctAnswer });
	};

	return (
		<List>
			{answers.map(({ index, text }: Answer) => {
				const id = uuidv4();
				return (
					<ListItem
						key={id}
						disablePadding
						divider>
						<ListItemButton
							data-answer={index}
							onClick={handleClick}>
							<ListItemIcon>
								{index === correctAnswer ? <DoneIcon color='success' /> : <CloseIcon color='error' />}
							</ListItemIcon>
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
