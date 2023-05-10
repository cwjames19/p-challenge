export interface WizardNavProps {
	step: string;
	previous?: string | null;
	disablePrevious?: boolean;
	next?: string | null;
	disableNext?: boolean;
	finalStep?: boolean;
}
