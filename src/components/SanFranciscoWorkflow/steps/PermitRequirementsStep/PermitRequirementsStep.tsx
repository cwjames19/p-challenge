import { FC, useEffect, useState } from 'react';
import { PermitRequirementsStepProps } from './PermitRequirementsStep.types';
import styles from './PermitRequirementsStep.module.scss';
import { WizardNav } from '../../../Wizard/WizardNav/WizardNav';
import { Spinner } from '../../../Spinner';
import { API } from '../../../../api';

export const PermitRequirementsStep: FC<PermitRequirementsStepProps> = (props) => {
	const { step, formVariables } = props;
	const { getValues } = formVariables;
	const [headline, setHeadline] = useState<string>('');
	const [points, setPoints] = useState<string[]>([]);
	const [errors, setErrors] = useState<string[]>([]);

	useEffect(() => {
		let unmounted = false;

		const asyncAction = async () => {
			const formData = getValues();
			const response = await API.submitSFWorkflow(formData);

			if (unmounted) {
				return;
			}

			if (response.errors?.length) {
				setErrors(response.errors.map((err) => err.message));
			} else {
				setHeadline(response.requirements?.details.headline ?? '');
				setPoints(response.requirements?.details.points ?? []);
			}
		};

		if (!headline) {
			void asyncAction();
		}

		return () => {
			unmounted = true;
		};
	}, [headline, getValues]);

	if (errors.length) {
		return (
			<div className={styles.errors}>
				{errors.map((message) => (
					<ul>
						<li key={message}>{message}</li>
					</ul>
				))}
			</div>
		);
	}

	return (
		<>
			{headline ? (
				<div className={styles.root}>
					<p className={styles.headline}>{headline}</p>
					{points.length && (
						<ul className={styles.points}>
							{points.map((p) => (
								<li key={p}>{p}</li>
							))}
						</ul>
					)}
					<WizardNav
						step={step}
						previous={getValues().residential === 'exterior' ? 'exterior-work' : 'interior-work'}
						finalStep
					/>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};
