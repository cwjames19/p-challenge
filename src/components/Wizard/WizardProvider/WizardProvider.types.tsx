export type WizardContextType = {
	steps: string[];
	currentStep: string;
	goToStep: (step: string) => void;
	goToNext: () => void;
	goToPrevious: () => void;
};

export interface WizardProviderProps {
	values: Pick<WizardContextType, 'steps' | 'currentStep'>;
}
