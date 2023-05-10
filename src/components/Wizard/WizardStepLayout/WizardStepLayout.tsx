import { FC, PropsWithChildren } from 'react';
import styles from './WizardStepLayout.module.scss';
import { WizardStepLayoutProps } from './WizardStepLayout.types';
import { WizardNav } from '../WizardNav/WizardNav';

// eslint-disable-next-line react/no-unused-prop-types
export const WizardStepLayout: FC<PropsWithChildren<WizardStepLayoutProps>> = (props) => {
	const { label, children, ...navProps } = props;

	return (
		<>
			<h2 className={styles.h2}>{label}</h2>
			{children}
			<WizardNav {...navProps} />
		</>
	);
};
