import { FC, useEffect } from 'react';
import { MultiSelect, SelectProps, Option } from 'react-multi-select-component';
import { Controller } from 'react-hook-form';
import { InteriorStepProps, SFInteriorWorkOption } from './InteriorStep.types';
import { WizardNav } from '../../../Wizard/WizardNav/WizardNav';

export const SFInteriorWorkOptions: SFInteriorWorkOption[] = [
	{ value: 'new-bathroom', label: 'New bathroom' },
	{ value: 'new-laundry-room', label: 'New laundry room' },
	{ value: 'bathroom-remodel', label: 'Bathroom remodel' },
	{ value: 'other', label: 'Other' },
];

export const InteriorStep: FC<InteriorStepProps> = (props) => {
	const { step, formVariables } = props;
	const { watch, control, setValue } = formVariables;

	const interior = watch('interior') ?? [];
	const sectionValid = interior.length > 0;

	const onChangeInterior: SelectProps['onChange'] = (selections: Option[] = []) => {
		setValue('interior', selections as SFInteriorWorkOption[]);
	};

	return (
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

			<WizardNav step={step} previous="residential-work" next="permit-requirements" disableNext={!sectionValid} />
		</div>
	);
};
