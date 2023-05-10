import React, { FC } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { WorkflowPage } from './pages/WorkflowPage';

const App: FC = () => {
	const router = createBrowserRouter(
		createRoutesFromElements([
			<Route path="/workflow/*" element={<WorkflowPage />} />,
			<Route path="/*" element={<LandingPage />} />,
		])
	);

	return <RouterProvider router={router} />;
};

export default App;
