/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * @param {NonNullableData}
 * NonNullableData<T> là một conditional type.
 * Nó kiểm tra kiểu dữ liệu T và nếu T là null hoặc undefined,
 * thì kiểu kết quả là never (để ngăn việc gán null hoặc undefined cho dataLocal).
 * Nếu T không phải là null hoặc undefined, thì kiểu kết quả là T chính nó.
 *
 */

type NonNullableData<T> = T extends null | undefined ? never : T;
