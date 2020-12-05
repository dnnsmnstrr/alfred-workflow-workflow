import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('Atom');

	t.deepEqual(result, [
		{
  		title: 'Atom',
  		subtitle: 'Open Workflows in Atom',
  		arg: 'atom',
			uid: 'Atom',
			autocomplete: 'atom'
  	}
	]);
});
