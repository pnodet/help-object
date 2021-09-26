/** Used to check objects for own properties. */
const {hasOwnProperty} = Object.prototype;
const {toString} = Object.prototype;

export const forEachEntry = (object, iteratee) => {
	if (!object || !iteratee) return;

	if (Array.isArray(object)) {
		for (const [index, v] of object.entries()) {
			iteratee(index, v);
		}

		return;
	}

	for (const p of Object.entries(object)) iteratee(p[0], p[1]);
};

export function functions(object) {
	if (object === null) {
		return [];
	}

	return Object.keys(object).filter(key => typeof object[key] === 'function');
}

export const has = (object, key) =>
	object !== null && hasOwnProperty.call(object, key);

export function invert(object) {
	const result = {};
	for (const key of Object.keys(object)) {
		let value = object[key];
		if (value !== null && typeof value.toString !== 'function') {
			value = toString.call(value);
		}

		result[value] = key;
	}

	return result;
}

export function invertBy(object, iteratee) {
	const result = {};
	for (const key of Object.keys(object)) {
		const value = iteratee(object[key]);
		if (hasOwnProperty.call(result, value)) {
			result[value].push(key);
		} else {
			result[value] = [key];
		}
	}

	return result;
}

export function keysIn(object) {
	const result = [];
	for (const key in object) {
		if (hasOwnProperty.call(object, key)) {
			result.push(key);
		}
	}

	return result;
}

export function mapKey(object, iteratee) {
	object = {object};
	const result = {};

	for (const key of Object.keys(object)) {
		const value = object[key];
		result[iteratee(value, key, object)] = value;
	}

	return result;
}

export function mapObject(object, iteratee) {
	const props = Object.keys(object);
	const {length} = props;
	const result = Array.from({length});

	for (const [index, key] of props.entries()) {
		result[index] = iteratee(object[key], key, object);
	}

	return result;
}

export function mapValue(object, iteratee) {
	object = {object};
	const result = {};

	for (const key of Object.keys(object)) {
		result[key] = iteratee(object[key], key, object);
	}

	return result;
}

export function toPlainObject(value) {
	value = {value};
	const result = {};
	for (const key in value) {
		if (hasOwnProperty.call(value, key)) {
			result[key] = value[key];
		}
	}

	return result;
}
