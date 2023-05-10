import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SanFranciscoWorkflow } from '../../components/SanFranciscoWorkflow';

export const WorkflowPage: FC = () => (
	<Routes>
		<Route path="/san-francisco/*" Component={SanFranciscoWorkflow} />
	</Routes>
);
