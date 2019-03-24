import { ValidationResponse } from "./validation-response";

export class CreateIssueModel {
    // Contact fields
    areYouPrimaryContact: boolean;
    isEscalationContactAvailable: boolean;
    primaryContact: string;
    escalationContact: string;
    issueRegion: string;
    isBauOrTechNotified: boolean;
    legalEntity: string;

    // Issue fields
    brief: string;
    description: string;
    location: string;
    businessDivision: string;
    frequency: string;
    isOriginalDataSourceKnown: boolean;
    originalDataSource: string;
    isIssueAssociatedWithClarity: boolean;
    analysingProgrammeId: string;
    analysingProgrammeName: string;

    // Function fields
    isInfrastructureImpacted: boolean;
    infrastructureImpacted: string;
    isRdarrAffected: boolean;
    isProductSpecific: boolean;
    convention: string;
    assetClass: string;
    affectedProduct: string;
    isIssueUnderWorkstreamGroup: boolean;
    workstream: string;

    // Business impact fields
    isAdjustmentConnected: boolean;
    adjustment: string;
    numberOfAdjustmentsPerMonth: string;
    effortNeeded: string;
    shouldDataBeCreated: boolean;
    dataCreationLocation: string;
    rowsOfDataToBeCreated: number;
    isReportingCorrectionNeeded: boolean;
    reportCorrectionLocation: string;
    rowsOfDataToBeCreatedForReportCorrection: number;
    isMonetaryImpacted: boolean;
    monetaryImpactType: string;
    estimatedMonetoryImpact: number;
    isClientImpacted: boolean;
    clientImpactType: string;
    isEpmRelated: string;
    empLevel: string;
    isAuditPointConnected: boolean;
    auditPointType: string;
    auditNumber: string;
    auditFindingRating: string;
    isRegulatoryRequirementConnected: boolean;
    regulatorBody: string;
    regulation: string;
    isRegulatoryScheduleRelated: boolean;
    regulatoryReport: string;
    highLevelImpact: string;

    // Complete fields
    isFailureOfRuleCheck: boolean;
    quadIdentifier: string;
    isDatasetAttached: boolean;
    isIssueLinkedToCase: boolean;
    linkedCaseId: string;
    uploadedFile: BinaryType;
    impactQuantity: number;

    // Non server fields
    currentStep: number;

    validateModel(): ValidationResponse {
        let validationResponse = new ValidationResponse();
        return validationResponse;
    }
}
