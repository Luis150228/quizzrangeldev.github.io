import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useListQuestions } from '../../hooks/useListQuestions';

export const ListQuestions = () => {
	const { responseQuestion, answerOptions, selectedAnswer, IconItem, textColorSelected } = useListQuestions();

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const answerIndex = Number(e.currentTarget.getAttribute('data-answer'));
		responseQuestion(answerIndex);
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
							<ListItemIcon>
								<IconItem indexAnswer={indexId} />
							</ListItemIcon>
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
