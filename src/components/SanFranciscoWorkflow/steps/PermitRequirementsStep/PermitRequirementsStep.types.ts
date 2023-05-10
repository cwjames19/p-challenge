import { UseFormReturn } from 'react-hook-form';
import { SFWorkflowInput } from '../../../../api';

export interface PermitRequirementsStepProps {
	formVariables: UseFormReturn<SFWorkflowInput, any>;
	step: string;
}
