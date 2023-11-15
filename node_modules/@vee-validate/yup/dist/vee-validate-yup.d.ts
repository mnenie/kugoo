import { Schema, InferType, ValidateOptions } from 'yup';
import { TypedSchema } from 'vee-validate';
import { PartialDeep } from 'type-fest';

declare function toTypedSchema<TSchema extends Schema, TOutput = InferType<TSchema>, TInput = PartialDeep<TOutput>>(yupSchema: TSchema, opts?: ValidateOptions): TypedSchema<TInput, TOutput>;

export { toTypedSchema };
