import { SFExteriorWork } from '../../../../api';

export interface ExteriorStepProps {
	step: string;
}

export type SFExteriorWorkOption = {
	label: string;
	value: SFExteriorWork;
};
