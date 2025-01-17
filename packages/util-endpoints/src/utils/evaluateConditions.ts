import { ConditionObject, EvaluateOptions, FunctionReturn } from "../types";
import { evaluateCondition } from "./evaluateCondition";

export const evaluateConditions = (conditions: ConditionObject[] = [], options: EvaluateOptions) => {
  const conditionsReferenceRecord: Record<string, FunctionReturn> = {};

  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord,
      },
    });

    if (!result) {
      return { result };
    }

    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
    }
  }

  return { result: true, referenceRecord: conditionsReferenceRecord };
};
