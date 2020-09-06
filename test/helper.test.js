import test from 'ava';

const {capitalize, readData, getOptions} = require('../src/helper');
const optionsJson = require('../src/options');

test('should capitalize the first character of a string', async t => {
	const result = await capitalize('test');
	t.is(result, 'Test');
});

test('should read data from json', async t => {
	const result = await readData('./test/test.json');
	t.is(result.test, true);
});

test('should get options', async t => {
	console.log('optionsJson', optionsJson);
	const options = await getOptions();
	t.deepEqual(options, optionsJson);
});
