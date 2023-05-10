import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './SanFranciscoWorkflow.module.scss';
import { Route } from 'react-router-dom';
import { WorkflowLayout } from '../WorkflowLayout';
import { Wizard } from '../Wizard/Wizard';
import { WizardStep } from '../Wizard/WizardStep';
import { ResidentialStep } from './steps/ResidentialStep';
import { ExteriorStep } from './steps/ExteriorStep';
import { InteriorStep } from './steps/InteriorStep';
import { PermitRequirementsStep } from './steps/PermitRequirementsStep';
import { SFWorkflowInput } from '../../api';

export const SanFranciscoWorkflow: FC = () => {
	const formVariables = useForm<SFWorkflowInput>({
		defaultValues: {
			exterior: [],
			interior: [],
		},
	});
	// console.log('formVariables: ', formVariables);
	const { handleSubmit, getValues } = formVariables;

	// useEffect(() => {
	// 	const values = getValues();
	// 	console.log('values in effect: ', values);
	// });

	const onSubmit: SubmitHandler<SFWorkflowInput> = (data: SFWorkflowInput) => {
		console.log('data: ', data);
	};

	return (
		<WorkflowLayout name="San Francisco">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Wizard steps={['residential-work', 'exterior-work', 'interior-work', 'permit-requirements']}>
					<Route
						path="/residential-work"
						element={
							<WizardStep
								step="residential-work"
								displayName="Residential Work"
								component={ResidentialStep}
								formVariables={formVariables}
							/>
						}
					/>
					<Route
						path="/exterior-work"
						element={
							<WizardStep
								step="exterior-work"
								displayName="Exterior Work"
								component={ExteriorStep}
								formVariables={formVariables}
							/>
						}
					/>
					<Route
						path="/interior-work"
						element={
							<WizardStep
								step="interior-work"
								displayName="Exterior Work"
								component={InteriorStep}
								formVariables={formVariables}
							/>
						}
					/>
					<Route
						path="/permit-requirements"
						element={
							<WizardStep
								step="permit-requirements"
								displayName="Permit Requirements"
								component={PermitRequirementsStep}
								formVariables={formVariables}
							/>
						}
					/>
				</Wizard>
			</form>
		</WorkflowLayout>
	);
};
