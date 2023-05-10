import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.scss';
import { API, MunicipalityName } from '../../api';

const municipalityLabels: Record<MunicipalityName, string> = {
	[MunicipalityName.SAN_FRANCISCO]: 'San Francisco',
};

export const LandingPage: FC = () => {
	const navigate = useNavigate();
	const [selectedMunicipality, setSelectedMunicipality] = useState<MunicipalityName | undefined | null>();
	const [municipalities, setMunicipalities] = useState<MunicipalityName[]>([]);

	const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		setSelectedMunicipality(e.target.value as MunicipalityName);
	};

	const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		navigate(`/workflow/${selectedMunicipality ?? ''}`);
	};

	useEffect(() => {
		let unmounted = false;

		const asyncAction = async () => {
			const res = await API.fetchMunicipalityNames();

			if (unmounted) {
				return;
			}

			setMunicipalities(res);
		};

		if (!municipalities.length) {
			void asyncAction();
		}

		return () => {
			unmounted = true;
		};
	}, [municipalities]);

	return (
		<div className={styles.root}>
			<h1 className={styles.h1}>Select a municipality to begin determining your project&apos;s permit requirements.</h1>

			<select className={styles.select} onChange={handleSelectChange} disabled={!municipalities.length}>
				<option style={selectedMunicipality ? undefined : { display: 'none' }} />
				{municipalities.map((m) => (
					<option key={m} value={m}>
						{municipalityLabels[m]}
					</option>
				))}
			</select>

			<button className={styles.button} onClick={handleButtonClick} disabled={!selectedMunicipality} type="submit">
				Begin
			</button>
		</div>
	);
};
