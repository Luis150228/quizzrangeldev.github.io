import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import { useQuestionGameStore } from '../../store/questionGame';

export const BtnReset = () => {
	const resetGameQuestions = useQuestionGameStore((game) => game.resetGameQuestions);
	const handleReset = () => {
		resetGameQuestions();
	};
	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
			<Button
				onClick={handleReset}
				sx={{ alignItems: 'center', display: 'flex', gap: '5px', color: 'black', bgcolor: 'white' }}>
				<RestartAltIcon /> Reset
			</Button>
		</div>
	);
};
