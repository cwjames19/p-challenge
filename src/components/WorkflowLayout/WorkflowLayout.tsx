import React, { FC } from 'react';
import { WorkflowLayoutProps } from './WorkflowLayout.types';
import styles from './WorkflowLayout.module.scss';

export const WorkflowLayout: FC<React.PropsWithChildren<WorkflowLayoutProps>> = (props) => {
	const { children, name } = props;

	return (
		<div className={styles.root}>
			<h1 className={styles.title}>{name}</h1>
			<main className={styles.main}>{children}</main>
		</div>
	);
};
