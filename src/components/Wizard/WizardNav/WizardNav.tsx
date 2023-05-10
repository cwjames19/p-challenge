import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { WizardNavProps } from './WizardNav.types';
import styles from './WizardNav.module.scss';
import { useWizard } from '../WizardProvider';

export const WizardNav: FC<WizardNavProps> = (props) => {
	const navigate = useNavigate();
	const {
		step,
		previous,
		disablePrevious: propDisablePrevious = false,
		next,
		disableNext: propDisableNext = false,
		finalStep = false,
	} = props;
	const { steps, goToStep, goToNext, goToPrevious } = useWizard();
	const disableNext = steps.at(-1) === step || next === null || propDisableNext;
	const disablePrevious = steps.at(0) === step || previous === null || propDisablePrevious;

	const handleClickPrevious = () => {
		if (previous) {
			goToStep(previous);
		} else {
			goToPrevious();
		}
	};

	const handleClickNext = () => {
		if (next) {
			goToStep(next);
		} else {
			goToNext();
		}
	};

	const handleClickFinish = () => {
		navigate('/');
	};

	return (
		<>
			{!finalStep && (
				<div className={styles.stepButtonsContainer}>
					<div>
						<button disabled={disablePrevious} onClick={handleClickPrevious} className={styles.button} type="button">
							Go back
						</button>
					</div>
					<div>
						<button disabled={disableNext} onClick={handleClickNext} className={styles.button} type="button">
							Next
						</button>
					</div>
				</div>
			)}
			<button className={styles.finishButton} onClick={handleClickFinish} type="button">
				{finalStep ? 'Finish' : 'Exit'}
			</button>
		</>
	);
};
