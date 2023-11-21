const fs = require('fs');
const path = require('path');
const rewire = require("rewire");

let _log = console.log;
let _buffer = '';
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

test("Function mergeTwoList should exist", () => {
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');
  expect(mergeTwoList).toBeTruthy();
});

test('You have to use a "for" loop', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const regex = /for\s*/gm
  expect(regex.test(file.toString())).toBeTruthy();
})
test('You must use the .concat() method', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const regex = /.concat\s*/gm
  expect(regex.test(file.toString())).toBeTruthy();
})

test("Function mergeTwoList must return an array", () => {
  const _app = rewire('./app.js');
  const mergeTwoList = _app.__get__('mergeTwoList');
  expect(Array.isArray(mergeTwoList([3, 4]))).toBe(true);
});

