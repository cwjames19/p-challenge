import { FieldValues, UseFormReturn } from 'react-hook-form';
import { SFWorkflowInput } from '../../../../api';

export enum SFResidentialWorkNames {
	exterior = 'Exterior Work',
	interior = 'Interior Work',
}

export interface ResidentialStepProps {
	formVariables: UseFormReturn<SFWorkflowInput, any>;
	step: string;
}
