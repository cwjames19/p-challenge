import React, { FC } from 'react';
import styles from './WizardStep.module.scss';
import { WizardStepProps } from './WizardStep.types';

// eslint-disable-next-line react/no-unused-prop-types
export const WizardStep: FC<WizardStepProps<any, any>> = (props) => {
	const { step, displayName, component: Component, formVariables } = props;

	return (
		<>
			<h2 className={styles.h2}>{displayName}</h2>
			<Component step={step} formVariables={formVariables} />
		</>
	);
};
