/** Check if a file is binary
 * @example isBinaryFileSimple('README.md')
 * @param file - The file to check (name / path)
 * @returns `true` if file is binary, `false` else
 */
export const isBinaryFileSimple:IsBinaryFile;
export type IsBinaryFile=(file:string)=>boolean;
