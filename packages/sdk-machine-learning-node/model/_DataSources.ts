import {List as _List_} from '@aws/types';
import {_DataSource} from './_DataSource';

export const _DataSources: _List_ = {
    type: 'list',
    member: {
        shape: _DataSource,
    },
};