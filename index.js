// @ts-check

import {openSync,readSync,statSync} from 'node:fs';

/** @import {IsBinaryFile} from './types.d.ts' */

/** Check if a file is binary
 * @example isBinaryFileSimple('README.md')
 * @param file - The file to check (name / path)
 * @returns `true` if file is binary, `false` else
 * @type {IsBinaryFile}
 */
export const isBinaryFileSimple=function(file){
  const myFile={fd:openSync(file,'r')};
  let sampleLength=128;
  if(statSync(file).size<sampleLength) sampleLength=statSync(file).size;
  let myBuffer=Buffer.alloc(sampleLength);
  readSync(myFile.fd,myBuffer,0,sampleLength,0);
  const mySample=myBuffer.toString();
  if(JSON.stringify(mySample)!==JSON.stringify(mySample.replace(/[\u0000-\u0009\u000B-\u000C\u000E-\u0019]/g,''))) return true;
  return false;
}
