import { PermitReqsObject, PermitReqsType, MunicipalityName, WorkflowSubmissionResponse } from './api.types';
import { SFWorkflowInput, submitSFWorkflow } from './workflows';

export class API {
	static submitSFWorkflow: (submission: SFWorkflowInput) => Promise<WorkflowSubmissionResponse<SFWorkflowInput>>;

	static fetchMunicipalityNames(): Promise<MunicipalityName[]> {
		return new Promise((resolve) => {
			// mock async call
			setTimeout(() => {
				resolve(Object.values(MunicipalityName));
			}, 500);
		});
	}

	static async writeNewSubmission(permitReqsObj: PermitReqsObject): Promise<void> {
		// write valid submission to db
		return Promise.resolve();
	}

	static generatePermitReqsObject(args: { type: PermitReqsType; points: string[] }): PermitReqsObject {
		let headline;
		switch (args.type) {
			case PermitReqsType.IN_HOUSE: {
				headline = 'In-House Review Process';
				break;
			}
			case PermitReqsType.OTC: {
				headline = 'Over-the-Counter Submission Process';
				break;
			}
			case PermitReqsType.NONE: {
				headline = 'No Permit';
				break;
			}
			default: {
				throw Error('Internal Server Error: Unknown PermitReqType');
			}
		}

		return {
			type: args.type,
			details: {
				headline,
				points: args.points,
			},
		};
	}
}

API.submitSFWorkflow = submitSFWorkflow;
