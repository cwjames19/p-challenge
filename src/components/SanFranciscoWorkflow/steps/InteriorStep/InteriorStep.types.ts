import { UseFormReturn } from 'react-hook-form';
import { SFInteriorWork, SFWorkflowInput } from '../../../../api';

export interface InteriorStepProps {
	formVariables: UseFormReturn<SFWorkflowInput, any>;
	step: string;
}

export type SFInteriorWorkOption = {
	label: string;
	value: SFInteriorWork;
};
