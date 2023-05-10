import { FC } from 'react';
import { ResidentialStepProps, SFResidentialWorkNames } from './ResidentialStep.types';
import { WizardNav } from '../../../Wizard/WizardNav/WizardNav';

export const ResidentialStep: FC<ResidentialStepProps> = (props) => {
	const { step, formVariables } = props;
	const { register, watch } = formVariables;

	const residential = watch('residential');
	const next = residential === 'exterior' ? 'exterior-work' : 'interior-work';

	return (
		<div>
			<label>What residential work are you doing? (select one)</label>
			<select {...register('residential', { required: true })}>
				<option value="">-- Select Option --</option>
				{Object.entries(SFResidentialWorkNames).map(([value, displayName]) => (
					<option key={value} value={value}>
						{displayName}
					</option>
				))}
			</select>

			<WizardNav step={step} next={next} disableNext={!residential} />
		</div>
	);
};
