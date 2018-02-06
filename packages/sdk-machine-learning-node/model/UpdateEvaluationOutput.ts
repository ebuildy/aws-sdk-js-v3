import {Structure as _Structure_} from '@aws/types';

export const UpdateEvaluationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        EvaluationId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};