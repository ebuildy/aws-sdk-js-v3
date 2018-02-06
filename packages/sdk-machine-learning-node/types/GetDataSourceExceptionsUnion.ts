import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
export type GetDataSourceExceptionsUnion = InvalidInputException |
    ResourceNotFoundException |
    InternalServerException;
