import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Route } from 'react-router-dom';
import { WorkflowLayout } from '../WorkflowLayout';
import { Wizard } from '../Wizard/Wizard';
import { ResidentialStep } from './steps/ResidentialStep';
import { ExteriorStep } from './steps/ExteriorStep';
import { InteriorStep } from './steps/InteriorStep';
import { PermitRequirementsStep } from './steps/PermitRequirementsStep';
import { SFWorkflowInput } from '../../api';

export const SanFranciscoWorkflow: FC = () => {
	const formMethods = useForm<SFWorkflowInput>({
		defaultValues: {
			exterior: [],
			interior: [],
		},
	});

	return (
		<WorkflowLayout name="San Francisco">
			<FormProvider {...formMethods}>
				<form>
					<Wizard steps={['residential-work', 'exterior-work', 'interior-work', 'permit-requirements']}>
						<Route path="/residential-work" element={<ResidentialStep step="residential-work" />} />
						<Route path="/exterior-work" element={<ExteriorStep step="exterior-work" />} />
						<Route path="/interior-work" element={<InteriorStep step="interior-work" />} />
						<Route path="/permit-requirements" element={<PermitRequirementsStep step="permit-requirements" />} />
					</Wizard>
				</form>
			</FormProvider>
		</WorkflowLayout>
	);
};
