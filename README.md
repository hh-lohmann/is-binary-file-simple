###### npm package

# is-binary-file

Check with minimal effort if a file is binary, e.g. before trying to apply text file methods

*[hh lohmann &lt;hh.lohmann@gmail.com&gt;](mailto:hh.lohmann@gmail.com?subject=is-binary-file)*

<!-- see https://hh-lohmann.github.io/github-readme-pages-switch -->
<p align="center" id="github_readme_pages_switch" style="display:none;">
  <b><i>This page may be displayed more optimal in its
  <a href="https://hh-lohmann.github.io/is-binary-file">GitHub Pages view</a>
  </i></b>
</p>


## Caution

For being fast and simple, the **[file](#file)** is not fully analyzed (see [Details](#details)), but sufficently enough for every day files. **It is not a tool against malicious files hiding executable code in seemingly harmless text files**.


## Synopsis

```js
  import { isBinaryFile } from 'is-binary-file'

  isBinaryFile( file )
```


## Parameters

### file
File to check (filename with or without path)



## Returns

`true` if given **[file](#file)** is a binary file, `false` else


## Examples

```js
  const getFirstLine = async function( file ){
    if( isBinaryFile( file ) ){
      console.log( 'Binary files cannot be read by line' );
    }
    else{
      // ... code ...
      console.log( `First line of ${ file }:\n${ firstLine }` );
    }
  }
  getFirstLine( 'README.md' );
```


## Demo

<!-- see https://hh-lohmann.github.io/github-readme-demos-switch -->
<p id="github_readme_demos_switch">
  See <a href="https://hh-lohmann.github.io/is-binary-file/demos"
  onclick="if( location.hostname.replace( /\d/g, '' ).replaceAll( '.', '' ) === ''
  || location.hostname === 'localhost' ){ this.href='./demos/';
  alert( 'Dev environment detected - switching to local version' ); }"
  >demos</a><span style="display:none;"> on GitHub Pages for this repo</span>
</p>


## Installation

Pick for your preferred package manager:

```shell
  npm i is-binary-file
```

```shell
  pnpm i is-binary-file
```

```shell
  bun i is-binary-file
```

```shell
  # For Yarn you should double check docs for your and / or
  # current Yarn version, newer versions do not treat `i package_name`
  # as an alias for `add ...` and exclude global installations
  yarn add is-binary-file
```


## Details

  * The first 128 Bytes of the given **[file](#file)** are checked for containing [Control Characters](#rfc-20-ascii-format-for-network-interchange-control-characters). If Control Characters (execpt LF (Line Feed) and CR (Carriage Return) for line breaks) exist, the file is binary.


## Tests

  * Code tests to be run with Node.js / Bun available in [Source Code](#source-code)


## Source Code

  * GitHub: <https://github.com/hh-lohmann/is-binary-file>


## License

  * MIT (see [LICENSE.txt](LICENSE.txt))


## References

### RFC 20: ASCII format for network interchange: Control Characters
  * <https://datatracker.ietf.org/doc/html/rfc20#section-5.2>




<!-- see https://hh-lohmann.github.io/html-endspacer -->
<p id="endspacer" data-version="0.2.0" title="Endspacer - helps to align scrolling and positioning link targets | Scroll up to content or click / touch to jump to page top" align="center"><a href="#top"><img alt="Endspacer: './markdown-assets/endspacer.png' missing - see https://hh-lohmann.github.io/html-endspacer" src="./markdown-assets/endspacer.png" height="1000" width="100%"><br>[top]</a></p>
