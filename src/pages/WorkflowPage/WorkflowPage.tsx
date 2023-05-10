import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SanFranciscoWorkflow } from '../../components/SanFranciscoWorkflow';
import { PageNotFound } from '../PageNotFound';

export const WorkflowPage: FC = () => {
	return (
		<Routes>
			<Route path="/san-francisco/*" Component={SanFranciscoWorkflow} />
			<Route path="/*" Component={PageNotFound} />
		</Routes>
	);
};
