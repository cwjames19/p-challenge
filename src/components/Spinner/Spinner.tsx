import { FC } from 'react';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './Spinner.types';

export const Spinner: FC<SpinnerProps> = (props) => {
	const { size = 64 } = props;

	return (
		<div className={styles.spinnerOuterContainer}>
			<div style={{ height: `${size}px`, width: `${size}px` }}>
				<span className={styles.spinner} />
			</div>
		</div>
	);
};
