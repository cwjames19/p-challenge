import { UseFormReturn } from 'react-hook-form';
import { SFWorkflowInput, SFExteriorWork } from '../../../../api';

export interface ExteriorStepProps {
	formVariables: UseFormReturn<SFWorkflowInput, any>;
	step: string;
}

export type SFExteriorWorkOption = {
	label: string;
	value: SFExteriorWork;
};
