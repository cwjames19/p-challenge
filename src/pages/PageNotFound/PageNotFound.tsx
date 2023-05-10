import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PageNotFound.module.scss';

export const PageNotFound: FC = () => {
	const navigate = useNavigate();

	const handleHomeClick = () => {
		navigate('/');
	};

	return (
		<div className={styles.root}>
			<h1 className={styles.h1}>Page not found</h1>

			<button className={styles.button} onClick={handleHomeClick} type="button">
				Return to start
			</button>
		</div>
	);
};
