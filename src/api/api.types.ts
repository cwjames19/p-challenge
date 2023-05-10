import { ServerError } from './errors';

export enum MunicipalityName {
	SAN_FRANCISCO = 'san-francisco',
}

export enum PermitReqsType {
	IN_HOUSE = 'in-house',
	OTC = 'otc',
	NONE = 'none',
}

export type WorkflowSubmissionResponse<T extends Record<any, any>> = {
	errors: [ServerError] | undefined;
	requirements?: PermitReqsObject;
};

export type PermitReqsObject = {
	type: PermitReqsType;
	details: {
		headline: string;
		points: string[];
	};
};
