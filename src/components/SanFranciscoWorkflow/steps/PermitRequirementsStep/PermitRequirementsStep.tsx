import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { PermitRequirementsStepProps } from './PermitRequirementsStep.types';
import styles from './PermitRequirementsStep.module.scss';
import { Spinner } from '../../../Spinner';
import { API, SFWorkflowInput } from '../../../../api';
import { WizardStepLayout } from '../../../Wizard/WizardStepLayout';

export const PermitRequirementsStep: FC<PermitRequirementsStepProps> = (props) => {
	const { step } = props;
	const { getValues } = useFormContext<SFWorkflowInput>();
	const [headline, setHeadline] = useState<string>('');
	const [points, setPoints] = useState<string[]>([]);
	const [errors, setErrors] = useState<string[]>([]);
	const loading = !headline && !errors.length;

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

	const content = errors.length ? (
		<div className={styles.errors}>
			{errors.map((message) => (
				<ul>
					<li key={message}>{message}</li>
				</ul>
			))}
		</div>
	) : (
		<div className={styles.root}>
			<p className={styles.headline}>{headline}</p>
			{points.length && (
				<ul className={styles.points}>
					{points.map((p) => (
						<li key={p}>{p}</li>
					))}
				</ul>
			)}
		</div>
	);

	return (
		<WizardStepLayout
			label="Permit Requirements"
			step={step}
			previous={getValues().residential === 'exterior' ? 'exterior-work' : 'interior-work'}
			finalStep
		>
			{loading ? <Spinner /> : content}
		</WizardStepLayout>
	);
};
