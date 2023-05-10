import { PermitReqsType, WorkflowSubmissionResponse } from '../api.types';
import { ServerError } from '../errors';
import { API } from '../api';

export type SFResidentialWork = 'exterior' | 'interior';

export type SFInteriorWork = 'new-bathroom' | 'new-laundry-room' | 'bathroom-remodel' | 'other';

export type SFExteriorWork = 'garage-door-replacement' | 'exterior-doors' | 're-roofing' | 'small-fences' | 'other';

export type SFInteriorWorkOption = {
	label: string;
	value: SFInteriorWork;
};

export type SFExteriorWorkOption = {
	label: string;
	value: SFExteriorWork;
};

export type SFWorkflowInput = {
	residential: SFResidentialWork;
	exterior: SFExteriorWorkOption[];
	interior: SFInteriorWorkOption[];
};

export const submitSFWorkflow: (submission: SFWorkflowInput) => Promise<WorkflowSubmissionResponse<SFWorkflowInput>> = (
	submission
) => {
	const InHousePoints = [
		'A building permit is required.',
		'Include plan sets.',
		'Submit application for in-house review.',
	];

	const OTCPoints = ['A building permit is required.', 'Include plan sets.', 'Submit application for OTC review.'];

	const NonePoints = ['Nothing is required! You’re set to build.'];

	let type: PermitReqsType;
	let points: string[] = [];

	if (submission.residential === 'exterior') {
		const selections = submission.exterior.map((option) => option.value);

		if (selections.includes('other')) {
			type = PermitReqsType.IN_HOUSE;
			points = [...InHousePoints];
		} else if (selections.length === 1 && selections[0] === 'small-fences') {
			type = PermitReqsType.NONE;
			points = [...NonePoints];
		} else {
			type = PermitReqsType.OTC;
			points = [OTCPoints[0], OTCPoints[2]];

			if (selections.some((s) => s === 'exterior-doors' || s === 'garage-door-replacement')) {
				points.splice(1, 0, OTCPoints[1]);
			}
		}
	} else {
		type = PermitReqsType.OTC;
		points = [OTCPoints[0], OTCPoints[2]];
		if (
			submission.interior.map((option) => option.value).some((i) => i === 'new-bathroom' || i === 'new-laundry-room')
		) {
			points.splice(1, 0, OTCPoints[1]);
		}
	}

	return new Promise((resolve) => {
		try {
			const permitReqsObj = API.generatePermitReqsObject({ type, points });

			void API.writeNewSubmission(permitReqsObj).then(() => {
				const response: WorkflowSubmissionResponse<SFWorkflowInput> = {
					requirements: permitReqsObj,
					errors: undefined,
				};

				// mock async call
				setTimeout(() => {
					resolve(response);
				}, 500);
			});
		} catch (error) {
			const response: WorkflowSubmissionResponse<SFWorkflowInput> = {
				requirements: undefined,
				errors: [new ServerError('An unknown error occurred')],
			};

			// mock async call
			setTimeout(() => {
				resolve(response);
			}, 500);
		}
	});
};
