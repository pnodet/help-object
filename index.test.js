import test from 'ava';
import * as helpObject from './index.js';

test('forEachEntry()', (t) => {
	const object = {a: 1, b: 2, c: 3};
	const iteratee = (index, value) => {
		object[index] = value + 1;
	};

	helpObject.forEachEntry(object, iteratee);
	t.deepEqual(object, {a: 2, b: 3, c: 4});
});

test('functions()', (t) => {
	t.pass();
});

test('has()', (t) => {
	t.true(helpObject.has({foo: 'bar'}, 'foo'));
	t.false(helpObject.has({boz: 'bar'}, 'foo'));
});

test('invert()', (t) => {
	const object = {a: 1, b: 2, c: 3};
	const result = helpObject.invert(object);
	t.deepEqual(result, {1: 'a', 2: 'b', 3: 'c'});
});

test('invertBy()', (t) => {
	const object = {a: 1, b: 1, c: 2};
	const result = helpObject.invertBy(object, (value) => value + 1);
	t.deepEqual(result, {2: ['a', 'b'], 3: ['c']});
});

test('keysIn()', (t) => {
	const object = {a: 1, b: 2, c: 3};
	const result = helpObject.keysIn(object);
	t.deepEqual(result, ['a', 'b', 'c']);
});

test('mapKey()', (t) => {
	t.pass();
});

test('mapObject()', (t) => {
	const object = {a: 1, b: 2, c: 3};
	const square = (n) => n * n;
	const result = helpObject.mapObject(object, square);
	t.deepEqual(result, [1, 4, 9]);
});

test('mapValue()', (t) => {
	t.pass();
});

test('toPlainObject()', (t) => {
	t.pass();
});
