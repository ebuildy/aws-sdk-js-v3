import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Amazon ML returns the following elements. </p>
 */
export interface DeleteTagsOutput {
    /**
     * <p>The ID of the ML object from which tags were deleted.</p>
     */
    ResourceId?: string;

    /**
     * <p>The type of the ML object from which tags were deleted.</p>
     */
    ResourceType?: 'BatchPrediction'|'DataSource'|'Evaluation'|'MLModel'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}