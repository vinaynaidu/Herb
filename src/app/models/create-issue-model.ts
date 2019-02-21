export class CreateIssueModel {
    // Contact fields
    areYouPrimaryContact: boolean;
    isEscalationContactAvailable: boolean;
    primaryContact: string;
    escalationContact: string;
    issueRegion: string;
    legalEntity: string;

    // Issue fields
    brief: string;
    description: string;
    location: string;
    businessDivision: string;
    frequency: string;
    isOriginalDataSourceKnown: boolean;
    originalDataSource: string;

    // Function fields
    isInfrastructureImpacted: boolean;
    infrastructureImpacted: string;
    isRdarrAffected: boolean;
    isProductSpecific: boolean;
    convention: string;
    assetClass: string;
    affectedProduct: string;

    // Business impact fields
    highLevelImpact: string;

    // Complete fields
    isFailureOfRuleCheck: boolean;
    quadIdentifier: string;
    isDatasetAttached: boolean;
    uploadedFile: BinaryType;

    // Non server fields
    currentStep: number;
}
