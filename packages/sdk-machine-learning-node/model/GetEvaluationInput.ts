import {Structure as _Structure_} from '@aws/types';

export const GetEvaluationInput: _Structure_ = {
    type: 'structure',
    required: [
        'EvaluationId',
    ],
    members: {
        EvaluationId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};