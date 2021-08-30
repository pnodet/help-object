import test from 'ava';
import * as helpObject from './index.js';

test('forEachEntry()', (t) => {
	t.pass();
});

test('functions()', (t) => {
	t.pass();
});

test('has()', (t) => {
	t.true(helpObject.has({foo: 'bar'}, 'foo'));
	t.false(helpObject.has({boz: 'bar'}, 'foo'));
});

test('invert()', (t) => {
	t.pass();
});

test('invertBy()', (t) => {
	t.pass();
});

test('keysIn()', (t) => {
	t.pass();
});

test('mapKey()', (t) => {
	t.pass();
});

test('mapObject()', (t) => {
	t.pass();
});

test('mapValue()', (t) => {
	t.pass();
});

test('toPlainObject()', (t) => {
	t.pass();
});
