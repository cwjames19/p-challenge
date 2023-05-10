import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { WizardProps } from './Wizard.types';
import { WizardProvider } from './WizardProvider';
import { PageNotFound } from '../../pages/PageNotFound';
import { WizardStep } from './WizardStep';

export const Wizard: FC<React.PropsWithChildren<WizardProps>> = (props) => {
	const navigate = useNavigate();
	const { children, steps } = props;
	const defaultStep = steps.length ? steps[0] : '';
	const values = useMemo(
		() => ({
			steps,
			currentStep: defaultStep,
		}),
		[steps, defaultStep]
	);

	useEffect(() => {
		if (!defaultStep) {
			navigate('/404');
		} else if (window.location.pathname.split('/').filter((el) => el !== '').length < 3) {
			navigate(`/${defaultStep}`);
		}
	}, [defaultStep, navigate]);

	return (
		<WizardProvider values={values}>
			<Routes>
				{children}
				<Route path="/*" element={<Navigate to={`${window.location.pathname}/${defaultStep}`} />} />
			</Routes>
		</WizardProvider>
	);
};
