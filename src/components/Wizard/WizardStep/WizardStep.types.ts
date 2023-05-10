import { FC } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface WizardStepProps<
	T extends FieldValues,
	P extends { formVariables: UseFormReturn<T, any>; step: string }
> {
	step: string;
	component: FC<P>;
	displayName?: string;
	__TYPE?: string;
	formVariables: UseFormReturn<T, any>;
}
