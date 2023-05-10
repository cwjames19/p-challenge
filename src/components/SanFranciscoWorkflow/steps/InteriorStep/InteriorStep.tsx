import { FC } from 'react';
import { MultiSelect, SelectProps, Option } from 'react-multi-select-component';
import { Controller, useFormContext } from 'react-hook-form';
import { InteriorStepProps, SFInteriorWorkOption } from './InteriorStep.types';
import { WizardStepLayout } from '../../../Wizard/WizardStepLayout';
import { SFWorkflowInput } from '../../../../api';

export const SFInteriorWorkOptions: SFInteriorWorkOption[] = [
	{ value: 'new-bathroom', label: 'New bathroom' },
	{ value: 'new-laundry-room', label: 'New laundry room' },
	{ value: 'bathroom-remodel', label: 'Bathroom remodel' },
	{ value: 'other', label: 'Other' },
];

export const InteriorStep: FC<InteriorStepProps> = (props) => {
	const { step } = props;
	const { watch, control, setValue } = useFormContext<SFWorkflowInput>();

	const interior = watch('interior') ?? [];
	const sectionValid = interior.length > 0;

	const onChangeInterior: SelectProps['onChange'] = (selections: Option[] = []) => {
		setValue('interior', selections as SFInteriorWorkOption[]);
	};

	return (
		<WizardStepLayout
			label="Interior Work"
			step={step}
			previous="residential-work"
			next="permit-requirements"
			disableNext={!sectionValid}
		>
			<div>
				<Controller
					control={control}
					name="interior"
					render={(innerProps) => (
						<>
							<label>What interior work are you doing? (Multi-select)</label>
							<MultiSelect
								{...innerProps}
								options={SFInteriorWorkOptions}
								value={interior}
								onChange={onChangeInterior}
								disableSearch
								hasSelectAll={false}
								labelledBy="interior"
								ClearSelectedIcon={null}
							/>
						</>
					)}
				/>
			</div>
		</WizardStepLayout>
	);
};
