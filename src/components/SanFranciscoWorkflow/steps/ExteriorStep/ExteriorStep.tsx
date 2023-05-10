import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MultiSelect, SelectProps, Option } from 'react-multi-select-component';
import { ExteriorStepProps, SFExteriorWorkOption } from './ExteriorStep.types';
import { WizardStepLayout } from '../../../Wizard/WizardStepLayout';
import { SFWorkflowInput } from '../../../../api';

export const SFExteriorWorkOptions: SFExteriorWorkOption[] = [
	{ value: 'garage-door-replacement', label: 'Garage door replacement' },
	{ value: 'exterior-doors', label: 'Work on exterior doors' },
	{ value: 're-roofing', label: 'Re-roofing' },
	{ value: 'small-fences', label: 'Building fences less than 6 feet' },
	{ value: 'other', label: 'Other' },
];

export const ExteriorStep: FC<ExteriorStepProps> = (props) => {
	const { step } = props;
	const { watch, control, setValue } = useFormContext<SFWorkflowInput>();

	const exterior = watch('exterior') ?? [];
	const sectionValid = exterior.length > 0;

	const onChangeExterior: SelectProps['onChange'] = (selections: Option[] = []) => {
		setValue('exterior', selections as SFExteriorWorkOption[]);
	};

	return (
		<WizardStepLayout
			label="Exterior Work"
			step={step}
			previous="residential-work"
			next="permit-requirements"
			disableNext={!sectionValid}
		>
			<div>
				<Controller
					control={control}
					name="exterior"
					render={(innerProps) => (
						<>
							<label>What sort of exterior work are you doing? (Multi-select)</label>
							<MultiSelect
								{...innerProps}
								options={SFExteriorWorkOptions}
								value={exterior}
								onChange={onChangeExterior}
								disableSearch
								hasSelectAll={false}
								labelledBy="exterior"
								ClearSelectedIcon={null}
							/>
						</>
					)}
				/>
			</div>
		</WizardStepLayout>
	);
};
