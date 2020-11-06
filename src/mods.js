const alfy = require('alfy');
const {splitInput} = require('./helper');

const mods = ['cmd', 'alt', 'ctrl', 'shift', 'fn'];

const items = alfy
	.inputMatches(mods).map(item => ({
		title: item,
		subtitle: `Create modifier object for ` + item,
		arg: item + ': {\
  subtitle: \'{cursor}\',\
  arg: \'\'\
},',
		mods: {
			cmd: {
				subtitle: 'Create full modifier object',
				arg: `mods: {
    ${item}: {
      subtitle: '{cursor}',
      arg: '',
    }
  },`
			}
		}
	}));

alfy.output(items);
