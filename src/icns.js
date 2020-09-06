const alfy = require('alfy');
const icons = require('../assets/icons.json');

const getTitle = (icon = '') => {
	let title = icon;
	title = title.replace('Icon', '');
	title = title.replace('com.apple.', '');
	title = title.replace('Sidebar', '');
	return title;
};

const items = alfy
	.inputMatches(icons, 'title')
	.map(element => ({
		title: getTitle(element),
		subtitle: 'Paste icon name',
		arg: element,
		icon: {
			path: alfy.icon.get(element)
		},
		mods: {
			alt: {
				arg: `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/${element}.icns`,
				subtitle: 'Paste full path'
			},
			shift: {
				arg: `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/${element}.icns`,
				subtitle: 'Open in preview'
			},
			cmd: {
				subtitle: 'Paste alfy icon object',
				arg: `icon: {
          path: alfy.icon.get('${element}')
        },`
			}
		}
	}));

alfy.output(items);
