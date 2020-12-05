import test from 'ava';

import {
  capitalize,
  splitInput,
  getAppIcon,
  getIcon,
  getAsset,
  isValidUrl,
  enrichOptions
} from '../src/helper';

test('should capitalize the first character of a string', async t => {
	const result = await capitalize('test');
	t.is(result, 'Test');
	t.is(capitalize(), '');
});

test('should validate urls', t => {
	t.true(isValidUrl('google.com'));
	t.false(isValidUrl('test'));
});

test('splits input', t => {
	const input = 'Hello World';
	t.deepEqual(splitInput(' ', input), ['Hello', 'World']);
});

const gitlabIcon = {path: './assets/gitlab.png'};
test('gets icon paths', t => {
	t.deepEqual(getAppIcon(), {type: 'fileicon', path: '/Applications/Alfred.app'});
	t.deepEqual(getAppIcon('Atom'), {type: 'fileicon', path: '/Applications/Atom.app'});

	t.deepEqual(getIcon(), {path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertCautionIcon.icns'});
	t.deepEqual(getIcon('Clock'), {path: '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/Clock.icns'});

	t.deepEqual(getAsset('gitlab'), gitlabIcon);
});

test('validates urls', t => {
	const url = 'https://www.google.com';
	t.true(isValidUrl(url));
	t.false(isValidUrl('test'));
});

test('completes options', t => {
	const options = [
		{
			title: 'Test',
			subtitle: 'this is a test',
			arg: 'test argument'
		}
	];

	t.deepEqual(enrichOptions(options), [
		{
			title: 'Test',
			subtitle: 'this is a test',
			arg: 'test argument',
			uid: 'Test',
			autocomplete: 'test'
		}
	]);
});

test('completes missing title', t => {
	const options = [
		{
			arg: 'test',
			subtitle: 'this is a test'
		}
	];

	t.deepEqual(enrichOptions(options), [
		{
			title: 'Test',
			subtitle: 'this is a test',
			arg: 'test',
			uid: 'Test',
			autocomplete: 'test'
		}
	]);
});

test('adds default icon', t => {
	const options = [
		{
			arg: 'test',
			subtitle: 'this is a test'
		}
	];

	t.deepEqual(enrichOptions(options, {icon: getAsset('gitlab')}), [
		{
			title: 'Test',
			subtitle: 'this is a test',
			arg: 'test',
			uid: 'Test',
			autocomplete: 'test',
			icon: gitlabIcon
		}
	]);
});
