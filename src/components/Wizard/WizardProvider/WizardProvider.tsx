import { FC, PropsWithChildren, createContext, useCallback, useEffect, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WizardContextType, WizardProviderProps } from './WizardProvider.types';

const WizardContext = createContext<WizardContextType>(null!);

export const WizardProvider: FC<PropsWithChildren<WizardProviderProps>> = (props) => {
	const navigate = useNavigate();
	const {
		values: { steps: propSteps, currentStep: propCurrentStep },
		children,
	} = props;

	const [steps] = useState<string[]>(propSteps);
	const [currentStep, setCurrentStep] = useState<string>(propCurrentStep);

	// navigate to corresponding url when value of step changes
	useEffect(() => {
		const path = `/${[
			...window.location.pathname
				.split('/')
				.filter((el) => el !== '')
				.slice(0, 2),
			currentStep,
		].join('/')}`;
		navigate(path);
	}, [currentStep, navigate]);

	const goToStep: (step: string) => void = useCallback(
		(step) => {
			if (steps.indexOf(step) !== -1) {
				setCurrentStep(step);
			}
		},
		[steps]
	);

	const goToNext: () => void = useCallback(() => {
		const nextStep = steps[steps.indexOf(currentStep) + 1];
		if (nextStep) {
			goToStep(nextStep);
		}
	}, [currentStep, steps, goToStep]);

	const goToPrevious: () => void = useCallback(() => {
		const previousStep = steps[steps.indexOf(currentStep) - 1];
		if (previousStep) {
			goToStep(previousStep);
		}
	}, [currentStep, steps, goToStep]);

	const values = useMemo(
		() => ({
			steps,
			currentStep,
			goToStep,
			goToNext,
			goToPrevious,
		}),
		[steps, currentStep, goToNext, goToPrevious, goToStep]
	);

	return <WizardContext.Provider value={values}>{children}</WizardContext.Provider>;
};

export const useWizard: () => WizardContextType = () => {
	const context = useContext(WizardContext);

	if (!context) {
		throw new Error(
			'[useWizard] You have tried to access a WizardContext from outside of a WizardProvider.' +
				'Make sure all calls to useWizard are made from within a WizardProvider.'
		);
	}

	return context;
};
