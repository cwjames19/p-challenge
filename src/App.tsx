import React, { FC } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { WorkflowPage } from './pages/WorkflowPage';
import { PageNotFound } from './pages/PageNotFound';

const App: FC = () => {
	const router = createBrowserRouter(
		createRoutesFromElements([
			<Route path="/workflow/*" element={<WorkflowPage />} />,
			<Route path="/" element={<LandingPage />} />,
			<Route path="/*" element={<PageNotFound />} />,
		])
	);

	return <RouterProvider router={router} />;
};

export default App;
