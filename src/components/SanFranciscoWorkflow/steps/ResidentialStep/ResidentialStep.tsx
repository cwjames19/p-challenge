import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ResidentialStepProps, SFResidentialWorkNames } from './ResidentialStep.types';
import { WizardStepLayout } from '../../../Wizard/WizardStepLayout';
import { SFWorkflowInput } from '../../../../api';

export const ResidentialStep: FC<ResidentialStepProps> = (props) => {
	const { step } = props;
	const { register, watch } = useFormContext<SFWorkflowInput>();

	const residential = watch('residential');
	const next = residential === 'exterior' ? 'exterior-work' : 'interior-work';

	return (
		<WizardStepLayout label="Residential Work" step={step} next={next} disableNext={!residential}>
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
			</div>
		</WizardStepLayout>
	);
};
