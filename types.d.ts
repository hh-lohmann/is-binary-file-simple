/** Check if a file is binary
 * @example isBinaryFile('README.md')
 * @param file - The file to check (name / path)
 * @returns `true` if file is binary, `false` else
 */
export const isBinaryFile:IsBinaryFile;
export type IsBinaryFile=(file:string)=>boolean;
