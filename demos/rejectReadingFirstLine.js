// @ts-check

import {openSync,readSync,rmSync,statSync,writeFileSync} from 'node:fs';
import { tmpdir } from 'node:os';

import { isBinaryFile } from 'is-binary-file' ;

/** Reading first line from text file
 *  - Error if given file is binary
 * @example getFirstLine( './file.txt' )
 * @param file - File to read (name / path)
 * @returns -
 * @type {(file:string)=>void}
 */
const getFirstLine = function( file ){
  if( isBinaryFile( file ) ){
    console.log( `\n# Error:\n# Binary file "${ file }" cannot be read by line\n` );
  }
  else{
    const theFile = {
      fd: openSync(file,'r'),
      size: statSync(file).size
    };
    let myLine='';
    while( myLine.slice(-1)!=='\n' && myLine.length <= theFile.size ){
      let mySample=Buffer.alloc(1);
      readSync(theFile.fd,mySample,0,1,myLine.length);
      myLine += mySample.toString();
    }
    console.log( `\n# First line of "${ file }":\n${ myLine }\n` );
  }
}

// Create testfiles
const myRandomName=crypto.randomUUID().split('-')[0];
const myBuffer=Buffer.alloc(12, '\u0007');
writeFileSync( `${tmpdir()}/random_${myRandomName}_1`, 'I am a textfile' );
writeFileSync( `${tmpdir()}/random_${myRandomName}_2`, myBuffer );

// Test
getFirstLine( `${tmpdir()}/random_${myRandomName}_1` );
getFirstLine( `${tmpdir()}/random_${myRandomName}_2` );

// Delete testfiles
rmSync( `${tmpdir()}/random_${myRandomName}_1` );
rmSync( `${tmpdir()}/random_${myRandomName}_2` );
