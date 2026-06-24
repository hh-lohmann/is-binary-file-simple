import { assert, mock, suite, test } from 'node-test-bootstrap';

import { predefinedTestfile } from 'predefined-test-files'

import { isBinaryFileSimple } from '../index.js';

suite( 'Test with #predefined-test-files: "application/"', () => {
  predefinedTestfile('search:application/').forEach(value=>{
    if(value==='application/json'){
      test( 'Should return `false` for '+value, () => {
        assert.deepEqual(isBinaryFileSimple(predefinedTestfile(value)),false)
      });
      return;
    }
    test( 'Should return `true` for '+value, () => {
      assert.ok(isBinaryFileSimple(predefinedTestfile(value)))
    });
  })
});

suite( 'Test with #predefined-test-files: "audio/"', () => {
  predefinedTestfile('search:audio/').forEach(value=>{
    test( 'Should return `true` for '+value, () => {
      assert.ok(isBinaryFileSimple(predefinedTestfile(value)))
    });
  })
});

suite( 'Test with #predefined-test-files: "font/"', () => {
  predefinedTestfile('search:font/').forEach(value=>{
    test( 'Should return `true` for '+value, () => {
      assert.ok(isBinaryFileSimple(predefinedTestfile(value)))
    });
  })
});

suite( 'Test with #predefined-test-files: "image/"', () => {
  predefinedTestfile('search:image/').forEach(value=>{
    test( 'Should return `true` for '+value, () => {
      assert.ok(isBinaryFileSimple(predefinedTestfile(value)))
    });
  })
});

suite( 'Test with #predefined-test-files: "text/"', () => {
  predefinedTestfile('search:text/').forEach(value=>{
    test( 'Should return `false` for '+value, () => {
      assert.deepEqual(isBinaryFileSimple(predefinedTestfile(value)),false)
    });
  })
});

suite( 'Test with #predefined-test-files: "video/"', () => {
  predefinedTestfile('search:video/').forEach(value=>{
    test( 'Should return `true` for '+value, () => {
      assert.ok(isBinaryFileSimple(predefinedTestfile(value)))
    });
  })
});
